
import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Target, TrendingUp, Clock, Database } from 'lucide-react';

interface SlideProps {
  isActive: boolean;
}

const EvaluationResultsSlide: React.FC<SlideProps> = ({ isActive }) => {
  const algorithmColors = {
    'ACRCloud': 'bg-green-500',
    'Mediaprobe': 'bg-blue-500', 
    'Soundfingerprinting': 'bg-purple-500',
    'Olaf': 'bg-red-500',
    'Audfprint': 'bg-purple-400',
    'Dejavu': 'bg-orange-500'
  };

  const PerformanceBar = ({ name, value, maxValue, unit = '%', color }: {
    name: string;
    value: number;
    maxValue: number;
    unit?: string;
    color: string;
  }) => (
    <div className="flex items-center justify-between mb-4 last:mb-0 pb-2">
      <span className="text-lg font-medium text-gray-700 w-48">{name}:</span>
      <div className="flex-1 mx-4">
        <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full ${color} transition-all duration-1000 ease-out`}
            style={{ 
              width: isActive ? `${(value / maxValue) * 100}%` : '0%' 
            }}
          />
        </div>
      </div>
      <span className="text-lg font-medium text-gray-800 w-16 text-right">
        {value}{unit}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8 pb-[9vh] flex flex-col">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Resultados Experimentais
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Métricas de desempenho abrangentes e análise estatística
          </p>
        </div>
      </div>

      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-2 gap-4" style={{ height: '80%' }}>
        <div style={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly'
        }}>
          {/* Heavily Modified Queries */}
          <Card className="border-l-4 border-l-blue-500 shadow-lg" style={{ marginBottom: '17px' }}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-lg">Queries Fortemente Modificadas</CardTitle>
              </div>
              <Badge variant="outline" className="w-fit bg-blue-50 text-blue-700 border-blue-200">
                Teste de Robustez
              </Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <PerformanceBar name="ACRCloud" value={74} maxValue={100} color={algorithmColors.ACRCloud} />
                <PerformanceBar name="MP ACR" value={48} maxValue={100} color={algorithmColors.Mediaprobe} />
                <PerformanceBar name="Soundfingerprinting" value={77} maxValue={100} color={algorithmColors.Soundfingerprinting} />
                <PerformanceBar name="Olaf" value={46} maxValue={100} color={algorithmColors.Olaf} />
                <PerformanceBar name="Audfprint" value={27} maxValue={100} color={algorithmColors.Audfprint} />
                <PerformanceBar name="Dejavu" value={62} maxValue={100} color={algorithmColors.Dejavu} />
              </div>
            </CardContent>
          </Card>

          {/* Processing Speed */}
          <Card className="border-l-4 border-l-orange-500 shadow-lg" style={{ marginBottom: '17px' }}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-6 h-6 text-orange-600" />
                <CardTitle className="text-lg">Velocidade de Processamento</CardTitle>
              </div>
              <Badge variant="outline" className="w-fit bg-orange-50 text-orange-700 border-orange-200">
                Menor é Melhor
              </Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <PerformanceBar name="ACRCloud" value={80} maxValue={350} unit="ms" color={algorithmColors.ACRCloud} />
                <PerformanceBar name="Soundfingerprinting" value={110} maxValue={350} unit="ms" color={algorithmColors.Soundfingerprinting} />
                <PerformanceBar name="MP ACR" value={120} maxValue={350} unit="ms" color={algorithmColors.Mediaprobe} />
                <PerformanceBar name="Olaf" value={150} maxValue={350} unit="ms" color={algorithmColors.Olaf} />
                <PerformanceBar name="Audfprint" value={200} maxValue={350} unit="ms" color={algorithmColors.Audfprint} />
                <PerformanceBar name="Dejavu" value={350} maxValue={350} unit="ms" color={algorithmColors.Dejavu} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div style={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly'
        }}>
          {/* Company Use Case Simulation */}
          <Card className="border-l-4 border-l-green-500 shadow-lg" style={{ marginBottom: '17px' }}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <CardTitle className="text-lg">Simulação de Caso de Uso da Empresa</CardTitle>
              </div>
              <Badge variant="outline" className="w-fit bg-green-50 text-green-700 border-green-200">
                Cenário do Mundo Real
              </Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <PerformanceBar name="ACRCloud" value={63} maxValue={100} color={algorithmColors.ACRCloud} />
                <PerformanceBar name="MP ACR" value={67} maxValue={100} color={algorithmColors.Mediaprobe} />
                <PerformanceBar name="Soundfingerprinting" value={56} maxValue={100} color={algorithmColors.Soundfingerprinting} />
                <PerformanceBar name="Olaf" value={87} maxValue={10} color={algorithmColors.Olaf} />
                <PerformanceBar name="Audfprint" value={100} maxValue={100} color={algorithmColors.Audfprint} />
                <PerformanceBar name="Dejavu" value={14} maxValue={100} color={algorithmColors.Dejavu} />
              </div>
            </CardContent>
          </Card>

          {/* Memory Efficiency */}
          <Card className="border-l-4 border-l-purple-500 shadow-lg" style={{ marginBottom: '17px' }}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3 mb-2">
                <Database className="w-6 h-6 text-purple-600" />
                <CardTitle className="text-lg">Eficiência de Memória</CardTitle>
              </div>
              <Badge variant="outline" className="w-fit bg-purple-50 text-purple-700 border-purple-200">
                Uso de Recursos
              </Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <PerformanceBar name="ACRCloud" value={60} maxValue={200} unit="MB" color={algorithmColors.ACRCloud} />
                <PerformanceBar name="Soundfingerprinting" value={75} maxValue={200} unit="MB" color={algorithmColors.Soundfingerprinting} />
                <PerformanceBar name="MP ACR" value={85} maxValue={200} unit="MB" color={algorithmColors.Mediaprobe} />
                <PerformanceBar name="Olaf" value={90} maxValue={200} unit="MB" color={algorithmColors.Olaf} />
                <PerformanceBar name="Audfprint" value={120} maxValue={200} unit="MB" color={algorithmColors.Audfprint} />
                <PerformanceBar name="Dejavu" value={200} maxValue={200} unit="MB" color={algorithmColors.Dejavu} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EvaluationResultsSlide;
