"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import RainAndLightning from "../RainAndLightning";
import { AuroraBackground } from "../ui/aurora-background";

const AboutInclude = () => {
  const companyInfo = [
    {
      title: "Quem Somos",
      content:
        "A Include Engenharia é a empresa júnior vinculada ao Centro de Tecnologia da UFRN (Universidade Federal do Rio Grande do Norte). Atua na promoção de experiência empresarial para estudantes dos cursos de Ciências e Tecnologia, Engenharia da Computação, Engenharia Mecatrônica e Engenharia de Telecomunicações.",
    },
    {
      title: "Nossa História",
      content:
        "Fundada em agosto de 2015, a Include nasceu da iniciativa de estudantes que identificaram a necessidade de experiência prática no ambiente empresarial. A empresa representa uma solução para complementar a formação acadêmica com vivências em gestão, empreendedorismo e liderança.",
    },
    {
      title: "Missão",
      content:
        "Estabelecer conexões entre a sociedade e inovação tecnológica, desenvolvendo soluções em sistemas de informação e automação que geram impacto positivo, enquanto promove o desenvolvimento profissional de seus membros.",
    },
    {
      title: "Visão",
      content:
        "Ser referência em desenvolvimento tecnológico e formação profissional, mantendo uma estrutura organizacional sólida, entregando projetos de alto impacto e consolidando parcerias estratégicas que fortaleçam a marca.",
    },
  ];

  const contactInfo = {
    address:
      "Centro de Tecnologia - S/N – Campus Universitário Lagoa Nova – Natal, RN",
    email: "include.engenharia@gmail.com",
    phone: "(84) 9 9626-7091",
  };

  return (
    <section id="about-include">
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
          className="relative flex flex-col gap-4 items-center justify-center px-4 py-12"
        >
          <div className="container mx-auto px-4 max-w-screen-lg space-y-8">
            {/* Company Information */}
            <Card className="bg-orange-950/50 border-red-800">
              <CardHeader>
                <CardTitle className="text-3xl text-orange-100">
                  Sobre a Include
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-100">
                <div className="grid md:grid-cols-2 gap-6">
                  {companyInfo.map((info) => (
                    <Card
                      key={info.title}
                      className="bg-orange-900/30 border-orange-800 hover:bg-orange-900/50 transition-colors"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl">{info.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{info.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-orange-950/50 border-red-800">
              <CardHeader>
                <CardTitle className="text-3xl text-orange-100">
                  Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-100">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-orange-900/30 border-orange-800">
                    <CardHeader>
                      <CardTitle className="text-xl">Endereço</CardTitle>
                    </CardHeader>
                    <CardContent>{contactInfo.address}</CardContent>
                  </Card>
                  <Card className="bg-orange-900/30 border-orange-800">
                    <CardHeader>
                      <CardTitle className="text-xl">Email</CardTitle>
                    </CardHeader>
                    <CardContent>{contactInfo.email}</CardContent>
                  </Card>
                  <Card className="bg-orange-900/30 border-orange-800">
                    <CardHeader>
                      <CardTitle className="text-xl">Telefone</CardTitle>
                    </CardHeader>
                    <CardContent>{contactInfo.phone}</CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default AboutInclude;
