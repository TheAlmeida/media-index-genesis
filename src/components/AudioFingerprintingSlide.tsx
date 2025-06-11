import React, { useState, useEffect } from 'react';
import { Info, Mic, Settings, AudioWaveform, Hash, Database, Search, ArrowRight } from 'lucide-react';
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
        setTimeout(() => setAnimationStep(8), 2800),
        setTimeout(() => setAnimationStep(9), 3200),
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
      icon: AudioWaveform,
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
      {/* Header */}
      <div className="flex-shrink-0 pt-[2vh] pb-[1vh] px-[2vw]">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="text-[clamp(2rem,4vw,4rem)] font-bold text-gray-800 mb-[0.5vh]">
            Audio Fingerprinting Pipeline
          </h1>
          <p className="text-[clamp(0.9rem,1.5vw,1.5rem)] text-gray-600 font-light">
            Understanding the core algorithms and state-of-the-art techniques
          </p>
        </div>
      </div>

      {/* Pipeline Section */}
      <div className="flex-shrink-0 px-[1vw] pt-[6vh] pb-[2vh]">
        <div className="w-full max-w-[98vw] mx-auto">
          {/* Pipeline Steps */}
          <div className={cn(
            "flex items-center justify-between w-full gap-[0.3vw] transition-all duration-700 transform",
            animationStep >= 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            {pipelineSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isVisible = animationStep >= (index + 3);
              
              return (
                <React.Fragment key={step.id}>
                  {/* Step Card */}
                  <div className={cn(
                    "flex-1 max-w-[15vw] min-w-0 transition-all duration-700 transform",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}>
                    <div className={cn(
                      "relative rounded-[0.6vw] border-2 p-[0.6vw] text-center h-[20vh] flex flex-col justify-between shadow-lg",
                      step.borderColor,
                      step.bgColor
                    )}>
                      {/* Step Number Badge */}
                      <div className={cn(
                        "absolute top-[0.2vw] right-[0.2vw] w-[1.4vw] h-[1.4vw] min-w-[16px] min-h-[16px] rounded-full text-white text-[clamp(0.7rem,1vw,1rem)] font-bold flex items-center justify-center",
                        step.color
                      )}>
                        {step.id}
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-[0.2vh]">
                        <div className={cn(
                          "w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] rounded-full text-white flex items-center justify-center",
                          step.color
                        )}>
                          <StepIcon className="w-[1.3vw] h-[1.3vw] min-w-[16px] min-h-[16px]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-[clamp(0.9rem,1.4vw,1.4rem)] font-bold text-gray-800 mb-[0.1vh]">
                          {step.title}
                        </h3>
                        <p className="text-[clamp(0.7rem,1.1vw,1.1rem)] font-medium text-gray-700 mb-[0.2vh]">
                          {step.function}
                        </p>
                        <p className="text-[clamp(0.65rem,0.95vw,0.95rem)] text-gray-600 font-light">
                          {step.technical}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow (except after last step) */}
                  {index < pipelineSteps.length - 1 && (
                    <div className={cn(
                      "flex-shrink-0 mx-[0.2vw] transition-all duration-700 transform",
                      isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                    )}>
                      <ArrowRight className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-blue-500" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex-1 px-[2vw] pb-[9vh] flex items-center justify-center min-h-0">
        <div className="w-full max-w-[95vw] flex gap-[2vw] items-stretch justify-center">
          {/* Left Image */}
          <div className={cn(
            "flex-1 transition-all duration-700 transform",
            animationStep >= 8 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex flex-col h-full">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src="https://github.com/worldveil/dejavu/blob/master/plots/spectrogram_peaks.png?raw=true"
                  alt="Spectrogram with peaks highlighted"
                  className="max-w-full h-[30vh] object-contain rounded-[0.5vw] shadow-lg"
                />
              </div>
              <div className="mt-[1vh] text-center">
                <h3 className="text-[clamp(0.9rem,1.3vw,1.3rem)] font-bold text-gray-800">
                  Peak Detection
                </h3>
                <p className="text-[clamp(0.7rem,1vw,1rem)] text-gray-600">
                  Identifying prominent frequencies
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={cn(
            "flex-1 transition-all duration-700 transform",
            animationStep >= 9 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex flex-col h-full">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src="https://github.com/worldveil/dejavu/blob/master/plots/spectrogram_zoomed.png?raw=true"
                  alt="Zoomed spectrogram view"
                  className="max-w-full h-[30vh] object-contain rounded-[0.5vw] shadow-lg"
                />
              </div>
              <div className="mt-[1vh] text-center">
                <h3 className="text-[clamp(0.9rem,1.3vw,1.3rem)] font-bold text-gray-800">
                  Detailed Analysis
                </h3>
                <p className="text-[clamp(0.7rem,1vw,1rem)] text-gray-600">
                  Zoomed frequency patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioFingerprintingSlide;
