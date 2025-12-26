"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    await resend.emails.send({
      from: "Stashd Contact <onboarding@resend.dev>",
      to: "team@stashdapp.io",
      replyTo: formData.email,
      subject: `[Stashd] ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send message" };
  }
}
