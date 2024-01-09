"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = (formData: FormData) => {
  console.log("senderEmail", formData.get("senderEmail"))
  console.log("msg", formData.get("message"))

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'jayjang0209@gmail.com',
    subject: 'Mesaage from Portfolio Site',
    html: `<p>${formData.get("message")}</p>`,
  })
}