import { Check } from "lucide-react"

export function WhyZiconCloud() {
  const reasons = [
    "Enterprise-grade security & SLA-backed hosting",
    "Blockchain-native support team",
    "Powered by decentralized cloud & open protocols",
    "Designed for real-world impact (ESG, finance, tech)",
  ]

  return (
<section className="w-full py-12 md:py-24 lg:py-32 ">
  <div className="container mx-auto px-4 md:px-6 text-center">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
      Why ZiCON Cloud?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {reasons.map((reason, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6
                     hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out"
        >
          <div className="flex items-center justify-center h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full">
            <Check className="h-6 w-6 text-green-500 dark:text-green-300" />
          </div>
          <p className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-200 text-center">
            {reason}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


  )
}