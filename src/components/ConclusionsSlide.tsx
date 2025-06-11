
import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Award, TrendingUp, Lightbulb, Clipboard, Check } from 'lucide-react';

interface ConclusionsSlideProps {
  isActive: boolean;
}

const ConclusionsSlide: React.FC<ConclusionsSlideProps> = ({ isActive }) => {
  const keyFindings = [
    "SoundFingerprinting destacou-se com queries curtas e degradadas",
    "Olaf sobressaiu pela velocidade e eficiência computacional",
    "Audfprint teve o melhor desempenho sob condições ruidosas e regravação acústica",
    "Dejavu mostrou limitações na escalabilidade e robustez",
    "O sistema da Mediaprobe teve desempenho competitivo no uso de memória e segmentação temporal mas teve dificuldades com recall em cenários adversos",
    "Testes realistas usando anúncios gravados por telefone confirmaram quedas de desempenho sob condições desafiantes"
  ];

  const recommendations = [
    {
      number: "1",
      title: "Implementar um mecanismo de votação temporal (como no Audfprint e Olaf) para melhorar o recall sob condições ruidosas",
    },
    {
      number: "2",
      title: "Rever a estratégia de codificação de fingerprint, adotando estruturas landmark robustas para melhorar a resistência à variação de áudio",
    },
    {
      number: "3",
      title: "Explorar estruturas de indexação de acesso direto (ex: LMDB, como usado no Olaf) para reduzir a latência de matching em ambientes sensíveis ao tempo",
    }
  ];

  const achievements = [
    { number: "6", label: "Algoritmos Analisados", color: "text-blue-600" },
    { number: "3", label: "Recomendações Principais", color: "text-green-600" },
    { number: "182", label: "Ficheiros de Teste", color: "text-purple-600" }
  ];

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 ${isActive ? 'animate-fade-in' : ''}`}>
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-center text-slate-800 mb-3">
              Conclusions
            </h1>
            <p className="text-lg text-center text-slate-600 max-w-4xl mx-auto">
              Key findings and strategic recommendations based on external comparison
            </p>
          </div>
          <Badge className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-medium">
            <Award className="w-4 h-4 mr-2" />
            Research Outcomes
          </Badge>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left Column - Key Findings */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl font-semibold text-slate-800">
                Key Findings
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {keyFindings.map((finding, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {finding}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Main Recommendations */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-3 mb-4">
              <Lightbulb className="w-6 h-6 text-purple-600" />
              <CardTitle className="text-xl font-semibold text-slate-800">
                Main Recommendations
              </CardTitle>
            </div>
            <p className="text-sm text-slate-500 italic">
              Based on external comparison, without access to Mediaprobe's source code
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recommendations.map((rec, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {rec.number}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed flex-1">
                      {rec.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section - Project Achievement Summary */}
      <Card className="shadow-lg max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Clipboard className="w-6 h-6 text-slate-700" />
            <CardTitle className="text-xl font-semibold text-slate-800 text-center">
              Project Achievement Summary
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${achievement.color} mb-2`}>
                  {achievement.number}
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConclusionsSlide;
