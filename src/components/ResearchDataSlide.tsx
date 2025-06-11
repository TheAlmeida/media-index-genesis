
import React, { useState, useEffect } from 'react';
import { Database, FileText, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface ResearchDataSlideProps {
  isActive?: boolean;
  className?: string;
}

const ResearchDataSlide: React.FC<ResearchDataSlideProps> = ({ isActive = true, className }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationStep(0);
      
      const timeouts = [
        setTimeout(() => setAnimationStep(1), 200),
        setTimeout(() => setAnimationStep(2), 400),
        setTimeout(() => setAnimationStep(3), 800),
        setTimeout(() => setAnimationStep(4), 1200),
      ];

      return () => timeouts.forEach(clearTimeout);
    } else {
      setAnimationStep(0);
    }
  }, [isActive]);

  const datasets = [
    {
      icon: FileText,
      title: "pexafb_easy_small",
      subtitle: "Dataset Open Source",
      color: "#3b82f6",
      charts: [
        {
          title: "Referencias (99)",
          data: [
            { name: "Musica", value: 100, fill: "#3b82f6" }
          ]
        },
        {
          title: "Queries (21 com 100 chunks)",
          data: [
            { name: "Musica", value: 100, fill: "#60a5fa" }
          ]
        }
      ]
    },
    {
      icon: Headphones,
      title: "Dataset Experimental",
      subtitle: "Estrutura Personalizada Mediaprobe",
      color: "#10b981",
      charts: [
        {
          title: "Referencias (163)",
          data: [
            { name: "Musica", value: 81.0, fill: "#10b981" },
            { name: "Filmes", value: 7.98, fill: "#34d399" },
            { name: "Desporto", value: 3.68, fill: "#6ee7b7" },
            { name: "Esports", value: 3.68, fill: "#a7f3d0" },
            { name: "Talk-shows", value: 3.68, fill: "#d1fae5" }
          ]
        },
        {
          title: "Queries 10seg (75 com 75 chunks)",
          data: [
            { name: "Musica", value: 81.33, fill: "#059669" },
            { name: "Desporto", value: 9.33, fill: "#10b981" },
            { name: "Filmes", value: 6.67, fill: "#34d399" },
            { name: "Esports", value: 2.67, fill: "#6ee7b7" }
          ]
        },
        {
          title: "Queries 5seg (128 com 75 chunks)",
          data: [
            { name: "Musica", value: 75.0, fill: "#047857" },
            { name: "Filmes", value: 10.9, fill: "#059669" },
            { name: "Desporto", value: 7.03, fill: "#10b981" },
            { name: "Talk-shows", value: 3.90, fill: "#34d399" },
            { name: "Esports", value: 3.13, fill: "#6ee7b7" }
          ]
        }
      ]
    },
    {
      icon: Database,
      title: "Dataset Experimental",
      subtitle: "Com Conteúdo Publicitário",
      color: "#8b5cf6",
      charts: [
        {
          title: "Referencias (181)",
          data: [
            { name: "Musica", value: 72.5, fill: "#8b5cf6" },
            { name: "Anuncios", value: 9.89, fill: "#a78bfa" },
            { name: "Filmes", value: 7.14, fill: "#c4b5fd" },
            { name: "Desporto", value: 3.30, fill: "#ddd6fe" },
            { name: "Esports", value: 3.30, fill: "#ede9fe" },
            { name: "Talk-shows", value: 3.30, fill: "#f3f4f6" }
          ]
        },
        {
          title: "Queries (1 com 18 chunks)",
          data: [
            { name: "Anuncios", value: 100, fill: "#7c3aed" }
          ]
        }
      ]
    }
  ];

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 relative overflow-hidden flex flex-col pb-[9vh]",
      className
    )}>
      {/* Header */}
      <div className="flex-shrink-0 pt-[2vh] pb-[1.5vh] px-[2vw]">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="text-[clamp(3rem,5vw,5rem)] font-bold text-gray-800 mb-[0.3vh]">
            Datasets de Investigação
          </h1>
          <p className="text-[clamp(1.2rem,1.8vw,1.8rem)] text-gray-600 font-light">
            Datasets de áudio abrangentes para avaliação e teste de algoritmos
          </p>
        </div>
      </div>

      {/* Main Content - Dataset Charts */}
      <div className="flex-1 px-[2vw] pb-[4vh] min-h-0">
        <div className="h-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-[2vw] max-w-[90vw] w-full">
            {datasets.map((dataset, index) => {
              const Icon = dataset.icon;
              
              return (
                <div 
                  key={index}
                  className={cn(
                    "bg-white rounded-lg shadow-lg border-l-4 p-[1.5vw] transition-all duration-700 transform hover:scale-[1.01] hover:shadow-xl flex flex-col h-[60vh]",
                    `border-[${dataset.color}]`,
                    animationStep >= index + 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{ borderLeftColor: dataset.color }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-[0.8vw] mb-[2vh] flex-shrink-0">
                    <div 
                      className="w-[3.2vw] h-[3.2vw] min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center"
                      style={{ backgroundColor: dataset.color }}
                    >
                      <Icon className="w-[1.8vw] h-[1.8vw] min-w-[22px] min-h-[22px] text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[clamp(1.6rem,2.2vw,2.2rem)] font-bold text-gray-800 leading-tight">
                        {dataset.title}
                      </h3>
                      <p className="text-[clamp(1.2rem,1.6vw,1.6rem)] text-gray-500">
                        {dataset.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Charts Grid - Takes remaining height */}
                  <div className={cn(
                    "flex-1 grid gap-4",
                    dataset.charts.length === 2 ? "grid-cols-2" : "grid-cols-1 grid-rows-3"
                  )}>
                    {dataset.charts.map((chart, chartIndex) => (
                      <div key={chartIndex} className="flex flex-col">
                        <h4 className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-semibold text-gray-700 mb-2 text-center">
                          {chart.title}
                        </h4>
                        <div className="flex-1 min-h-[120px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={chart.data}
                                cx="50%"
                                cy="50%"
                                outerRadius={dataset.charts.length === 3 ? 45 : 55}
                                dataKey="value"
                                label={({ name, value }) => `${value}%`}
                                labelLine={false}
                              >
                                {chart.data.map((entry, entryIndex) => (
                                  <Cell key={`cell-${entryIndex}`} fill={entry.fill} />
                                ))}
                              </Pie>
                              <Tooltip 
                                formatter={(value) => [`${value}%`, '']}
                                contentStyle={{ 
                                  backgroundColor: 'white', 
                                  border: `2px solid ${dataset.color}`,
                                  borderRadius: '8px',
                                  fontSize: '12px'
                                }}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDataSlide;
