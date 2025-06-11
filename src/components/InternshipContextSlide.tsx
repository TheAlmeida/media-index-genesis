import React, { useState, useEffect } from 'react';
import { Building, MapPin, Code, ChartBar, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SlideTitle } from './ui/SlideTitle';

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
      ];

      return () => timeouts.forEach(clearTimeout);
    } else {
      setAnimationStep(0);
    }
  }, [isActive]);

  const technologies = [
    "Audio Fingerprinting",
    "Monotorização de media", 
    "Processamento em tempo real",
    "Análise GSR"
  ];

  const activities = [
    "Revisão da literatura e análise do estado da arte",
    "Implementação e teste de 6 algoritmos",
    "Avaliação de desempenho e benchmarking", 
    "Criação de dataset com variações de ruído",
    "Análise estatística e recomendações"
  ];

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
          <SlideTitle title="Contexto" subtitle="Visão geral da empresa de acolhimento e enquadramento do estágio" />
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="flex-1 px-[2vw] pb-[9vh] flex items-center justify-center min-h-0">
        <div className="w-full max-w-[95vw] grid grid-cols-2 gap-[3vw] h-[75vh]">
          
          {/* Left Column - Company Information */}
          <div className={cn(
            "bg-white rounded-[1.5vw] shadow-xl border border-gray-200 p-[2vw] flex flex-col overflow-hidden transition-all duration-700 transform",
            animationStep >= 2 ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          )}>
            {/* Company Header */}
            <div className="flex items-center mb-[2vh]">
              <Building className="w-[clamp(1.5rem,2.5vw,2.5rem)] h-[clamp(1.5rem,2.5vw,2.5rem)] text-blue-500 mr-[1vw]" />
              <div>
                <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-bold text-gray-800">Mediaprobe</h2>
                <p className="text-[clamp(1rem,1.5vw,1.5rem)] text-blue-500 font-medium">Empresa de Tecnologia</p>
              </div>
            </div>

            {/* Company Overview */}
            <div className="mb-[2vh]">
              <h3 className="text-[clamp(1.2rem,2vw,2rem)] font-semibold text-gray-700 mb-[1vh]">Visão Geral da Empresa</h3>
              <p className="text-[clamp(0.9rem,1.3vw,1.3rem)] text-gray-600 leading-relaxed">
                Empresa líder portuguesa de tecnologia especializada na avaliação do impacto emocional de conteúdo audiovisual (EIS - Emotional Impact Score)
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center mb-[2vh]">
              <MapPin className="w-[clamp(1.2rem,2vw,2rem)] h-[clamp(1.2rem,2vw,2rem)] text-blue-500 mr-[1vw]" />
              <span className="text-[clamp(1rem,1.5vw,1.5rem)] text-gray-700 font-medium">Porto, Portugal</span>
            </div>

            {/* Technology Focus */}
            <div className="flex items-center mb-[2vh]">
              <Code className="w-[clamp(1.2rem,2vw,2rem)] h-[clamp(1.2rem,2vw,2rem)] text-blue-500 mr-[1vw]" />
              <span className="text-[clamp(1rem,1.5vw,1.5rem)] text-gray-700 font-medium">Tecnologia de Reconhecimento Audio & Sensores Biométricos</span>
            </div>

            {/* Main Technologies */}
            <div className="flex-1">
              <h3 className="text-[clamp(1.2rem,2vw,2rem)] font-semibold text-gray-700 mb-[1vh]">Tecnologias Principais</h3>
              <div className="grid grid-cols-2 gap-[1vw]">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-blue-50 border border-blue-200 rounded-[1vw] p-[1vw] text-center transition-all duration-500 transform",
                      animationStep >= 3 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="text-[clamp(0.8rem,1.2vw,1.2rem)] text-blue-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Project Details */}
          <div className={cn(
            "bg-white rounded-[1.5vw] shadow-xl border border-gray-200 p-[2vw] flex flex-col overflow-hidden transition-all duration-700 transform",
            animationStep >= 3 ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          )}>
            {/* Project Header */}
            <div className="flex items-center mb-[2vh]">
              <ChartBar className="w-[clamp(1.5rem,2.5vw,2.5rem)] h-[clamp(1.5rem,2.5vw,2.5rem)] text-orange-500 mr-[1vw]" />
              <div>
                <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-bold text-gray-800">Objetivos do Estágio</h2>
                <p className="text-[clamp(1rem,1.5vw,1.5rem)] text-orange-500 font-medium">Projeto de Investigação de 400h</p>
              </div>
            </div>

            {/* Main Objective */}
            <div className="mb-[2vh]">
              <h3 className="text-[clamp(1.2rem,2vw,2rem)] font-semibold text-gray-700 mb-[1vh]">Objetivo Principal</h3>
              <p className="text-[clamp(0.9rem,1.3vw,1.3rem)] text-gray-600 leading-relaxed">
                Análise e benchmark de algoritmos de audio fingerprinting existentes para melhorar o algoritmo interno em desenvolvimento da Mediaprobe e fornecer recomendações acionáveis
              </p>
            </div>

            {/* Timeline */}
            <div className="flex items-center mb-[2vh]">
              <Calendar className="w-[clamp(1.2rem,2vw,2rem)] h-[clamp(1.2rem,2vw,2rem)] text-orange-500 mr-[1vw]" />
              <div>
                <p className="text-[clamp(1rem,1.5vw,1.5rem)] text-gray-700 font-medium">Fevereiro - Abril 2025</p>
                <p className="text-[clamp(0.8rem,1.2vw,1.2rem)] text-gray-600">Avaliação abrangente de soluções comerciais e open-source de audio fingerprinting</p>
              </div>
            </div>

            {/* Main Activities */}
            <div className="flex-1">
              <h3 className="text-[clamp(1.2rem,2vw,2rem)] font-semibold text-gray-700 mb-[1vh]">Atividades Principais</h3>
              <div className="space-y-[1vh]">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start transition-all duration-500 transform",
                      animationStep >= 4 ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-[0.8vw] h-[0.8vw] bg-orange-500 rounded-full mt-[0.8vh] mr-[1vw] flex-shrink-0"></div>
                    <span className="text-[clamp(0.9rem,1.3vw,1.3rem)] text-gray-600 leading-relaxed">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipContextSlide;
