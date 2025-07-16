

export async function requestDemo(formData) {
  const email = formData.get("email")

  // Simulate a delay for network request
  await new Promise((resolve) => setTimeout(resolve, 1500))

  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." }
  }

  console.log(`Demo request received for: ${email}`)

  return { success: true, message: "Thank you for your demo request! We'll be in touch soon." }
}