import { Code, LayoutGrid, ShieldCheck, Layers, ShoppingCart, Palette } from "lucide-react"

export function KeyFeatures() {
  const features = [
    {
      icon: Code,
      title: "No-Code Token Builder",
      description: "Create fungible & non-fungible tokens using intuitive templates.",
    },
    {
      icon: LayoutGrid,
      title: "Multi-Chain Support",
      description: "Deploy on Ethereum, Polygon, BSC, Solana, and more.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Engine",
      description: "Built-in KYC/AML, jurisdiction filters (MiCA, SEC, etc.).",
    },
    {
      icon: Layers,
      title: "Prebuilt Templates",
      description: "Carbon credits, real estate, creator tokens, loyalty, and more.",
    },
    {
      icon: ShoppingCart,
      title: "Marketplace Ready",
      description: "Launch and list on DEXs or ZiCON’s integrated token hub.",
    },
    {
      icon: Palette,
      title: "White-Label Option",
      description: "Offer tokenization under your own brand.",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-10 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">{"Key Features"}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {features.map((feature, index) => (
             <div
  key={index}
  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm 
             hover:shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out"
>

                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="flex justify-center">
        <div className="h-px w-300 bg-gray-300 " />
      </div>
    </>
  )
}
