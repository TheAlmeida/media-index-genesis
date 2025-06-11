import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Rocket, Clock, Database, Zap } from 'lucide-react';
import { SlideTitle } from './ui/SlideTitle';

interface FutureWorkSlideProps {
  isActive: boolean;
}

const FutureWorkSlide: React.FC<FutureWorkSlideProps> = ({ isActive }) => {
  const futureWorkItems = [
    {
      icon: Clock,
      title: "Algoritmos Baseados em IA",
      borderColor: "border-l-blue-500",
      iconBg: "bg-blue-100",
      description: "Avaliação adicional de sistemas de audio fingerprinting baseados em inteligência artificial, como Neural-Audio-Fingerprint, poderia oferecer insights sobre a sua maturidade, robustez e aplicabilidade no mundo real comparados aos métodos espectrais tradicionais."
    },
    {
      icon: Database,
      title: "Testes Específicos de Conteúdo",
      borderColor: "border-l-green-500",
      iconBg: "bg-green-100",
      description: "Expandir o dataset permitiria análise estatística do desempenho dos algoritmos através de diferentes tipos de conteúdo (ex: música, desporto, filme) e tipos de distorção (ex: ruído, reverb, mudanças de pitch). Um aumento de dez vezes no conjunto de referência permitiria conclusões mais granulares e confiáveis."
    },
    {
      icon: Zap,
      title: "Harmonização de Parâmetros",
      borderColor: "border-l-orange-500",
      iconBg: "bg-orange-100",
      description: "Retestar todos os algoritmos sob condições técnicas unificadas—como tamanhos idênticos de janela FFT, hop sizes, sampling rates e thresholds de segmentação—garantiria comparações mais justas e revelaria sensibilidade a mudanças de configuração, o que é crítico para integração em pipelines de produção."
    }
  ];

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 pb-[9vh] flex flex-col ${isActive ? 'animate-fade-in' : ''}`}>
      {/* Header Section - stays at top */}
      <div className="mb-8 flex-shrink-0">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <SlideTitle title="Trabalho Futuro" subtitle="Direções estratégicas para investigação contínua e avanço tecnológico" />
          </div>
        </div>
      </div>

      {/* Main Content - centered vertically in remaining space */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {/* Future Work Cards - centered with max width */}
        <div className="max-w-5xl mx-auto space-y-8 w-full">
          {futureWorkItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className={`border-l-4 ${item.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${item.iconBg}`}>
                        <IconComponent className="w-7 h-7 text-slate-700" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-800">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FutureWorkSlide;
