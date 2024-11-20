"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Ghost } from "lucide-react";
import { useState } from "react";
import { LampContainer } from "../ui/lamp";

const HalloweenHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-black">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center w-full "
        >
          <div className=" w-full max-w-7xl px-4">
            <div className="w-full text-center ">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
                <span className="block bg-gradient-to-br from-purple-200 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Bem-vindo ao Meu
                </span>
                <span className="block mt-2 bg-gradient-to-br from-purple-200 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Portfólio Assustador
                  <Ghost className="inline-block w-8 h-8 ml-2 animate-bounce sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </span>
              </h1>

              <p className="max-w-2xl mx-auto mt-6 text-base text-purple-200 sm:text-lg md:text-xl opacity-90">
                Desenvolvido com Next.js, Tailwind CSS e TypeScript por <br />{" "}
                Eugenio Lopes.
              </p>

              <div className="mt-8">
                <Button
                  variant="outline"
                  className="group relative overflow-hidden px-6 py-3 bg-purple-600/20 hover:bg-purple-700/40 text-purple-100 border-purple-500/50 transition-all duration-300 ease-in-out hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => {
                    const element = document.getElementById("about");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2 text-base sm:text-lg">
                    Explore se você ousar
                    <Ghost
                      className={`transition-transform duration-300 ease-in-out ${
                        isHovered
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-4 opacity-0"
                      }`}
                      size={20}
                    />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default HalloweenHero;
