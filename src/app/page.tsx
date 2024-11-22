import About from "@/components/sections/About";
import AboutInclude from "@/components/sections/AboutInclude ";
import Footer from "@/components/sections/Footer";
import HalloweenHero from "@/components/sections/HalloweenHero";
import Personal from "@/components/sections/Personal";
import WhyInclude from "@/components/sections/WhyInclude";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  const navItems = [
    { name: "Início", link: "#hero" },
    { name: "Sobre", link: "#about" },
    { name: "Interesses", link: "#personal" },
    { name: "Include", link: "#about-include" },
    { name: "Por quê?", link: "#why-include" },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
      <main className="min-h-screen flex flex-col bg-slate-950 gap-4">
        <HalloweenHero />
        <About />
        <Personal />
        <AboutInclude />
        <WhyInclude />
        <Footer />
      </main>
    </>
  );
}
