"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AuroraBackground } from "../ui/aurora-background";
import RainAndLightning from "../RainAndLightning";
import Image from "next/image";

const About = () => {
  const skills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Git",
    "Node.js",
    "Tailwind CSS",
    "Django",
    "Python",
    "Docker",
    "UI/UX Design",
    "Responsive Design",
  ];

  return (
    <section id="about" className="relative pt-20">
      <AuroraBackground>
        <RainAndLightning />
        <div className="relative min-h-screen">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative z-10 flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="container mx-auto px-4 max-w-screen-lg">
              <Card className="bg-orange-900/50 border-orange-800">
                <RainAndLightning />
                <CardHeader>
                  <CardTitle className="text-3xl text-orange-100">
                    Um pouco sobre mim
                  </CardTitle>
                  <CardDescription className="text-orange-200">
                    Desenvolvedor & Estudante de Engenharia da Computação
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-orange-100">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 flex items-center justify-center">
                      <Image
                        src="/halloween-ghost.png"
                        alt="Profile"
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                      {/* <img
                  src="/api/placeholder/300/300"
                  alt="Profile"
                  className="rounded-xl w-full h-auto shadow-lg"
                /> */}
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4">
                        Resumo Profissional
                      </h3>
                      <p className="mb-6">
                        Estudante de engenharia apaixonado por desenvolvimento
                        web e criação de soluções inovadoras. Atualmente focado
                        em desenvolvimento front-end e buscando ingressar na
                        Include Engenharia para desenvolver ainda mais minhas
                        habilidades.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">
                        Habilidades Técnicas
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-orange-800 rounded-full text-sm hover:bg-orange-700 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Educação</h3>
                      <p className="mb-2">📚 Estudante de Engenharia na UFRN</p>
                      <p>🎓 Previsão de Graduação: 2027</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default About;
