export function WhoItsFor() {
  const audiences = [
    {
      image: "/carbon.webp",
      title: "Carbon Project Developers & Registries",
      description: "Tokenize and verify carbon offsets with traceable, secure smart contracts.",
    },
    {
      image: "/real.webp",
      title: "Real Estate Platforms",
      description: "Enable fractional investment with legal-compliant token wrappers.",
    },
    {
      image: "/brands.png",
      title: "Brands & Retailers",
      description: "Launch loyalty or reward tokens that integrate with apps or wallets.",
    },
    {
      image: "/game.jpeg",
      title: "Gaming Studios & NFT Creators",
      description: "Mint interoperable tokens, royalties, and game assets.",
    },
    {
      image: "/enter.jpg",
      title: "Enterprises & Startups",
      description: "Raise capital, engage communities, or digitize any asset.",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-10 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">{"Who It’s For"}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                  <p className="text-gray-500">{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="flex justify-center">
        <div className="h-px w-300 bg-gray-300" />
      </div>
    </>
  )
}
