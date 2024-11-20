"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import RainAndLightning from "../RainAndLightning";

const Personal = () => {
  const hobbies = [
    "🎮 Entusiasta de jogos",
    "📚 Leitor de livros",
    "🎧 Amante de música",
    "🏃‍♂️ Gosto de caminhar",
  ];

  const funFacts = [
    "💻 Comecei a programar no meu 2 semestre do curso",
    "🌟 Adoro resolver quebra-cabeças",
    "☕ Não entusiasta de café",
    "🌙 Programador diurdo",
  ];

  return (
    <section id="personal">
      <AuroraBackground>
        <RainAndLightning />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="container mx-auto px-4 max-w-screen-lg">
            <Card className="bg-orange-900/50 border-orange-800">
              <CardHeader>
                <CardTitle className="text-3xl text-orange-100">
                  Interesses Pessoais
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-100">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Hobbies</h3>
                    <ul className="space-y-4">
                      {hobbies.map((hobby) => (
                        <li
                          key={hobby}
                          className="flex items-center space-x-2 hover:text-orange-200 transition-colors"
                        >
                          {hobby}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Curiosidades</h3>
                    <ul className="space-y-4">
                      {funFacts.map((fact) => (
                        <li
                          key={fact}
                          className="flex items-center space-x-2 hover:text-orange-200 transition-colors"
                        >
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default Personal;
