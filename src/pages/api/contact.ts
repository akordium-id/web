import type { APIRoute } from "astro";

const EMAIL_TO = "admin@akordium.id";
const EMAIL_FROM = "no-reply@akordium.id";
const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const POST: APIRoute = async ({ request }) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      errors.name = "Name is required";
    } else if (name.length > 50) {
      errors.name = "Name must be at most 50 characters";
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
      errors.subject = "Subject is required";
    } else if (subject.length > 100) {
      errors.subject = "Subject must be at most 100 characters";
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      errors.message = "Message is required";
    } else if (message.length > 500) {
      errors.message = "Message must be at most 500 characters";
    }

    if (Object.keys(errors).length > 0) {
      return new Response(
        JSON.stringify({ success: false, errors }),
        { status: 400, headers }
      );
    }

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ success: false, message: "Server configuration error" }),
        { status: 500, headers }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: [EMAIL_TO],
        subject: subject.trim(),
        html: `
          <h2>New Contact Form Submission</h2>
          <table>
            <tr><td><strong>Name:</strong></td><td>${name.trim()}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${email.trim()}</td></tr>
            ${phone ? `<tr><td><strong>Phone:</strong></td><td>${phone.trim()}</td></tr>` : ""}
            <tr><td><strong>Subject:</strong></td><td>${subject.trim()}</td></tr>
          </table>
          <h3>Message:</h3>
          <p>${message.trim().replace(/\n/g, "<br>")}</p>
        `,
        reply_to: email.trim(),
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to send email",
          error: errorData?.message,
        }),
        { status: 500, headers }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully!" }),
      { status: 200, headers }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Invalid request body" }),
      { status: 400, headers }
    );
  }
};
