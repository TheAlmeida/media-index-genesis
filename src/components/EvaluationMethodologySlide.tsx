import React, { useState, useEffect } from 'react';
import { Target, Clock, Database, CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SlideTitle } from './ui/SlideTitle';

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
      ];

      return () => timeouts.forEach(clearTimeout);
    } else {
      setAnimationStep(0);
    }
  }, [isActive]);

  const methodologySteps = [
    {
      icon: Target,
      title: "Qualidade de Matching",
      subtitle: "Análise de Precisão & Recall",
      color: "bg-blue-600",
      description: "Avaliação abrangente usando o Audio Fingerprinting Benchmark Toolkit desenvolvido pela Pexeso (2023)",
      metrics: [
        "Avaliação ao nível da faixa",
        "Avaliação ao nível do segmento", 
        "Avaliação de Bounding Box",
        "Validação de ground truth usando metadados da fonte"
      ]
    },
    {
      icon: Clock,
      title: "Tempo de Execução",
      subtitle: "Análise de Desempenho",
      color: "bg-emerald-600",
      description: "Sistema de profiling personalizado para medir o desempenho dos algoritmos através de diferentes fases operacionais",
      metrics: [
        "Medição do tempo de indexação de referências",
        "Análise da latência de processamento de queries",
        "Desempenho de matching e recuperação",
        "Avaliação de escalabilidade em hardware padronizado"
      ]
    },
    {
      icon: Database,
      title: "Eficiência de Memória",
      subtitle: "Requisitos de Armazenamento",
      color: "bg-purple-600",
      description: "Análise abrangente dos requisitos de armazenamento e estratégias de otimização de memória",
      metrics: [
        "Análise do tamanho da base de dados indexada",
        "Estimativa do tamanho de fingerprint por segundo de áudio",
        "Eficiência de compressão de fingerprint"
      ]
    }
  ];

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden",
      className
    )}>
      {/* Header Section */}
      <div className="pt-[4vh] pb-[3vh] px-[4vw]">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <SlideTitle title="Metodologia de Avaliação" subtitle="Abordagem tridimensional para benchmarking abrangente de algoritmos e análise de desempenho" />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 px-[4vw] pb-[4vh]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3vw] h-full max-w-7xl mx-auto">
          {methodologySteps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div 
                key={index}
                className={cn(
                  "bg-white rounded-2xl shadow-xl border border-slate-200 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl flex flex-col",
                  animationStep >= index + 2 ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
              >
                {/* Card Header */}
                <div className="p-8 border-b border-slate-100">
                  <div className="flex items-start gap-5">
                    <div className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0",
                      step.color
                    )}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-base text-slate-500 font-medium">
                        {step.subtitle}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-slate-600">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-slate-600 leading-relaxed mb-8 text-base">
                    {step.description}
                  </p>

                  {/* Methodology Points */}
                  <div className="space-y-4 flex-1">
                    <h4 className="text-base font-semibold text-slate-700 mb-4 flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                      Principais Métricas de Avaliação
                    </h4>
                    {step.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <p className="text-base text-slate-600 leading-relaxed">
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400 font-medium">
                        Métrica {index + 1} de 3
                      </span>
                      <div className={cn(
                        "w-3 h-3 rounded-full",
                        step.color.replace('bg-', 'bg-').replace('-600', '-300')
                      )} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EvaluationMethodologySlide;
