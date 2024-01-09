"use server"

export const sendEmail = (formData: FormData) => {
  console.log("senderEmail", formData.get("senderEmail"))
  console.log("senderName", formData.get("senderName"))
}