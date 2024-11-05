import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Include from '@/components/sections/Include';
import Personal from '@/components/sections/Personal';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-950">
      <Header />
      <Hero />
      <About />
      <Include />
      <Personal />
      <Footer />
    </main>
  );
}