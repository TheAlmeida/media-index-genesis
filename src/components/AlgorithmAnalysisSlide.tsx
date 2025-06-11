import React, { useState, useEffect } from 'react';
import { Code2, FileText, Cloud, Database, Hash, Zap, Music, Cpu, Binary, Waves } from 'lucide-react';
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
    }
  ];

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden flex flex-col",
      className
    )}>
      {/* Header */}
      <div className="flex-shrink-0 pt-[2vh] pb-[1vh] px-[2vw]">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="text-[clamp(2rem,4vw,4rem)] font-bold text-black mb-[0.5vh]">
            Analyzed Algorithms
          </h1>
          <p className="text-[clamp(0.9rem,1.5vw,1.5rem)] text-black font-light">
            Comprehensive evaluation of commercial and open-source solutions
          </p>
        </div>
      </div>

      {/* All Solutions Grid */}
      <div className="flex-shrink-0 px-[2vw] pb-[1vh]">
        <div className={cn(
          "grid grid-cols-2 gap-[2vw] transition-all duration-700 transform",
          animationStep >= 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          {/* Commercial Solutions Section */}
          <div className="space-y-[0.5vh]">
            <h2 className="text-[clamp(1.2rem,1.8vw,1.8rem)] font-bold text-black text-center mb-[0.5vh]">
              Commercial Solutions
            </h2>
            <div className="grid grid-cols-2 gap-[0.5vh]">
              {/* MP ACR Card */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-[1vw] p-[1vw] text-center hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="mb-[0.5vh]">
                  <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Music className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-white" />
                  </div>
                </div>
                <h3 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-black mb-[0.3vh]">MP ACR</h3>
                <Badge className="bg-red-100 text-red-700 border-red-300 mb-[0.5vh]">Commercial</Badge>
                <p className="text-[clamp(0.6rem,0.8vw,0.8rem)] text-black">
                  Sem acesso ao código fonte
                </p>
              </div>

              {/* ACRCloud Card */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-[1vw] p-[1vw] text-center hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="mb-[0.5vh]">
                  <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] mx-auto bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <Cloud className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-white" />
                  </div>
                </div>
                <h3 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-black mb-[0.3vh]">ACRCloud</h3>
                <Badge className="bg-orange-100 text-orange-700 border-orange-300 mb-[0.5vh]">Commercial API</Badge>
                <p className="text-[clamp(0.6rem,0.8vw,0.8rem)] text-black">
                  Sem acesso ao código fonte
                </p>
              </div>
            </div>
          </div>

          {/* Open Source Solutions Section */}
          <div className="space-y-[0.5vh]">
            <h2 className="text-[clamp(1.2rem,1.8vw,1.8rem)] font-bold text-black text-center mb-[0.5vh]">
              Open Source Solutions
            </h2>
            <div className="grid grid-cols-2 gap-[0.5vh]">
              {/* Audfprint */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-[1vw] p-[1vw] text-center hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="mb-[0.5vh]">
                  <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                    <FileText className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-white" />
                  </div>
                </div>
                <h3 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-black mb-[0.3vh]">Audfprint</h3>
                <Badge className="bg-blue-100 text-blue-700 border-blue-300 mb-[0.5vh]">Python</Badge>
              </div>

              {/* Dejavu */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-[1vw] p-[1vw] text-center hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="mb-[0.5vh]">
                  <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <Database className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-white" />
                  </div>
                </div>
                <h3 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-black mb-[0.3vh]">Dejavu</h3>
                <Badge className="bg-green-100 text-green-700 border-green-300 mb-[0.5vh]">Python</Badge>
              </div>

              {/* Olaf */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-[1vw] p-[1vw] text-center hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="mb-[0.5vh]">
                  <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <Cpu className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-white" />
                  </div>
                </div>
                <h3 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-black mb-[0.3vh]">Olaf</h3>
                <Badge className="bg-purple-100 text-purple-700 border-purple-300 mb-[0.5vh]">C</Badge>
              </div>

              {/* Soundfingerprinting */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-[1vw] p-[1vw] text-center hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="mb-[0.5vh]">
                  <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] mx-auto bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <Hash className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-white" />
                  </div>
                </div>
                <h3 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-black mb-[0.3vh]">Soundfingerprinting</h3>
                <Badge className="bg-teal-100 text-teal-700 border-teal-300 mb-[0.5vh]">C#</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="flex-1 px-[2vw] pb-[9vh] min-h-0" style={{ height: 'calc(100% - 80px)' }}>
        <div className={cn(
          "bg-white/80 backdrop-blur-sm rounded-[1vw] shadow-xl border-2 border-slate-200 p-[1vw] h-full flex flex-col transition-all duration-700 transform",
          animationStep >= 3 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h2 className="text-[clamp(1.2rem,2vw,2rem)] font-bold text-black mb-[1vh] text-center">
            Open Source Algorithms Comparison
          </h2>
          
          <div className="flex-1 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-200">
                  <TableHead className="text-[clamp(1rem,1.4vw,1.4rem)] font-bold text-black">Feature</TableHead>
                  <TableHead className="text-[clamp(1rem,1.4vw,1.4rem)] font-bold text-black">Audfprint</TableHead>
                  <TableHead className="text-[clamp(1rem,1.4vw,1.4rem)] font-bold text-black">Dejavu</TableHead>
                  <TableHead className="text-[clamp(1rem,1.4vw,1.4rem)] font-bold text-black">Olaf</TableHead>
                  <TableHead className="text-[clamp(1rem,1.4vw,1.4rem)] font-bold text-black">Soundfingerprinting</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {algorithmData.map((row, index) => (
                  <TableRow key={row.feature} className="border-slate-100 hover:bg-slate-50/50">
                    <TableCell className="font-medium text-[clamp(0.9rem,1.2vw,1.2rem)] text-black">{row.feature}</TableCell>
                    <TableCell className="text-[clamp(0.9rem,1.2vw,1.2rem)] text-black">{row.audfprint}</TableCell>
                    <TableCell className="text-[clamp(0.9rem,1.2vw,1.2rem)] text-black">{row.dejavu}</TableCell>
                    <TableCell className="text-[clamp(0.9rem,1.2vw,1.2rem)] text-black">{row.olaf}</TableCell>
                    <TableCell className="text-[clamp(0.9rem,1.2vw,1.2rem)] text-black">{row.soundfingerprinting}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmAnalysisSlide;
