
import React, { useState, useEffect } from 'react';
import { Database, FileText, Headphones, Mic, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface ResearchDataSlideProps {
  isActive?: boolean;
  className?: string;
}

const ResearchDataSlide: React.FC<ResearchDataSlideProps> = ({ isActive = true, className }) => {
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
      ];

      return () => timeouts.forEach(clearTimeout);
    } else {
      setAnimationStep(0);
    }
  }, [isActive]);

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 relative overflow-hidden flex flex-col",
      className
    )}>
      {/* Header */}
      <div className="flex-shrink-0 pt-[3vh] pb-[2vh] px-[2vw]">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-bold text-gray-800 mb-[0.5vh]">
            Datasets
          </h1>
          <p className="text-[clamp(0.9rem,1.5vw,1.5rem)] text-gray-600 font-light">
            Comprehensive audio datasets used for algorithm evaluation and testing
          </p>
        </div>
      </div>

      {/* Dataset Cards */}
      <div className="flex-1 px-[2vw] pb-[2vh] min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2vw] h-[70vh]">
          {/* Dataset 1 - Open Source */}
          <div className={cn(
            "bg-white rounded-[1vw] shadow-lg border-l-4 border-blue-500 p-[1.5vw] transition-all duration-700 transform hover:scale-105",
            animationStep >= 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex items-center gap-[1vw] mb-[1vh]">
              <div className="w-[3vw] h-[3vw] min-w-[36px] min-h-[36px] bg-blue-500 rounded-full flex items-center justify-center">
                <FileText className="w-[1.5vw] h-[1.5vw] min-w-[18px] min-h-[18px] text-white" />
              </div>
              <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-bold text-gray-800">
                Open Source Dataset (pexafb_easy_small)
              </h3>
            </div>
            <div className="space-y-[0.5vh] text-[clamp(0.7rem,0.9vw,0.9rem)] text-gray-600">
              <p>• Originário do repositório Audio Fingerprinting Benchmark Toolkit</p>
              <p>• Inclui 99 faixas de referência do Free Music Archive (FMA)</p>
              <p>• 21 ficheiros de query contendo cerca de 100 segmentos de áudio modificados (ex: eco, mudanças de pitch, ruído)</p>
              <p>• Usado durante a fase de validação inicial dos algoritmos implementados</p>
            </div>
          </div>

          {/* Dataset 2 - Experimental */}
          <div className={cn(
            "bg-white rounded-[1vw] shadow-lg border-l-4 border-green-500 p-[1.5vw] transition-all duration-700 transform hover:scale-105",
            animationStep >= 3 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex items-center gap-[1vw] mb-[1vh]">
              <div className="w-[3vw] h-[3vw] min-w-[36px] min-h-[36px] bg-green-500 rounded-full flex items-center justify-center">
                <Headphones className="w-[1.5vw] h-[1.5vw] min-w-[18px] min-h-[18px] text-white" />
              </div>
              <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-bold text-gray-800">
                Experimental Dataset
              </h3>
            </div>
            <div className="space-y-[0.5vh] text-[clamp(0.7rem,0.9vw,0.9rem)] text-gray-600">
              <p>• Projetado durante o estágio para refletir a estrutura e requisitos da base de dados interna da Mediaprobe</p>
              <p>• Contém 163 ficheiros de referência, aproximadamente 81% dos quais são música</p>
              <p>• Inclui também filmes, desporto, talk-shows e conteúdo de esports</p>
              <p>• Queries de 5 a 10 segundos foram gerados com distorções acústicas simuladas</p>
              <p>• Serviu como o dataset principal para avaliação de desempenho e robustez</p>
            </div>
          </div>

          {/* Dataset 3 - Expanded Version */}
          <div className={cn(
            "bg-white rounded-[1vw] shadow-lg border-l-4 border-purple-500 p-[1.5vw] transition-all duration-700 transform hover:scale-105",
            animationStep >= 4 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex items-center gap-[1vw] mb-[1vh]">
              <div className="w-[3vw] h-[3vw] min-w-[36px] min-h-[36px] bg-purple-500 rounded-full flex items-center justify-center">
                <Database className="w-[1.5vw] h-[1.5vw] min-w-[18px] min-h-[18px] text-white" />
              </div>
              <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-bold text-gray-800">
                Expanded Version with Advertising Content
              </h3>
            </div>
            <div className="space-y-[0.5vh] text-[clamp(0.7rem,0.9vw,0.9rem)] text-gray-600">
              <p>• Integrou 18 anúncios (de edições recentes do Super Bowl) no dataset experimental</p>
              <p>• Os anúncios foram distribuídos entre os outros tipos de conteúdo para simular ambientes de transmissão realistas</p>
              <p>• A versão final consiste em 182 ficheiros de referência totalizando mais de 90 minutos de áudio</p>
              <p>• Usado para cenários de query complexos e testes de captura acústica indireta</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Information Panels */}
      <div className="flex-shrink-0 px-[2vw] pb-[3vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2vw]">
          {/* Realistic Testing Panel */}
          <div className={cn(
            "bg-white rounded-[1vw] shadow-lg border-l-4 border-orange-500 p-[1.5vw] transition-all duration-700 transform",
            animationStep >= 5 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex items-center gap-[1vw] mb-[1vh]">
              <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] bg-orange-500 rounded-full flex items-center justify-center">
                <Mic className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-white" />
              </div>
              <h3 className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-bold text-gray-800">
                Realistic Testing
              </h3>
            </div>
            <p className="text-[clamp(0.7rem,0.9vw,0.9rem)] text-gray-600">
              Descrição de teste realista conduzido usando captura acústica indireta (regravação via telemóvel). Os resultados foram considerados artificialmente inflacionados devido a todos os clips de referência estarem incluídos na query, com segmentos relevantes reintegrados no dataset experimental sob condições controladas.
            </p>
          </div>

          {/* Standardization Panel */}
          <div className={cn(
            "bg-white rounded-[1vw] shadow-lg border-l-4 border-blue-500 p-[1.5vw] transition-all duration-700 transform",
            animationStep >= 6 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex items-center gap-[1vw] mb-[1vh]">
              <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] bg-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-white" />
              </div>
              <h3 className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-bold text-gray-800">
                Standardization
              </h3>
            </div>
            <p className="text-[clamp(0.7rem,0.9vw,0.9rem)] text-gray-600">
              Todos os ficheiros de áudio foram padronizados para formato .wav, mono, 8 kHz para garantir consistência durante os testes. Esta padronização foi crucial para comparação justa entre diferentes algoritmos e métricas de avaliação confiáveis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDataSlide;
