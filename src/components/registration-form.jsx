import { useActionState } from "react"
import { registerUser } from "../actions/register"
import { Loader2, Mail, Lock, ChromeIcon as Google, Instagram } from "lucide-react"
import { Link } from "react-router-dom"

export function RegistrationForm() {
  const [state, action, isPending] = useActionState(registerUser, null)

  return (
    <div className="w-full max-w-md mx-auto p-8 border border-gray-200 rounded-2xl shadow-md bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Your Account</h2>

      <form action={action} className="grid gap-6">
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              disabled={isPending}
              className="h-11 w-full pl-11 pr-3 py-2 rounded-md border border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              disabled={isPending}
              className="h-11 w-full pl-11 pr-3 py-2 rounded-md border border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
        </div>

        {state?.message && (
          <p className={`text-sm text-center ${state.success ? "text-green-600" : "text-red-600"}`}>
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center h-11 w-full text-white font-medium text-sm rounded-md transition duration-200 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 disabled:opacity-50"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Registering...
            </>
          ) : (
            "Register"
          )}
        </button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="grid gap-3">
        <button
          disabled={isPending}
          className="inline-flex items-center justify-center h-11 w-full border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition duration-200 gap-2"
          onClick={() => alert("Google OAuth integration requires server-side setup with Auth.js (NextAuth.js).")}
        >
          <Google className="h-5 w-5 text-blue-600" />
          Google
        </button>
        <button
          disabled={isPending}
          className="inline-flex items-center justify-center h-11 w-full border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition duration-200 gap-2"
          onClick={() => alert("Instagram OAuth integration requires server-side setup with Auth.js (NextAuth.js).")}
        >
          <Instagram className="h-5 w-5 text-pink-500" />
          Instagram
        </button>
      </div>

      {/* <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="#" className="text-blue-600 hover:underline">
          Log in
        </Link>
      </p> */}
    </div>
  )
}
