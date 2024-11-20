import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/EugenioVLopes",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/eugenio-lopes-83925228b/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:eugenio.lopes.090@ufrn.edu.br",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-red-950 text-orange-100 py-10 border-t border-red-800">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-orange-200">Vamos criar algo incrível juntos!</p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-orange-300 transition-colors"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 text-orange-300/60">
          <p>
            © 2024 Eugenio Lopes. Feito para o desafio Include Engenharia 🎃
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
