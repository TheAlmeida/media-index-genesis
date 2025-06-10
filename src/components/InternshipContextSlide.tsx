
import React, { useState, useEffect } from 'react';
import { Building, MapPin, Code, ChartBar, Calendar, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InternshipContextSlideProps {
  isActive?: boolean;
  className?: string;
}

const InternshipContextSlide: React.FC<InternshipContextSlideProps> = ({ isActive = true, className }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationStep(0);
      
      const timeouts = [
        setTimeout(() => setAnimationStep(1), 200),
        setTimeout(() => setAnimationStep(2), 400),
        setTimeout(() => setAnimationStep(3), 600),
        setTimeout(() => setAnimationStep(4), 800),
        setTimeout(() => setAnimationStep(5), 1000),
        setTimeout(() => setAnimationStep(6), 1200),
        setTimeout(() => setAnimationStep(7), 1400),
        setTimeout(() => setAnimationStep(8), 1600),
      ];

      return () => timeouts.forEach(clearTimeout);
    } else {
      setAnimationStep(0);
    }
  }, [isActive]);

  const timelineSteps = [
    {
      icon: Building,
      title: "Company Overview",
      subtitle: "Mediaprobe - Audio Technology",
      description: "Empresa líder portuguesa especializada na avaliação do impacto emocional de conteúdo audiovisual",
      color: "blue",
      position: "top"
    },
    {
      icon: MapPin,
      title: "Location & Focus",
      subtitle: "Porto, Portugal",
      description: "Audio Recognition & Biometrical Sensors Technology com foco em soluções inovadoras",
      color: "indigo",
      position: "bottom"
    },
    {
      icon: Code,
      title: "Core Technologies",
      subtitle: "Audio Fingerprinting & Media Monitoring",
      description: "Tecnologias de processamento em tempo real e análise KPR para soluções audiovisuais",
      color: "purple",
      position: "top"
    },
    {
      icon: ChartBar,
      title: "Project Goals",
      subtitle: "6-Month Research Project",
      description: "Análise e benchmark de algoritmos de audio fingerprinting para melhorar o algoritmo interno",
      color: "green",
      position: "bottom"
    },
    {
      icon: Calendar,
      title: "Timeline & Activities",
      subtitle: "February - July 2024",
      description: "Revisão da literatura, implementação de 6 algoritmos, avaliação de desempenho e recomendações",
      color: "orange",
      position: "top"
    }
  ];

  const colorMap = {
    blue: { bg: "bg-blue-500", text: "text-blue-500", border: "border-blue-200" },
    indigo: { bg: "bg-indigo-500", text: "text-indigo-500", border: "border-indigo-200" },
    purple: { bg: "bg-purple-500", text: "text-purple-500", border: "border-purple-200" },
    green: { bg: "bg-green-500", text: "text-green-500", border: "border-green-200" },
    orange: { bg: "bg-orange-500", text: "text-orange-500", border: "border-orange-200" }
  };

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col",
      className
    )}>
      {/* Header */}
      <div className="flex-shrink-0 pt-[3vh] pb-[2vh] px-[2vw]">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-gray-800 mb-[1vh]">
            Internship Context
          </h1>
          <p className="text-[clamp(1rem,1.8vw,1.5rem)] text-gray-600 font-light">
            Overview of the host company and internship framework
          </p>
        </div>
      </div>

      {/* Zigzag Timeline */}
      <div className="flex-1 px-[4vw] pb-[4vh] flex items-center justify-center min-h-0">
        <div className="w-full max-w-[92vw] h-[75vh] relative">
          {/* Timeline Line */}
          <div className="absolute inset-0 flex items-center">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 400"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M 50 200 L 200 80 L 350 200 L 500 80 L 650 200 L 800 80 L 950 200"
                stroke="#e5e7eb"
                strokeWidth="3"
                fill="none"
                strokeDasharray="0"
                className={cn(
                  "transition-all duration-1000",
                  animationStep >= 2 ? "opacity-100" : "opacity-0"
                )}
              />
            </svg>
          </div>

          {/* Timeline Steps */}
          <div className="relative h-full flex justify-between items-center">
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon;
              const colors = colorMap[step.color];
              const isTop = step.position === "top";
              const stepVisible = animationStep >= index + 2;
              
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                  style={{ width: `${90 / timelineSteps.length}%` }}
                >
                  {/* Content Container */}
                  <div className={cn(
                    "flex flex-col items-center",
                    isTop ? "flex-col-reverse" : "flex-col"
                  )}>
                    
                    {/* Text Content */}
                    <div className={cn(
                      "text-center px-[1vw] transition-all duration-700 transform",
                      stepVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                      isTop ? "mb-[2vh]" : "mt-[2vh]"
                    )}
                    style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <h3 className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold text-gray-800 mb-[0.5vh]">
                        {step.title}
                      </h3>
                      <h4 className={cn(
                        "text-[clamp(0.8rem,1.2vw,1rem)] font-semibold mb-[0.5vh]",
                        colors.text
                      )}>
                        {step.subtitle}
                      </h4>
                      <p className="text-[clamp(0.7rem,1vw,0.9rem)] text-gray-600 leading-relaxed max-w-[15vw]">
                        {step.description}
                      </p>
                    </div>

                    {/* Rounded Card with Icon */}
                    <div className={cn(
                      "relative z-10 transition-all duration-700 transform",
                      stepVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
                    )}
                    style={{ transitionDelay: `${index * 200 + 100}ms` }}
                    >
                      <div className={cn(
                        "w-[clamp(4rem,6vw,5rem)] h-[clamp(4rem,6vw,5rem)] rounded-full shadow-xl border-4 border-white flex items-center justify-center",
                        colors.bg
                      )}>
                        <IconComponent className="w-[clamp(1.5rem,2.5vw,2rem)] h-[clamp(1.5rem,2.5vw,2rem)] text-white" />
                      </div>
                      
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Arrow to Next Step */}
                  {index < timelineSteps.length - 1 && (
                    <div className={cn(
                      "absolute top-1/2 -translate-y-1/2 transition-all duration-700",
                      stepVisible ? "opacity-60" : "opacity-0",
                      isTop ? "right-[-2vw]" : "right-[-2vw]"
                    )}
                    style={{ 
                      transitionDelay: `${index * 200 + 300}ms`,
                      left: '90%',
                      zIndex: 5
                    }}
                    >
                      <ArrowDown className={cn(
                        "w-[clamp(1.2rem,2vw,1.5rem)] h-[clamp(1.2rem,2vw,1.5rem)] text-gray-400",
                        isTop ? "rotate-45" : "-rotate-45"
                      )} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipContextSlide;
