"use server"

export const sendEmail = (formData: FormData) => {
  console.log("senderEmail", formData.get("senderEmail"))
  console.log("msg", formData.get("message"))
}