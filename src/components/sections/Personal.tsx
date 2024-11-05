import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="personal" className="py-20 bg-orange-950">
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
    </section>
  );
};

export default Personal;
