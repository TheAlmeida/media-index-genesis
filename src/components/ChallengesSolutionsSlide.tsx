
import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Wrench, Book, Target, File, Brain, Search, Settings, AlertTriangle, TrendingUp, Trophy, Zap, Users } from 'lucide-react';

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
      description: "Resumir descobertas técnicas de forma clara e coerente foi exigente, requerindo precisão, estrutura e competências de comunicação."
    }
  ];

  const futureWork = [
    {
      icon: Brain,
      title: "AI-Based Algorithms",
      priority: "High Priority",
      impact: "Revolutionary",
      timeline: "Médio prazo",
      viability: "Alta",
      borderColor: "border-l-purple-500",
      description: "Avaliação adicional de sistemas de audio fingerprinting baseados em inteligência artificial, como Neural-Audio-Fingerprint, poderia oferecer insights sobre a sua maturidade, robustez e aplicabilidade no mundo real comparados aos métodos espectrais tradicionais."
    },
    {
      icon: Search,
      title: "Content-Specific Testing",
      priority: "High Priority",
      impact: "Significant",
      timeline: "Longo prazo",
      viability: "Média",
      borderColor: "border-l-green-500",
      description: "Expandir o dataset permitiria análise estatística do desempenho dos algoritmos através de diferentes tipos de conteúdo (ex: música, desporto, filme) e tipos de distorção (ex: ruído, reverb, mudanças de pitch). Um aumento de dez vezes no conjunto de referência permitiria conclusões mais granulares e confiáveis."
    },
    {
      icon: Settings,
      title: "Parameter Harmonization",
      priority: "Medium Priority",
      impact: "High",
      timeline: "Curto prazo",
      viability: "Alta",
      borderColor: "border-l-blue-500",
      description: "Retestar todos os algoritmos sob condições técnicas unificadas—como tamanhos idênticos de janela FFT, hop sizes, sampling rates e thresholds de segmentação—garantiria comparações mais justas e revelaria sensibilidade a mudanças de configuração, o que é crítico para integração em pipelines de produção."
    }
  ];

  const keyLearnings = [
    {
      icon: Trophy,
      title: "Technical Excellence",
      description: "Desenvolveu autonomia técnica avançada e competências de resolução de problemas complexos",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Research Methodology",
      description: "Aplicou métodos de investigação rigorosos e análise aprofundada de sistemas complexos",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: Users,
      title: "Professional Communication",
      description: "Aperfeiçoou competências de comunicação técnica e escrita científica estruturada",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 ${isActive ? 'animate-fade-in' : ''}`}>
      {/* Header Section */}
      <div className="mb-8">
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

      {/* Main Content Container - 60% for challenges, 40% for future work */}
      <div className="flex flex-col space-y-8" style={{ height: 'calc(100vh - 200px)' }}>
        
        {/* Challenges Section - 60% height */}
        <div className="flex-shrink-0" style={{ height: '60%' }}>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Project Challenges</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card key={index} className={`border-l-4 ${challenge.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col`}>
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
                  <CardContent className="pt-0 flex-1">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {challenge.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Future Work Section - 40% height */}
        <div className="flex-1 min-h-0">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Future Work Recommendations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {futureWork.map((work, index) => {
              const IconComponent = work.icon;
              return (
                <Card key={index} className={`border-l-4 ${work.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 rounded-lg bg-slate-100">
                        <IconComponent className="w-5 h-5 text-slate-700" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-800">
                        {work.title}
                      </CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {work.priority}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {work.impact}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col">
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                      {work.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <div className="text-center">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide block mb-1">
                          Cronograma
                        </span>
                        <span className="text-xs text-slate-700 font-medium">
                          {work.timeline}
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide block mb-1">
                          Viabilidade
                        </span>
                        <span className="text-xs text-slate-700 font-medium">
                          {work.viability}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Learning Section - Reworked */}
      <div className="mt-8">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <TrendingUp className="w-6 h-6 text-slate-700" />
              <CardTitle className="text-xl font-semibold text-slate-800 text-center">
                Key Learning Outcomes
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {keyLearnings.map((learning, index) => {
                const IconComponent = learning.icon;
                return (
                  <div key={index} className={`p-6 rounded-lg border-2 ${learning.color} text-center hover:shadow-md transition-shadow duration-300`}>
                    <div className={`w-12 h-12 ${learning.iconColor} mx-auto mb-4 flex items-center justify-center rounded-full bg-white shadow-sm`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      {learning.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {learning.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChallengesSolutionsSlide;
