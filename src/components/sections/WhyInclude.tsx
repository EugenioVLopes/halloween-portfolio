"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import RainAndLightning from "../RainAndLightning";

const WhyInclude = () => {
  const reasons = [
    {
      title: "Crescimento Profissional",
      content:
        "Desenvolvimento de competências práticas através de projetos reais. Ambiente estruturado para aprendizagem com acompanhamento de profissionais experientes.",
    },
    {
      title: "Desenvolvimento Técnico",
      content:
        "Aplicação de tecnologias modernas em projetos práticos. Aperfeiçoamento em programação, gestão de projetos e metodologias ágeis.",
    },
    {
      title: "Trabalho em Equipe",
      content:
        "Integração com equipe multidisciplinar focada em tecnologia e inovação. Participação em projetos colaborativos com impacto direto no mercado.",
    },
    {
      title: "Vivência Empresarial",
      content:
        "Experiência prática em gestão, empreendedorismo e liderança. Desenvolvimento de projetos para composição de portfólio profissional.",
    },
    {
      title: "Networking Estratégico",
      content:
        "Conexão com rede de profissionais do mercado, docentes e estudantes. Acesso a eventos, workshops e treinamentos especializados.",
    },
    {
      title: "Impacto Social",
      content:
        "Desenvolvimento de soluções tecnológicas com impacto direto na comunidade. Participação em projetos que contribuem para o desenvolvimento local.",
    },
  ];

  return (
    <section id="why-include">
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
            <Card className="bg-orange-950/50 border-red-800">
              <CardHeader>
                <CardTitle className="text-3xl text-orange-100">
                  Por que entrar na Include?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-100">
                <p className="mb-8 text-lg">
                  A Include Engenharia oferece uma jornada única de
                  desenvolvimento profissional e pessoal. Aqui você encontrará
                  um ambiente propício para crescer, aprender e fazer a
                  diferença enquanto trabalha em projetos reais e desafiadores.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {reasons.map((reason) => (
                    <Card
                      key={reason.title}
                      className="bg-orange-900/30 border-orange-800 hover:bg-orange-900/50 transition-colors"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {reason.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>{reason.content}</CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default WhyInclude;
