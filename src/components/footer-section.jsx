import { Linkedin, Instagram, Facebook } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full py-8 md:py-12 bg-[#352857] text-white text-center">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-lg font-semibold mb-2">{"Built on Trust. Backed by Blockchain."}</p>
        <p className="max-w-2xl mx-auto text-sm mb-4">
          TokenizeX by ZiCON Cloud is your gateway to compliant, scalable, real-world tokenization.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
          <a
            href="https://ziconcloud.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            ziconcloud.me
          </a>
          <span className="text-gray-400 hidden sm:inline">|</span>

          <a
            href="https://www.linkedin.com/company/zicon-europe/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <span className="text-gray-400 hidden sm:inline">|</span>

         <a
  href="https://www.instagram.com/ziconcloud/#" // Replace with actual Instagram link
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white flex items-center gap-1"
>
  <Instagram className="h-4 w-4" /> Instagram
</a>
          <span className="text-gray-400 hidden sm:inline">|</span>

          <a
            href="https://www.facebook.com/ziconcloud"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1"
          >
            <Facebook className="h-4 w-4" /> Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}
