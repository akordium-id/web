import { Handlers } from "$fresh/server.ts";
import { z } from "zod";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

// Email configuration
const EMAIL_TO = "admin@akordium.id";
const EMAIL_FROM = "no-reply@akordium.id";

// Validation schema
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export const handler: Handlers = {
  async POST(req) {
    try {
      const data = await req.json();

      // Validate the request data
      const validatedData = ContactSchema.parse(data);

      // Create HTML email content
      const htmlContent = `
        <h2>New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; font-weight: bold;">Name:</td>
            <td style="padding: 8px;">${validatedData.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;">${validatedData.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Phone:</td>
            <td style="padding: 8px;">${validatedData.phone || "Not provided"
        }</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Subject:</td>
            <td style="padding: 8px;">${validatedData.subject}</td>
          </tr>
        </table>
        <h3 style="margin-top: 20px;">Message:</h3>
        <p style="white-space: pre-wrap;">${validatedData.message}</p>
      `;

      const client = new SMTPClient({
        connection: {
          hostname: "smtp.larksuite.com",
          port: 465,
          tls: true,
          auth: {
            username: "faiq@akordium.id",
            password: "p6HbDArIgowLAX1G",
          },
        },
      });

      await client.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: `New Contact Form: ${validatedData.subject}`,
        html: htmlContent,
      });

      await client.close();

      return new Response(
        JSON.stringify({ success: true, message: "Message sent successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    } catch (error) {
      console.error("Contact form error:", error);

      return new Response(
        JSON.stringify({
          success: false,
          message: error instanceof z.ZodError
            ? error.errors[0].message
            : "Failed to send message",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
};
