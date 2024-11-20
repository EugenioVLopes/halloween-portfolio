import About from "@/components/sections/About";
import AboutInclude from "@/components/sections/AboutInclude ";
import Footer from "@/components/sections/Footer";
import HalloweenHero from "@/components/sections/HalloweenHero";
import Personal from "@/components/sections/Personal";
import WhyInclude from "@/components/sections/WhyInclude";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 gap-4">
      <HalloweenHero />
      <About />
      <AboutInclude />
      <WhyInclude />
      <Personal />
      <Footer />
    </main>
  );
}
