

export async function registerUser(formData) {
  const email = formData.get("email")
  const password = formData.get("password")

  // Simulate a delay for network request
  await new Promise((resolve) => setTimeout(resolve, 1500))

  if (!email || !email.includes("@") || !password || password.length < 6) {
    return { success: false, message: "Please enter a valid email and a password of at least 6 characters." }
  }

  // In a real application, you would hash the password and save the user to a database.
  console.log(`User registration simulated for: ${email}`)

  return { success: true, message: "Registration successful! You can now log in." }
}