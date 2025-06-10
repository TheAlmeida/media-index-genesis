
import React, { useState, useEffect } from 'react';
import { Info, Mic, Settings, Waveform, Hash, Database, Search, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioFingerprintingSlideProps {
  isActive?: boolean;
  className?: string;
}

const AudioFingerprintingSlide: React.FC<AudioFingerprintingSlideProps> = ({ isActive = true, className }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationStep(0);
      
      const timeouts = [
        setTimeout(() => setAnimationStep(1), 200),
        setTimeout(() => setAnimationStep(2), 400),
        setTimeout(() => setAnimationStep(3), 800),
        setTimeout(() => setAnimationStep(4), 1200),
        setTimeout(() => setAnimationStep(5), 1600),
        setTimeout(() => setAnimationStep(6), 2000),
        setTimeout(() => setAnimationStep(7), 2400),
      ];

      return () => timeouts.forEach(clearTimeout);
    } else {
      setAnimationStep(0);
    }
  }, [isActive]);

  const pipelineSteps = [
    {
      id: 1,
      icon: Mic,
      title: "Audio Input",
      function: "Captura de sinal bruto",
      technical: "Amostragem de áudio digital",
      color: "bg-blue-500",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      icon: Settings,
      title: "Pre-processing",
      function: "Condicionamento do sinal",
      technical: "Redução de ruído, normalização",
      color: "bg-green-500",
      borderColor: "border-green-200",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      icon: Waveform,
      title: "Feature Extraction",
      function: "Análise espectral",
      technical: "STFT, MFCC, deteção de picos",
      color: "bg-purple-500",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50"
    },
    {
      id: 4,
      icon: Hash,
      title: "Fingerprinting",
      function: "Geração de hash",
      technical: "Codificação binária compacta",
      color: "bg-orange-500",
      borderColor: "border-orange-200",
      bgColor: "bg-orange-50"
    },
    {
      id: 5,
      icon: Database,
      title: "Indexing",
      function: "Armazenamento na base de dados",
      technical: "Estruturas de recuperação eficientes",
      color: "bg-red-500",
      borderColor: "border-red-200",
      bgColor: "bg-red-50"
    },
    {
      id: 6,
      icon: Search,
      title: "Matching",
      function: "Comparação de queries",
      technical: "Algoritmos de similaridade",
      color: "bg-gradient-to-r from-blue-500 to-purple-500",
      borderColor: "border-blue-200",
      bgColor: "bg-gradient-to-r from-blue-50 to-purple-50"
    }
  ];

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col",
      className
    )}>
      {/* Navigation Badge */}
      <div className="absolute top-[2vh] right-[2vw] z-10">
        <div className={cn(
          "bg-purple-500 text-white px-[1.5vw] py-[0.5vh] rounded-full text-[clamp(0.7rem,1vw,1rem)] font-medium transition-all duration-700 flex items-center gap-2",
          animationStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )}>
          <Info className="w-[clamp(0.8rem,1.2vw,1.2rem)] h-[clamp(0.8rem,1.2vw,1.2rem)]" />
          Technical Foundation
        </div>
      </div>

      {/* Header */}
      <div className="flex-shrink-0 pt-[3vh] pb-[2vh] px-[2vw]">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-bold text-gray-800 mb-[1vh]">
            Audio Fingerprinting Pipeline
          </h1>
          <p className="text-[clamp(1rem,1.8vw,1.8rem)] text-gray-600 font-light">
            Understanding the core algorithms and state-of-the-art techniques
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-[2vw] pb-[2vh] flex items-center justify-center min-h-0">
        <div className="w-full max-w-[95vw]">
          
          {/* Main Card Container */}
          <div className={cn(
            "bg-white rounded-[1.5vw] shadow-xl border border-gray-200 p-[2vw] transition-all duration-700 transform",
            animationStep >= 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            
            {/* Pipeline Title */}
            <div className="text-center mb-[3vh]">
              <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-bold text-gray-800">
                Audio Processing Pipeline
              </h2>
            </div>

            {/* Pipeline Steps */}
            <div className="flex items-center justify-between gap-[1vw] overflow-x-auto">
              {pipelineSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isVisible = animationStep >= (index + 3);
                
                return (
                  <React.Fragment key={step.id}>
                    {/* Step Card */}
                    <div className={cn(
                      "flex-shrink-0 w-[14vw] min-w-[200px] transition-all duration-700 transform",
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    )}>
                      <div className={cn(
                        "relative rounded-[1vw] border-2 p-[1.5vw] text-center h-[25vh] min-h-[280px] flex flex-col justify-between",
                        step.borderColor,
                        step.bgColor
                      )}>
                        {/* Step Number Badge */}
                        <div className={cn(
                          "absolute top-[0.5vw] right-[0.5vw] w-[2vw] h-[2vw] min-w-[24px] min-h-[24px] rounded-full text-white text-[clamp(0.8rem,1.2vw,1.2rem)] font-bold flex items-center justify-center",
                          step.color
                        )}>
                          {step.id}
                        </div>

                        {/* Icon */}
                        <div className="flex justify-center mb-[1vh]">
                          <div className={cn(
                            "w-[4vw] h-[4vw] min-w-[48px] min-h-[48px] rounded-full text-white flex items-center justify-center",
                            step.color
                          )}>
                            <StepIcon className="w-[2vw] h-[2vw] min-w-[24px] min-h-[24px]" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-center">
                          <h3 className="text-[clamp(1rem,1.5vw,1.5rem)] font-bold text-gray-800 mb-[0.5vh]">
                            {step.title}
                          </h3>
                          <p className="text-[clamp(0.8rem,1.2vw,1.2rem)] font-medium text-gray-700 mb-[1vh]">
                            {step.function}
                          </p>
                          <p className="text-[clamp(0.7rem,1vw,1rem)] text-gray-600 font-light">
                            {step.technical}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow (except after last step) */}
                    {index < pipelineSteps.length - 1 && (
                      <div className={cn(
                        "flex-shrink-0 transition-all duration-700 transform",
                        isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                      )}>
                        <ArrowRight className="w-[2vw] h-[2vw] min-w-[24px] min-h-[24px] text-blue-500" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-[2vh] left-1/2 transform -translate-x-1/2 z-20">
        <div className={cn(
          "bg-white/90 backdrop-blur-sm rounded-full px-[2vw] py-[1vh] shadow-lg transition-all duration-700",
          animationStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <span className="text-[clamp(0.8rem,1.2vw,1.2rem)] font-medium text-gray-700">
            Technical Pipeline Overview
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioFingerprintingSlide;
