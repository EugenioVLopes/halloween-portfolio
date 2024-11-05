import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Include = () => {
  const reasons = [
    {
      title: "Oportunidade de Crescimento",
      content:
        "Ansioso para aprender com profissionais experientes e trabalhar em projetos reais.",
    },
    {
      title: "Desenvolvimento Técnico",
      content:
        "Animado para aplicar e aprimorar minhas habilidades de desenvolvimento web em cenários práticos.",
    },
    {
      title: "Colaboração em Equipe",
      content:
        "Ansioso para trabalhar com pessoas de mentalidade semelhante e contribuir para projetos significativos.",
    },
  ];

  return (
    <section id="include" className="py-20 bg-red-900">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <Card className="bg-orange-950/50 border-red-800">
          <CardHeader>
            <CardTitle className="text-3xl text-orange-100">
              Por que a Include?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-orange-100">
            <p className="mb-8 text-lg">
              A Include Engenharia representa uma oportunidade incrível para
              crescer como desenvolvedor enquanto faço contribuições
              significativas para projetos do mundo real.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {reasons.map((reason) => (
                <Card
                  key={reason.title}
                  className="bg-orange-900/30 border-orange-800 hover:bg-orange-900/50 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>{reason.content}</CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Include;
