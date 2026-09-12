interface Env {
	GOOGLE_SHEETS_WEBHOOK_URL?: string;
}

interface AssessmentPayload {
	picName: string;
	businessName: string;
	industry: string;
	phone: string;
	notes?: string;
	answers: {
		salesChannel: number;
		operationalFriction: number;
		credibilityDemand: number;
		searchIntent: number;
		platformRisk: number;
	};
	totalScore: number;
	urgencyPercentage: number;
	urgencyLevel: string;
	timestamp?: string;
}

export const onRequestOptions: PagesFunction = async () => {
	return new Response(null, {
		status: 204,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
		},
	});
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
	try {
		const contentType = context.request.headers.get("content-type") ?? "";
		if (!contentType.includes("application/json")) {
			return new Response(
				JSON.stringify({ error: "Invalid Content-Type. Expected application/json." }),
				{ status: 400, headers: { "Content-Type": "application/json" } }
			);
		}

		const body = (await context.request.json()) as AssessmentPayload;

		// Basic validation
		if (!body.picName || !body.businessName || !body.phone) {
			return new Response(
				JSON.stringify({ error: "Missing required contact or business fields." }),
				{ status: 422, headers: { "Content-Type": "application/json" } }
			);
		}

		if (typeof body.urgencyPercentage !== "number" || typeof body.totalScore !== "number") {
			return new Response(
				JSON.stringify({ error: "Missing or invalid calculation scores." }),
				{ status: 422, headers: { "Content-Type": "application/json" } }
			);
		}

		const enrichedPayload = {
			...body,
			timestamp: body.timestamp || new Date().toISOString(),
		};

		const webhookUrl = context.env?.GOOGLE_SHEETS_WEBHOOK_URL;

		if (webhookUrl) {
			try {
				const upstreamRes = await fetch(webhookUrl, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(enrichedPayload),
				});

				if (!upstreamRes.ok) {
					console.error(
						"Google Sheets upstream responded with error:",
						upstreamRes.status,
						await upstreamRes.text()
					);
				}
			} catch (webhookErr) {
				console.error("Failed to forward payload to Google Sheets webhook:", webhookErr);
			}
		} else {
			console.warn("GOOGLE_SHEETS_WEBHOOK_URL is not set. Data not forwarded to Google Sheets.");
		}

		return new Response(
			JSON.stringify({
				success: true,
				message: "Assessment data recorded successfully.",
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	} catch (err) {
		console.error("Error processing assessment submission:", err);
		return new Response(
			JSON.stringify({ error: "Internal server error occurred." }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
};
