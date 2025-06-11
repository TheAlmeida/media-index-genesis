import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Wrench, Book, Target, File, User, AlertTriangle } from 'lucide-react';
import { SlideTitle } from './ui/SlideTitle';
import { cn } from '@/lib/utils';

interface ChallengesSolutionsSlideProps {
  isActive: boolean;
}

const ChallengesSolutionsSlide: React.FC<ChallengesSolutionsSlideProps> = ({ isActive }) => {
  const challenges = [
    {
      icon: Wrench,
      title: "Implementação Dos Algoritmos Open Source",
      borderColor: "border-l-red-500",
      description: "Vários algoritmos de audio fingerprinting foram difíceis de instalar devido à documentação em falta e problemas de dependências. Isto exigiu resolução de problemas, adaptação de código e forte autonomia técnica."
    },
    {
      icon: Book,
      title: "Estudo Aprofundado De Cada Algoritmo",
      borderColor: "border-l-orange-500",
      description: "Além de executar os algoritmos, foi necessário compreender profundamente como processavam áudio e realizavam matching. Isto envolveu estudar literatura científica e código fonte."
    },
    {
      icon: Target,
      title: "Formulação De Recomendações",
      borderColor: "border-l-yellow-500",
      description: "Propor melhorias ao sistema interno da Mediaprobe foi limitado pela falta de acesso ao seu código fonte, tornando difícil avaliar a viabilidade das sugestões."
    },
    {
      icon: File,
      title: "Sintetização Para O Relatório",
      borderColor: "border-l-blue-500",
      description: "Resumir descobertas técnicas de forma clara e coerente foi exigente, requerendo precisão, estrutura e competências de comunicação."
    }
  ];

  const learningOutcomes = [
    {
      category: "Técnicas",
      color: "bg-blue-100 text-blue-800",
      areas: ["Autonomia", "Competências de resolução de problemas"]
    },
    {
      category: "Investigação",
      color: "bg-green-100 text-green-800",
      areas: ["Metodologia", "Análise aprofundada"]
    },
    {
      category: "Comunicação",
      color: "bg-purple-100 text-purple-800",
      areas: ["Competências", "Escrita técnica"]
    }
  ];

  return (
    <div className={`h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 pb-[9vh] flex flex-col ${isActive ? 'animate-fade-in' : ''}`}>
      {/* Header */}
      <div className="flex-shrink-0 pt-[1vh] pb-[2vh] px-8">
        <div className="text-center transition-all duration-700 transform">
          <SlideTitle title="Desafios" subtitle="Resumo dos maiores desafios encontraos ao logo do estágio" />
        </div>
      </div>

      {/* Main Content - centered vertically in remaining space */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {/* Challenges Grid - reduced width and centered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-5xl w-full">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <Card key={index} className={`border-l-4 ${challenge.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-3 rounded-lg bg-slate-100">
                      <IconComponent className="w-7 h-7 text-slate-700" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-800">
                      {challenge.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-base text-slate-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Learning Outcomes Section - reduced width and centered */}
        <Card className="shadow-lg max-w-4xl w-full">
          <CardHeader>
            <div className="flex items-center space-x-4 mb-4">
              <User className="w-8 h-8 text-slate-700" />
              <CardTitle className="text-2xl font-semibold text-slate-800">
                Maiores Aprendizagens
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex px-4 py-2 rounded-full text-base font-medium mb-4 ${outcome.color}`}>
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
  );
};

export default ChallengesSolutionsSlide;
