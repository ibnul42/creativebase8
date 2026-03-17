"use server";

import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success?: boolean;
  error?: string;
  message?: string;
};

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const schema = z.object({
      firstName: z.string().min(1, "First name required"),
      lastName: z.string().min(1, "Last name required"),
      email: z.string().email("Invalid email"),
      subject: z.string().min(1, "Subject required"),
      message: z.string().min(5, "Message too short"),
    });

    const parsed = schema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error.issues[0].message,
      };
    }

    const { firstName, lastName, email, subject, message } = parsed.data;

    // Send email to YOU
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["ibnulashir42@gmail.com"], // 👈 CHANGE THIS
      subject: `New message: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    if (error) {
      console.error(error);
      return {
        success: false,
        error: "Failed to send email",
      };
    }

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: "Something went wrong",
    };
  }
}