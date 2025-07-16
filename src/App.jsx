import { HeroSection } from "./components/HeroSection"
import { WhatIsTokenizeX } from "./components/what-is-tokenize-x"
import { KeyFeatures } from "./components/key-features"
import { WhoItsFor } from "./components/who-its-for"
import { WhyZiconCloud } from "./components/why-zicon-cloud"
import { TestimonialsSection } from "./components/testimonials-section"
import { GetStartedSection } from "./components/get-started-section"
import { FooterSection } from "./components/footer-section"


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <WhatIsTokenizeX />
      <WhoItsFor />
      <KeyFeatures />
      <WhyZiconCloud />
      <TestimonialsSection />
      <GetStartedSection />
      <FooterSection />
    </div>
  )
}