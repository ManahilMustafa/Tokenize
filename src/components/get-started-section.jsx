import { Mail } from "lucide-react"

export function GetStartedSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{"Get Started Today"}</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4">
          Ready to tokenize your assets?
        </p>
        <div className="flex flex-col gap-4 sm:flex-row justify-center mt-8">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-3">
            {"Start for Free"}
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-muted hover:text-muted-foreground h-10 px-6 py-3">
            {"Request Enterprise Access"}
          </button>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-8 flex items-center justify-center gap-2">
          {"Or contact us: "}
          <Mail className="h-4 w-4" />
          <a href="mailto:hello@ziconcloud.me" className="underline hover:text-primary">
            {"hello@ziconcloud.me"}
          </a>
        </p>
      </div>
    </section>
  )
}