import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { PortfolioSection } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import {
  FloraIllustrationTop,
  FloraIllustrationBottom,
} from "@/components/sections/FloraIllustration";

export default function Home() {
  return (
    <main className="relative min-h-screen grid grid-cols-[1fr_min(56rem,100%-2*clamp(1.5rem,3vw,2.5rem))_1fr] *:col-start-2 gap-y-18">
      <FloraIllustrationTop />
      <About />
      <Services />
      <PortfolioSection />
      <Contact />
      <FloraIllustrationBottom className="col-span-full! max-w-7xl w-full h-auto justify-self-center" />
    </main>
  );
}
