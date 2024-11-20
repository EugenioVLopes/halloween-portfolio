
"use client";
import { useEffect, useState } from "react";

const RainAndLightning = () => {
  const [lightning, setLightning] = useState(false);
  const [lightningPaths, setLightningPaths] = useState<string[]>([]);
  const [rainDrops, setRainDrops] = useState<JSX.Element[]>([]);

  // Função para gerar um caminho de raio aleatório com posição variável
  const generateLightningPath = () => {
    // Posição inicial aleatória ao longo de toda a largura
    const startX = Math.random() * window.innerWidth;
    let path = `M ${startX} 0`;
    let y = 0;

    // Gerar ramificações principais
    while (y < window.innerHeight * 0.7) {
      const nextY = y + 20 + Math.random() * 30;
      const nextX = startX + (Math.random() - 0.5) * 200; // Aumentei a variação horizontal
      path += ` L ${nextX} ${nextY}`;

      // 30% de chance de criar uma ramificação
      if (Math.random() < 0.3) {
        const branchX = nextX + (Math.random() - 0.5) * 100;
        const branchY = nextY + Math.random() * 50;
        path += ` M ${nextX} ${nextY} L ${branchX} ${branchY}`;
      }

      y = nextY;
    }

    return path;
  };

  useEffect(() => {
    const createLightning = () => {
      if (Math.random() < 0.6) {
        const numberOfLightnings = Math.floor(Math.random() * 5) + 1;
        const newPaths = Array.from(
          { length: numberOfLightnings },
          generateLightningPath
        );

        setLightningPaths(newPaths);
        setLightning(true);

        // Flash principal
        setTimeout(() => {
          setLightning(false);
        }, 300);

        // Flash secundário
        setTimeout(() => {
          setLightning(true);
          setTimeout(() => {
            setLightning(false);
          }, 50);
        }, 150);
      }
    };

    const interval = setInterval(() => {
      createLightning();

      if (Math.random() < 0.4) {
        setLightning(true);
        setTimeout(() => setLightning(false), 150);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const drops = Array.from({ length: 50 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-0.5 h-6 bg-blue-200/30 opacity-0"
        style={{
          left: `${Math.random() * 100}%`,
          top: "-10px",
          animation: `rainDrop ${1.5 + Math.random()}s linear ${Math.random() * 2}s infinite`,
        }}
      />
    ));
    setRainDrops(drops);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Raios */}
        {lightning &&
          lightningPaths.map((path, index) => (
            <g key={index}>
              {/* Raio principal */}
              <path
                d={path}
                stroke="white"
                strokeWidth="2"
                fill="none"
                className="opacity-90"
              />
              {/* Brilho do raio */}
              <path
                d={path}
                stroke="rgb(219, 234, 254)"
                strokeWidth="6"
                fill="none"
                className="opacity-50"
                filter="blur(8px)"
              />
            </g>
          ))}
      </svg>

      {/* Container de chuva */}
      <div className="absolute inset-0">
        {rainDrops}
      </div>

      <style jsx>{`
        @keyframes rainDrop {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          10%,
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default RainAndLightning;