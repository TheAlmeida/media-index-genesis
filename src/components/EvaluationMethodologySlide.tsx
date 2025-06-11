import React, { useState, useEffect } from 'react';
import { Target, Clock, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EvaluationMethodologySlideProps {
  isActive?: boolean;
  className?: string;
}

const EvaluationMethodologySlide: React.FC<EvaluationMethodologySlideProps> = ({ isActive = true, className }) => {
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
      {/* Navigation Badge */}
      <div className="absolute top-[2vh] right-[2vw] z-10">
        <div className={cn(
          "bg-purple-500 text-white px-[1.5vw] py-[0.5vh] rounded-full text-[clamp(0.7rem,1vw,1rem)] font-medium transition-all duration-700 flex items-center gap-2",
          animationStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )}>
          <Database className="w-[clamp(0.8rem,1.2vw,1.2rem)] h-[clamp(0.8rem,1.2vw,1.2rem)]" />
          Scientific Method
        </div>
      </div>

      {/* Header */}
      <div className="flex-shrink-0 pt-[3vh] pb-[1vh] px-[2vw]">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-bold text-gray-800 mb-[0.5vh]">
            Evaluation Methodology
          </h1>
          <p className="text-[clamp(0.9rem,1.5vw,1.5rem)] text-gray-600 font-light">
            Three-metric approach to algorithm benchmarking and analysis
          </p>
        </div>
      </div>

      {/* Top Row - Three Metric Categories */}
      <div className="flex-shrink-0 px-[2vw] pb-[2vh]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2vw]">
          {/* Matching Quality */}
          <div className={cn(
            "bg-blue-500 text-white rounded-[1vw] p-[1.5vw] text-center transition-all duration-700 transform hover:scale-105",
            animationStep >= 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex justify-center mb-[1vh]">
              <Target className="w-[3vw] h-[3vw] min-w-[36px] min-h-[36px]" />
            </div>
            <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-bold mb-[0.5vh]">
              Matching Quality
            </h3>
            <p className="text-[clamp(0.7rem,0.9vw,0.9rem)] opacity-90">
              Avaliação de Precision & Recall
            </p>
          </div>

          {/* Execution Time */}
          <div className={cn(
            "bg-green-500 text-white rounded-[1vw] p-[1.5vw] text-center transition-all duration-700 transform hover:scale-105",
            animationStep >= 3 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex justify-center mb-[1vh]">
              <Clock className="w-[3vw] h-[3vw] min-w-[36px] min-h-[36px]" />
            </div>
            <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-bold mb-[0.5vh]">
              Execution Time
            </h3>
            <p className="text-[clamp(0.7rem,0.9vw,0.9rem)] opacity-90">
              Análise de velocidade de processamento
            </p>
          </div>

          {/* Memory Efficiency */}
          <div className={cn(
            "bg-purple-500 text-white rounded-[1vw] p-[1.5vw] text-center transition-all duration-700 transform hover:scale-105",
            animationStep >= 4 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex justify-center mb-[1vh]">
              <Database className="w-[3vw] h-[3vw] min-w-[36px] min-h-[36px]" />
            </div>
            <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-bold mb-[0.5vh]">
              Memory Efficiency
            </h3>
            <p className="text-[clamp(0.7rem,0.9vw,0.9rem)] opacity-90">
              Requisitos de armazenamento
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row - Three Detailed Analysis Cards */}
      <div className="flex-1 px-[2vw] pb-[9vh] min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2vw] h-full">
          {/* Matching Evaluation Card */}
          <div className={cn(
            "bg-white rounded-[1vw] shadow-lg border-l-4 border-blue-500 p-[1.5vw] transition-all duration-700 transform hover:scale-105",
            animationStep >= 5 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex items-center gap-[1vw] mb-[1vh]">
              <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] bg-blue-500 rounded-full flex items-center justify-center">
                <Target className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-white" />
              </div>
              <h3 className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-bold text-gray-800">
                Matching Evaluation
              </h3>
            </div>
            
            <h4 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-gray-700 mb-[0.5vh]">
              Audio Fingerprinting Benchmark Toolkit
            </h4>
            
            <div className="space-y-[0.5vh] text-[clamp(0.7rem,0.9vw,0.9rem)] text-gray-600 mb-[1vh]">
              <p>• Desenvolvido pela Pexeso (2023)</p>
              <p>• Ficheiros de referência (ficheiros originais completos)</p>
              <p>• Ficheiros de query (excertos de 5-10 segundos, potencialmente modificados)</p>
              <p>• Métricas: Precision, Recall, F1-score</p>
              <p>• Ground truth baseado em metadados de origem</p>
            </div>
          </div>

          {/* Execution Time Card */}
          <div className={cn(
            "bg-white rounded-[1vw] shadow-lg border-l-4 border-green-500 p-[1.5vw] transition-all duration-700 transform hover:scale-105",
            animationStep >= 6 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex items-center gap-[1vw] mb-[1vh]">
              <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] bg-green-500 rounded-full flex items-center justify-center">
                <Clock className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-white" />
              </div>
              <h3 className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-bold text-gray-800">
                Execution Time Analysis
              </h3>
            </div>
            
            <h4 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-gray-700 mb-[0.5vh]">
              Profiling Personalizado
            </h4>
            
            <div className="space-y-[0.5vh] text-[clamp(0.7rem,0.9vw,0.9rem)] text-gray-600 mb-[1vh]">
              <p>• Medição de tempo de indexação de referências</p>
              <p>• Tempo de processamento de queries</p>
              <p>• Latência de matching e retrieval</p>
              <p>• Análise de escalabilidade</p>
              <p>• Profiling em hardware padronizado</p>
            </div>
          </div>

          {/* Memory Efficiency Card */}
          <div className={cn(
            "bg-white rounded-[1vw] shadow-lg border-l-4 border-purple-500 p-[1.5vw] transition-all duration-700 transform hover:scale-105",
            animationStep >= 7 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="flex items-center gap-[1vw] mb-[1vh]">
              <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] bg-purple-500 rounded-full flex items-center justify-center">
                <Database className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-white" />
              </div>
              <h3 className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-bold text-gray-800">
                Memory Efficiency
              </h3>
            </div>
            
            <h4 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-gray-700 mb-[0.5vh]">
              Análise de Armazenamento
            </h4>
            
            <div className="space-y-[0.5vh] text-[clamp(0.7rem,0.9vw,0.9rem)] text-gray-600 mb-[1vh]">
              <p>• Tamanho da base de dados indexada</p>
              <p>• Requisitos de memória RAM</p>
              <p>• Compressão de fingerprints</p>
              <p>• Eficiência de estruturas de indexação</p>
              <p>• Análise de crescimento com volume de dados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationMethodologySlide;
