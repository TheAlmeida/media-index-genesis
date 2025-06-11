
import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Rocket, Clock, Database, Zap } from 'lucide-react';

interface FutureWorkSlideProps {
  isActive: boolean;
}

const FutureWorkSlide: React.FC<FutureWorkSlideProps> = ({ isActive }) => {
  const futureWorkItems = [
    {
      icon: Clock,
      title: "AI-Based Algorithms",
      borderColor: "border-l-blue-500",
      iconBg: "bg-blue-100",
      description: "Avaliação adicional de sistemas de audio fingerprinting baseados em inteligência artificial, como Neural-Audio-Fingerprint, poderia oferecer insights sobre a sua maturidade, robustez e aplicabilidade no mundo real comparados aos métodos espectrais tradicionais."
    },
    {
      icon: Database,
      title: "Content-Specific Testing",
      borderColor: "border-l-green-500",
      iconBg: "bg-green-100",
      description: "Expandir o dataset permitiria análise estatística do desempenho dos algoritmos através de diferentes tipos de conteúdo (ex: música, desporto, filme) e tipos de distorção (ex: ruído, reverb, mudanças de pitch). Um aumento de dez vezes no conjunto de referência permitiria conclusões mais granulares e confiáveis."
    },
    {
      icon: Zap,
      title: "Parameter Harmonization",
      borderColor: "border-l-orange-500",
      iconBg: "bg-orange-100",
      description: "Retestar todos os algoritmos sob condições técnicas unificadas—como tamanhos idênticos de janela FFT, hop sizes, sampling rates e thresholds de segmentação—garantiria comparações mais justas e revelaria sensibilidade a mudanças de configuração, o que é crítico para integração em pipelines de produção."
    }
  ];

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 ${isActive ? 'animate-fade-in' : ''}`}>
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-center text-slate-800 mb-3">
              Future Work
            </h1>
            <p className="text-lg text-center text-slate-600 max-w-4xl mx-auto">
              Strategic directions for continued research and technological advancement
            </p>
          </div>
          <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-medium">
            <Rocket className="w-4 h-4 mr-2" />
            Innovation Roadmap
          </Badge>
        </div>
      </div>

      {/* Future Work Cards */}
      <div className="max-w-5xl mx-auto space-y-6">
        {futureWorkItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Card key={index} className={`border-l-4 ${item.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <CardHeader className="pb-4">
                <div className="flex items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${item.iconBg}`}>
                      <IconComponent className="w-6 h-6 text-slate-700" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-800">
                      {item.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FutureWorkSlide;
