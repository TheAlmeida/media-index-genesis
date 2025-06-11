
import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Wrench, Book, Target, File, User, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChallengesSolutionsSlideProps {
  isActive?: boolean;
  className?: string;
}

const ChallengesSolutionsSlide: React.FC<ChallengesSolutionsSlideProps> = ({ isActive = true, className }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationStep(0);
      
      const timeouts = [
        setTimeout(() => setAnimationStep(1), 200),
        setTimeout(() => setAnimationStep(2), 400),
        setTimeout(() => setAnimationStep(3), 600),
      ];

      return () => timeouts.forEach(clearTimeout);
    } else {
      setAnimationStep(0);
    }
  }, [isActive]);

  const challenges = [
    {
      icon: Wrench,
      title: "Algorithm Installation",
      borderColor: "border-l-red-500",
      description: "Vários algoritmos de audio fingerprinting foram difíceis de instalar devido à documentação em falta e problemas de dependências. Isto exigiu resolução de problemas, adaptação de código e forte autonomia técnica."
    },
    {
      icon: Book,
      title: "In-depth Understanding",
      borderColor: "border-l-orange-500",
      description: "Além de executar os algoritmos, foi necessário compreender profundamente como processavam áudio e realizavam matching. Isto envolveu estudar literatura científica e código fonte."
    },
    {
      icon: Target,
      title: "Formulating Recommendations",
      borderColor: "border-l-yellow-500",
      description: "Propor melhorias ao sistema interno da Mediaprobe foi limitado pela falta de acesso ao seu código fonte, tornando difícil avaliar a viabilidade das sugestões."
    },
    {
      icon: File,
      title: "Report Writing",
      borderColor: "border-l-blue-500",
      description: "Resumir descobertas técnicas de forma clara e coerente foi exigente, requerendo precisão, estrutura e competências de comunicação."
    }
  ];

  const learningOutcomes = [
    {
      category: "Technical",
      color: "bg-blue-100 text-blue-800",
      areas: ["Autonomia", "Competências de resolução de problemas"]
    },
    {
      category: "Research",
      color: "bg-green-100 text-green-800",
      areas: ["Metodologia", "Análise aprofundada"]
    },
    {
      category: "Communication",
      color: "bg-purple-100 text-purple-800",
      areas: ["Competências", "Escrita técnica"]
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
          <h1 className="text-[clamp(3rem,5vw,5rem)] font-bold text-slate-800 mb-4 leading-tight">
            Challenges & Solutions
          </h1>
          <p className="text-[clamp(1.2rem,2vw,2rem)] text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Summary of difficulties encountered during the internship and solutions implemented
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-[4vw] pb-[4vh]">
        <div className="max-w-7xl mx-auto">
          {/* Challenges Grid */}
          <div className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-[3vw] mb-12 transition-all duration-700 transform",
            animationStep >= 2 ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card key={index} className={`border-l-4 ${challenge.borderColor} shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white rounded-2xl`}>
                  <CardHeader className="p-8 pb-6">
                    <div className="flex items-start gap-5">
                      <div className="p-3 rounded-xl bg-slate-100 flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-slate-700" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-slate-800 mb-2">
                          {challenge.title}
                        </CardTitle>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-base font-bold text-slate-600">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-base text-slate-600 leading-relaxed">
                      {challenge.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Learning Outcomes Section */}
          <Card className={cn(
            "shadow-xl bg-white rounded-2xl transition-all duration-700 transform",
            animationStep >= 3 ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <CardHeader className="p-8 pb-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-slate-100">
                  <User className="w-8 h-8 text-slate-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  Key Learning Outcomes
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="text-center">
                    <div className={`inline-flex px-4 py-2 rounded-full text-base font-semibold mb-4 ${outcome.color}`}>
                      {outcome.category}
                    </div>
                    <div className="space-y-3">
                      {outcome.areas.map((area, areaIndex) => (
                        <div key={areaIndex} className="text-base text-slate-600 font-medium">
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChallengesSolutionsSlide;
