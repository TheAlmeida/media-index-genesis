
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
    }
  ];

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-background relative overflow-hidden flex flex-col",
      className
    )}>
      {/* Navigation Badge */}
      <div className="absolute top-[2vh] right-[2vw] z-10">
        <div className={cn(
          "bg-primary text-primary-foreground px-[1.5vw] py-[0.5vh] rounded-full text-[clamp(0.7rem,1vw,1rem)] font-medium transition-all duration-700 flex items-center gap-2",
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
          <h1 className="text-[clamp(2rem,4vw,4rem)] font-bold text-foreground mb-[0.5vh]">
            Analyzed Algorithms
          </h1>
          <p className="text-[clamp(0.9rem,1.5vw,1.5rem)] text-muted-foreground font-light">
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
            <h2 className="text-[clamp(1.2rem,1.8vw,1.8rem)] font-bold text-foreground text-center mb-[0.5vh]">
              Commercial Solutions
            </h2>
            <div className="grid grid-cols-1 gap-[0.5vh]">
              {/* MP ACR Card */}
              <div className="bg-card border border-border rounded-[1vw] p-[1vw] text-center hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="mb-[0.5vh]">
                  <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] mx-auto bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <FileText className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-[clamp(0.9rem,1.1vw,1.1rem)] font-bold text-foreground mb-[0.3vh]">MP ACR</h3>
                <Badge className="bg-primary/20 text-primary mb-[0.5vh]">Commercial</Badge>
                <p className="text-[clamp(0.6rem,0.8vw,0.8rem)] text-muted-foreground">
                  Sem acesso ao código fonte
                </p>
              </div>

              {/* ACRCloud Card */}
              <div className="bg-card border border-border rounded-[1vw] p-[1vw] text-center hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="mb-[0.5vh]">
                  <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] mx-auto bg-secondary rounded-full flex items-center justify-center shadow-lg">
                    <Cloud className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-secondary-foreground" />
                  </div>
                </div>
                <h3 className="text-[clamp(0.9rem,1.1vw,1.1rem)] font-bold text-foreground mb-[0.3vh]">ACRCloud</h3>
                <Badge className="bg-secondary/20 text-secondary-foreground mb-[0.5vh]">Commercial API</Badge>
                <p className="text-[clamp(0.6rem,0.8vw,0.8rem)] text-muted-foreground">
                  Sem acesso ao código fonte
                </p>
              </div>
            </div>
          </div>

          {/* Open Source Solutions Section */}
          <div className="space-y-[0.5vh]">
            <h2 className="text-[clamp(1.2rem,1.8vw,1.8rem)] font-bold text-foreground text-center mb-[0.5vh]">
              Open Source Solutions
            </h2>
            <div className="grid grid-cols-2 gap-[0.5vh]">
              {/* Audfprint */}
              <div className="bg-card border border-border rounded-[1vw] p-[1vw] text-center hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="mb-[0.5vh]">
                  <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] mx-auto bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Code2 className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-foreground mb-[0.3vh]">Audfprint</h3>
                <Badge className="bg-accent/20 text-accent-foreground mb-[0.5vh]">Python</Badge>
              </div>

              {/* Dejavu */}
              <div className="bg-card border border-border rounded-[1vw] p-[1vw] text-center hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="mb-[0.5vh]">
                  <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] mx-auto bg-muted rounded-full flex items-center justify-center shadow-lg">
                    <Database className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-muted-foreground" />
                  </div>
                </div>
                <h3 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-foreground mb-[0.3vh]">Dejavu</h3>
                <Badge className="bg-muted/20 text-muted-foreground mb-[0.5vh]">Python</Badge>
              </div>

              {/* Olaf */}
              <div className="bg-card border border-border rounded-[1vw] p-[1vw] text-center hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="mb-[0.5vh]">
                  <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] mx-auto bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Hash className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-foreground mb-[0.3vh]">Olaf</h3>
                <Badge className="bg-primary/20 text-primary mb-[0.5vh]">C</Badge>
              </div>

              {/* Soundfingerprinting */}
              <div className="bg-card border border-border rounded-[1vw] p-[1vw] text-center hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="mb-[0.5vh]">
                  <div className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] mx-auto bg-secondary rounded-full flex items-center justify-center shadow-lg">
                    <Zap className="w-[1.2vw] h-[1.2vw] min-w-[15px] min-h-[15px] text-secondary-foreground" />
                  </div>
                </div>
                <h3 className="text-[clamp(0.8rem,1vw,1rem)] font-bold text-foreground mb-[0.3vh]">Soundfingerprinting</h3>
                <Badge className="bg-secondary/20 text-secondary-foreground mb-[0.5vh]">C#</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="flex-1 px-[2vw] pb-[2vh] min-h-0">
        <div className={cn(
          "bg-card backdrop-blur-sm rounded-[1vw] shadow-xl border border-border p-[1vw] h-full flex flex-col transition-all duration-700 transform",
          animationStep >= 3 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h2 className="text-[clamp(1.2rem,1.8vw,1.8rem)] font-bold text-foreground mb-[1vh] text-center">
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
    </div>
  );
};

export default AlgorithmAnalysisSlide;
