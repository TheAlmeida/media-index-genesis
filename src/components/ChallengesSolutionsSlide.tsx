
import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Wrench, Book, Target, File, User, AlertTriangle } from 'lucide-react';

interface ChallengesSolutionsSlideProps {
  isActive: boolean;
}

const ChallengesSolutionsSlide: React.FC<ChallengesSolutionsSlideProps> = ({ isActive }) => {
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
    <div className={`h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 pb-[9vh] flex flex-col justify-center ${isActive ? 'animate-fade-in' : ''}`}>
      {/* Header Section */}
      <div className="mb-8 flex-shrink-0">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-center text-slate-800 mb-3">
              Challenges & Solutions
            </h1>
            <p className="text-lg text-center text-slate-600 max-w-4xl mx-auto">
              Summary of difficulties encountered during the internship and solutions implemented
            </p>
          </div>
          <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Problem Solving
          </Badge>
        </div>
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 flex-shrink-0">
        {challenges.map((challenge, index) => {
          const IconComponent = challenge.icon;
          return (
            <Card key={index} className={`border-l-4 ${challenge.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-100">
                    <IconComponent className="w-5 h-5 text-slate-700" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-800">
                    {challenge.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Learning Outcomes Section */}
      <Card className="shadow-lg flex-shrink-0">
        <CardHeader>
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-6 h-6 text-slate-700" />
            <CardTitle className="text-xl font-semibold text-slate-800">
              Key Learning Outcomes
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-3 ${outcome.color}`}>
                  {outcome.category}
                </div>
                <div className="space-y-2">
                  {outcome.areas.map((area, areaIndex) => (
                    <div key={areaIndex} className="text-sm text-slate-600 font-medium">
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
  );
};

export default ChallengesSolutionsSlide;
