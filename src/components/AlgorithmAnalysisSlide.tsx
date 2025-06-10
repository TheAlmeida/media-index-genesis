
import React, { useState, useEffect } from 'react';
import { Code2, FileText, Cloud, Database, Hash, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface AlgorithmAnalysisSlideProps {
  isActive?: boolean;
  className?: string;
}

const AlgorithmAnalysisSlide: React.FC<AlgorithmAnalysisSlideProps> = ({ isActive = true, className }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationStep(0);
      
      const timeouts = [
        setTimeout(() => setAnimationStep(1), 200),
        setTimeout(() => setAnimationStep(2), 400),
        setTimeout(() => setAnimationStep(3), 800),
        setTimeout(() => setAnimationStep(4), 1200),
        setTimeout(() => setAnimationStep(5), 1600),
        setTimeout(() => setAnimationStep(6), 2000),
      ];

      return () => timeouts.forEach(clearTimeout);
    } else {
      setAnimationStep(0);
    }
  }, [isActive]);

  const algorithmData = [
    {
      feature: "Linguagem",
      audfprint: "Python",
      dejavu: "Python", 
      olaf: "C",
      soundfingerprinting: "C#"
    },
    {
      feature: "Open Source",
      audfprint: "Sim",
      dejavu: "Sim",
      olaf: "Sim", 
      soundfingerprinting: "Sim"
    },
    {
      feature: "Tipo de Hash",
      audfprint: "32-bit int; pares landmark (freq1, freq2, Δt)",
      dejavu: "160-bit SHA1 (80-bit usado); (freq1, freq2, Δt)",
      olaf: "64-bit int; 3 picos (freq, mag, Δt)",
      soundfingerprinting: "MinHash vector; coeficientes wavelet"
    },
    {
      feature: "Base de Dados",
      audfprint: "Ficheiro .pkl2 com tabela hash",
      dejavu: "BD Relacional (MySQL/PostgreSQL)",
      olaf: "LMDB",
      soundfingerprinting: "Em memória ou externa (ex: Emy)"
    },
    {
      feature: "Emparelhamento de Picos",
      audfprint: "Sim",
      dejavu: "Sim",
      olaf: "Sim",
      soundfingerprinting: "Não (baseado em wavelet)"
    },
    {
      feature: "Estratégia de Matching",
      audfprint: "Votação por offset",
      dejavu: "Votação por offset",
      olaf: "Histograma de votos (track_id, delta)",
      soundfingerprinting: "Hamming + alinhamento temporal"
    },
    {
      feature: "Robustez ao Ruído",
      audfprint: "Alta",
      dejavu: "Média-Alta",
      olaf: "Alta",
      soundfingerprinting: "Média"
    }
  ];

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden flex flex-col",
      className
    )}>
      {/* Navigation Badge */}
      <div className="absolute top-[2vh] right-[2vw] z-10">
        <div className={cn(
          "bg-blue-500 text-white px-[1.5vw] py-[0.5vh] rounded-full text-[clamp(0.7rem,1vw,1rem)] font-medium transition-all duration-700 flex items-center gap-2",
          animationStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )}>
          <Code2 className="w-[clamp(0.8rem,1.2vw,1.2rem)] h-[clamp(0.8rem,1.2vw,1.2rem)]" />
          Algorithm Analysis
        </div>
      </div>

      {/* Header */}
      <div className="flex-shrink-0 pt-[2vh] pb-[1vh] px-[2vw]">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="text-[clamp(2rem,4vw,4rem)] font-bold text-white mb-[0.5vh]">
            Analyzed Algorithms
          </h1>
          <p className="text-[clamp(0.9rem,1.5vw,1.5rem)] text-slate-300 font-light">
            Comprehensive evaluation of commercial and open-source solutions
          </p>
        </div>
      </div>

      {/* Commercial Solutions */}
      <div className="flex-shrink-0 px-[2vw] pb-[2vh]">
        <div className={cn(
          "flex gap-[2vw] justify-center transition-all duration-700 transform",
          animationStep >= 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          {/* MP ACR Card */}
          <div className="bg-slate-800/80 backdrop-blur-sm border border-blue-400/20 rounded-[1vw] p-[1.5vw] text-center hover:scale-105 transition-all duration-300 shadow-xl max-w-[20vw]">
            <div className="mb-[1vh]">
              <div className="w-[3vw] h-[3vw] min-w-[36px] min-h-[36px] mx-auto bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <FileText className="w-[1.5vw] h-[1.5vw] min-w-[18px] min-h-[18px] text-white" />
              </div>
            </div>
            <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-bold text-white mb-[0.5vh]">MP ACR</h3>
            <Badge className="bg-blue-500/20 text-blue-300 mb-[1vh]">Commercial</Badge>
            <p className="text-[clamp(0.7rem,0.9vw,0.9rem)] text-slate-300">
              Sem acesso ao código fonte
            </p>
          </div>

          {/* ACRCloud Card */}
          <div className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-[1vw] p-[1.5vw] text-center hover:scale-105 transition-all duration-300 shadow-xl max-w-[20vw]">
            <div className="mb-[1vh]">
              <div className="w-[3vw] h-[3vw] min-w-[36px] min-h-[36px] mx-auto bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Cloud className="w-[1.5vw] h-[1.5vw] min-w-[18px] min-h-[18px] text-white" />
              </div>
            </div>
            <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-bold text-white mb-[0.5vh]">ACRCloud</h3>
            <Badge className="bg-blue-500/20 text-blue-300 mb-[1vh]">Commercial API</Badge>
            <p className="text-[clamp(0.7rem,0.9vw,0.9rem)] text-slate-300">
              Sem acesso ao código fonte
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="flex-1 px-[2vw] pb-[2vh] min-h-0">
        <div className={cn(
          "bg-white/95 backdrop-blur-sm rounded-[1vw] shadow-xl border border-gray-200 p-[1vw] h-full flex flex-col transition-all duration-700 transform",
          animationStep >= 3 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h2 className="text-[clamp(1.2rem,1.8vw,1.8rem)] font-bold text-gray-800 mb-[1vh] text-center">
            Open Source Algorithms Comparison
          </h2>
          
          <div className="flex-1 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[clamp(0.8rem,1vw,1rem)] font-bold">Feature</TableHead>
                  <TableHead className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-blue-600">Audfprint</TableHead>
                  <TableHead className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-green-600">Dejavu</TableHead>
                  <TableHead className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-orange-600">Olaf</TableHead>
                  <TableHead className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-purple-600">Soundfingerprinting</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {algorithmData.map((row, index) => (
                  <TableRow key={row.feature}>
                    <TableCell className="font-medium text-[clamp(0.7rem,0.9vw,0.9rem)]">{row.feature}</TableCell>
                    <TableCell className="text-[clamp(0.7rem,0.9vw,0.9rem)] text-blue-700">{row.audfprint}</TableCell>
                    <TableCell className="text-[clamp(0.7rem,0.9vw,0.9rem)] text-green-700">{row.dejavu}</TableCell>
                    <TableCell className="text-[clamp(0.7rem,0.9vw,0.9rem)] text-orange-700">{row.olaf}</TableCell>
                    <TableCell className="text-[clamp(0.7rem,0.9vw,0.9rem)] text-purple-700">{row.soundfingerprinting}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Statistics Panel */}
      <div className="flex-shrink-0 px-[2vw] pb-[2vh]">
        <div className={cn(
          "flex gap-[2vw] justify-center transition-all duration-700 transform",
          animationStep >= 4 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          {/* Commercial Solutions Stats */}
          <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-[1vw] p-[1.5vw] text-center shadow-xl">
            <div className="text-[clamp(2rem,3vw,3rem)] font-bold text-blue-300 mb-[0.5vh]">2</div>
            <h3 className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-bold text-white mb-[0.3vh]">Soluções Comerciais</h3>
            <p className="text-[clamp(0.7rem,0.9vw,0.9rem)] text-slate-300">MP ACR, ACRCloud</p>
          </div>

          {/* Open Source Stats */}
          <div className="bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-[1vw] p-[1.5vw] text-center shadow-xl">
            <div className="text-[clamp(2rem,3vw,3rem)] font-bold text-teal-300 mb-[0.5vh]">4</div>
            <h3 className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-bold text-white mb-[0.3vh]">Bibliotecas Open Source</h3>
            <p className="text-[clamp(0.7rem,0.9vw,0.9rem)] text-slate-300">Implementações Python, C, C#</p>
          </div>

          {/* Features Stats */}
          <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-[1vw] p-[1.5vw] text-center shadow-xl">
            <div className="text-[clamp(2rem,3vw,3rem)] font-bold text-purple-300 mb-[0.5vh]">7</div>
            <h3 className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-bold text-white mb-[0.3vh]">Características Principais Comparadas</h3>
            <p className="text-[clamp(0.7rem,0.9vw,0.9rem)] text-slate-300">Análise abrangente</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmAnalysisSlide;
