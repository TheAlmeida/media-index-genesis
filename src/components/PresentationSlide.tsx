
import React, { useState, useEffect } from 'react';
import { AudioWaveform, Mic, MicOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SlideProps {
  isActive?: boolean;
  className?: string;
}

const PresentationSlide: React.FC<SlideProps> = ({ isActive = true, className }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (isActive) {
      const timeouts = [
        setTimeout(() => setAnimationStep(1), 200),
        setTimeout(() => setAnimationStep(2), 600),
        setTimeout(() => setAnimationStep(3), 1000),
        setTimeout(() => setAnimationStep(4), 1400),
        setTimeout(() => setAnimationStep(5), 1800),
      ];

      return () => timeouts.forEach(clearTimeout);
    }
  }, [isActive]);

  return (
    <div className={cn(
      "min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden",
      className
    )}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Scattered Decorative Dots */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30 animate-pulse",
            animationStep >= 1 ? "animate-fade-in" : "opacity-0"
          )}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 100}ms`,
          }}
        />
      ))}

      <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Document Type Label */}
          <div className={cn(
            "inline-block transition-all duration-700 transform",
            animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          )}>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium shadow-lg backdrop-blur-sm border border-blue-400/30">
              Relatório de Estágio Curricular
            </span>
          </div>

          {/* Main Title */}
          <div className={cn(
            "transition-all duration-700 transform delay-300",
            animationStep >= 2 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          )}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Media Indexing
            </h1>
          </div>

          {/* Horizontal Divider */}
          <div className={cn(
            "mx-auto h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-700",
            animationStep >= 2 ? "w-64 sm:w-96 opacity-100" : "w-0 opacity-0"
          )}></div>
        </div>

        {/* Academic Context */}
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 3 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-light">
            Licenciatura em Engenharia Eletrotécnica e de Computadores
          </h2>
        </div>

        {/* Three Panel Grid */}
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 transform",
          animationStep >= 4 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          
          {/* Student Panel */}
          <div className="bg-gradient-to-br from-slate-800/80 to-blue-900/60 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 sm:p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                <AudioWaveform className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="space-y-3">
              <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                Estudante
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Filipe Almeida</h3>
              <p className="text-slate-300 text-lg">20399</p>
            </div>
          </div>

          {/* Institution Panel */}
          <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/60 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 sm:p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                <AudioWaveform className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="space-y-3">
              <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                Instituição
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                Escola Superior de Tecnologia
              </h3>
              <p className="text-slate-300 text-sm sm:text-base">
                Instituto Politécnico do Cávado e do Ave
              </p>
            </div>
          </div>

          {/* Host Organization Panel */}
          <div className="bg-gradient-to-br from-slate-800/80 to-cyan-900/60 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 sm:p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-500 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                <Mic className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="space-y-3">
              <span className="inline-block bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                Empresa de Acolhimento
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Mediaprobe</h3>
              <p className="text-slate-300 text-sm sm:text-base">
                Media Measurement Solutions (EIS)
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 5 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg sm:text-xl font-medium shadow-lg">
            2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationSlide;
