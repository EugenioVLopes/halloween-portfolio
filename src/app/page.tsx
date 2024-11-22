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
    { name: "Include", link: "#about-include" },
    { name: "Por que Include?", link: "#why-include" },
    { name: "Interesses Pessoais", link: "#personal" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 gap-4">
      <FloatingNav navItems={navItems} />
      <HalloweenHero />
      <About />
      <AboutInclude />
      <WhyInclude />
      <Personal />
      <Footer />
    </main>
  );
}
