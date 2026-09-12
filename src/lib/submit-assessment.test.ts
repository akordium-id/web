import { describe, it, expect, vi } from "vitest";
import { onRequestOptions, onRequestPost } from "../../functions/api/submit-assessment";

function createMockContext(request: Request, env = {}) {
	return {
		request,
		env,
		next: vi.fn(),
		waitUntil: vi.fn(),
	};
}

describe("submit-assessment Cloudflare Pages Function", () => {
	it("should respond to OPTIONS request with 204 and CORS headers", async () => {
		const dummyRequest = new Request("https://example.com/api/submit-assessment", { method: "OPTIONS" });
		const res = await onRequestOptions(createMockContext(dummyRequest));
		expect(res.status).toBe(204);
		expect(res.headers.get("Access-Control-Allow-Origin")).toBe("*");
		expect(res.headers.get("Access-Control-Allow-Methods")).toContain("POST");
	});

	it("should reject non-json content type", async () => {
		const req = new Request("https://example.com/api/submit-assessment", {
			method: "POST",
			headers: { "Content-Type": "text/plain" },
			body: "hello",
		});

		const res = await onRequestPost(createMockContext(req));

		expect(res.status).toBe(400);
		const json = (await res.json()) as { error: string };
		expect(json.error).toContain("Invalid Content-Type");
	});

	it("should reject missing required contact fields", async () => {
		const req = new Request("https://example.com/api/submit-assessment", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				picName: "Budi",
				// missing businessName and phone
			}),
		});

		const res = await onRequestPost(createMockContext(req));

		expect(res.status).toBe(422);
		const json = (await res.json()) as { error: string };
		expect(json.error).toContain("Missing required contact or business fields");
	});

	it("should accept valid payload and handle webhook forwarding gracefully", async () => {
		const payload = {
			picName: "Budi Prasetyo",
			businessName: "Kopi Mantap",
			industry: "Kuliner & F&B",
			phone: "081234567890",
			totalScore: 16,
			urgencyPercentage: 73,
			urgencyLevel: "Kritis",
			answers: {
				salesChannel: 4,
				operationalFriction: 3,
				credibilityDemand: 3,
				searchIntent: 3,
				platformRisk: 3,
			},
		};

		const req = new Request("https://example.com/api/submit-assessment", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		const res = await onRequestPost(createMockContext(req));

		expect(res.status).toBe(200);
		const json = (await res.json()) as { success: boolean };
		expect(json.success).toBe(true);
	});
});
