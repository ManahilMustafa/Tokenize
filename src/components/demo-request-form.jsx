

import { useActionState } from "react"
import { requestDemo } from "../actions/demo"
import { Loader2 } from "lucide-react"

export function DemoRequestForm({ onClose }) {
  const [state, action, isPending] = useActionState(requestDemo, null)

  // Close modal on successful submission
  if (state?.success && !isPending) {
    setTimeout(() => {
      onClose()
    }, 2000) // Close after 2 seconds
  }

  return (
    <form action={action} className=" grid gap-4 py-4">
      <div className="grid gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          disabled={isPending || state?.success}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      {state?.message && (
        <p className={`text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
      )}
      <button
        type="submit"
        disabled={isPending || state?.success}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : state?.success ? (
          "Submitted!"
        ) : (
          "Submit Request"
        )}
      </button>
    </form>
  )
}