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
      to: ["business.creativebase8@gmail.com"],
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

export async function submitAdmissionForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const schema = z.object({
      fullName: z.string().min(1, "Full name is required"),
      phone: z.string().min(5, "Phone number is required"),
      whatsapp: z.string().optional(),
      email: z.string().email("Invalid email"),
      address: z.string().min(1, "Address is required"),
      qualification: z.string().min(1, "Qualification is required"),
      course: z.string().min(1, "Please select a course"),
      classTime: z.string().min(1, "Please select class time"),
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

    const {
      fullName,
      phone,
      whatsapp,
      email,
      address,
      qualification,
      course,
      classTime,
    } = parsed.data;

    const { error } = await resend.emails.send({
      from: "Admission Form <onboarding@resend.dev>",
      to: ["business.creativebase8@gmail.com"], // 👈 change to your email
      subject: `New Admission আবেদন - ${fullName}`,
      html: `
        <h2>New Admission আবেদন</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Qualification:</strong> ${qualification}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Preferred Class Time:</strong> ${classTime}</p>
      `,
    });

    if (error) {
      console.error(error);
      return {
        success: false,
        error: "Failed to submit admission form",
      };
    }

    return {
      success: true,
      message: "Admission form submitted successfully!",
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: "Something went wrong",
    };
  }
}