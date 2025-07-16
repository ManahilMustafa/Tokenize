
import { Rocket, BookOpen, X } from "lucide-react"
import { useState } from "react"
import { DemoRequestForm } from "./demo-request-form"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative w-full pt-12 pb-8 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            {"Tokenize Anything. Scale Everywhere."}
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto lg:mx-0">
            ZiCON Cloud’s TokenizeX-as-a-Service lets you launch secure, compliant tokens across any blockchain — with
            zero code.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-3 gap-2">
              <Rocket className="h-5 w-5" />
              {"Start Tokenizing"}
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-muted hover:text-muted-foreground h-10 px-6 py-3 gap-2"
            >
              <BookOpen className="h-5 w-5" />
              {"Book a Demo"}
            </button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src="/home.jpg"
            alt="Dashboard mockup or animated walkthrough of token builder"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-white relative w-full max-w-md rounded-lg border  p-6 shadow-lg">
            <div className="flex flex-col space-y-1.5 text-center sm:text-left">
              <h3 className="text-lg font-semibold leading-none tracking-tight">Request a Demo</h3>
              <p className="text-sm text-muted-foreground">
                Enter your email below and we'll get in touch to schedule your personalized demo.
              </p>
            </div>
            <DemoRequestForm onClose={() => setIsModalOpen(false)} />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}