"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const GhostIcon = ({ className = "" }) => (
  <span className={className}> 👻 </span>
);

const SpiderWeb = () => (
  <svg viewBox="0 0 100 100" className="absolute opacity-20">
    <path d="M50,0 L50,100 M0,50 L100,50 M0,0 L100,100 M0,100 L100,0" 
          className="stroke-orange-200/40" 
          strokeWidth="0.5"
          fill="none" />
    <path d="M50,50 L0,0 M50,50 L100,0 M50,50 L0,100 M50,50 L100,100" 
          className="stroke-orange-200/40" 
          strokeWidth="0.25"
          fill="none" />
  </svg>
);

const SpiderIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    className="w-6 h-6"
    strokeWidth="2"
  >
    <path d="M12 2a2 2 0 0 1 2 2v2M12 2a2 2 0 0 0-2 2v2M12 8a2 2 0 0 1 2 2v2M12 8a2 2 0 0 0-2 2v2M12 14a2 2 0 0 1 2 2v2M12 14a2 2 0 0 0-2 2v2M12 20a2 2 0 0 1 2 2M12 20a2 2 0 0 0-2 2" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const FloatingGhost = ({ className = "" }) => (
  <div className={`absolute transform ${className}`}>
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-8 h-8 text-orange-200/30"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8C22 6.48 17.52 2 12 2zM8 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
    </svg>
  </div>
);

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-red-950 to-red-900 flex items-center justify-center pt-8 overflow-hidden">
      {/* Spider Webs in Corners */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <SpiderWeb />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 rotate-90">
        <SpiderWeb />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 -rotate-90">
        <SpiderWeb />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 rotate-180">
        <SpiderWeb />
      </div>

      {/* Animated Spider */}
      <div className="absolute -top-8 right-1/4">
        <div className="animate-spider">
          <div className="h-8 w-[1px] bg-orange-200/30" />
          <SpiderIcon  />
        </div>
      </div>

      {/* Floating Ghosts */}
      <FloatingGhost className="top-1/4 left-1/4 animate-float" />
      <FloatingGhost className="top-1/3 right-1/4 animate-float delay-1000" />
      <FloatingGhost className="top-2/3 left-1/3 animate-float delay-2000" />

      <div className="container mx-auto px-4 text-center max-w-screen-md relative z-10">
        <h1 className="text-3xl md:text-6xl font-bold text-orange-100 mb-6 animate-pulse-slow">
          Bem-vindo ao Meu Portfólio Assustador 
          <span className="inline-block animate-bounce ml-2">👻</span>
        </h1>

        <p className="text-xl text-orange-200 mb-8 relative animate-fade-in opacity-0">
          Desenvolvido com Next.js, Tailwind CSS e TypeScript
        </p>

        <Button 
          className="bg-orange-600 hover:bg-orange-700 text-white text-center transform transition-transform duration-300 hover:scale-105 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            const element = document.getElementById('about');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="relative z-10 flex items-center gap-2 justify-center">
            Explore Mais
            <GhostIcon className={`transition-all duration-300
              ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            />
          </span>
        </Button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes spider {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spider {
          animation: spider 15s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in forwards;
          animation-delay: 0.5s;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Hero;