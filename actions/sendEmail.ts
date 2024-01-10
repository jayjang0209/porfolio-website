"use server";
import { createElement } from "react";
import { Resend } from "resend";
import { EmailLink } from "@/lib/data";
import ContactFormEmail from "@/email/contact-form-email"

const resend = new Resend(process.env.RESEND_API_KEY);

const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validateMessage = (message: string) => {
  return message.length > 0;
};

const getErrorMesssage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    return String(error.message);
  } else {
    return "Unknown error";
  }
}

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  console.log("senderEmail", senderEmail);
  console.log("msg", message);

  if (!validateEmail(senderEmail as string)) {
    return new Error("Invalid Email");
  }

  if (!validateMessage(message as string)) {
    return new Error("Invalid Message");
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: EmailLink,
      subject: "Mesaage from Portfolio Site",
      reply_to: senderEmail as string,
      react: createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMesssage(error),
    }
  }

  return null;
};
