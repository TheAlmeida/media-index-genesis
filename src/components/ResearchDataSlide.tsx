
import React, { useState, useEffect } from 'react';
import { Database, FileText, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { SlideTitle } from './ui/SlideTitle';

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

  // Consistent color mapping for categories
  const categoryColors = {
    "Música": "#10b981",
    "Música": "#10b981", // Same as Música for consistency
    "Filmes": "#3b82f6",
    "Desporto": "#f59e0b",
    "Esports": "#8b5cf6",
    "Talk-shows": "#ef4444",
    "Anúncios": "#6366f1",
  };

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
            { name: "Música", value: 100, fill: categoryColors["Música"] }
          ]
        },
        {
          title: "Queries (21 com 100 chunks)",
          data: [
            { name: "Música", value: 100, fill: categoryColors["Música"] }
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
            { name: "Música", value: 81.0, fill: categoryColors["Música"] },
            { name: "Filmes", value: 7.98, fill: categoryColors["Filmes"] },
            { name: "Desporto", value: 3.68, fill: categoryColors["Desporto"] },
            { name: "Esports", value: 3.68, fill: categoryColors["Esports"] },
            { name: "Talk-shows", value: 3.68, fill: categoryColors["Talk-shows"] }
          ]
        },
        {
          title: "Queries 10seg (75 com 75 chunks)",
          data: [
            { name: "Música", value: 81.33, fill: categoryColors["Música"] },
            { name: "Desporto", value: 9.33, fill: categoryColors["Desporto"] },
            { name: "Filmes", value: 6.67, fill: categoryColors["Filmes"] },
            { name: "Esports", value: 2.67, fill: categoryColors["Esports"] }
          ]
        },
        {
          title: "Queries 5seg (128 com 128 chunks)",
          data: [
            { name: "Música", value: 75.0, fill: categoryColors["Música"] },
            { name: "Filmes", value: 10.9, fill: categoryColors["Filmes"] },
            { name: "Desporto", value: 7.03, fill: categoryColors["Desporto"] },
            { name: "Talk-shows", value: 3.90, fill: categoryColors["Talk-shows"] },
            { name: "Esports", value: 3.13, fill: categoryColors["Esports"] }
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
            { name: "Música", value: 72.5, fill: categoryColors["Música"] },
            { name: "Anúncios", value: 9.89, fill: categoryColors["Anúncios"] },
            { name: "Filmes", value: 7.14, fill: categoryColors["Filmes"] },
            { name: "Desporto", value: 3.30, fill: categoryColors["Desporto"] },
            { name: "Esports", value: 3.30, fill: categoryColors["Esports"] },
            { name: "Talk-shows", value: 3.30, fill: categoryColors["Talk-shows"] }
          ]
        },
        {
          title: "Queries (1 com 18 chunks)",
          data: [
            { name: "Anúncios", value: 100, fill: categoryColors["Anúncios"] }
          ]
        }
      ]
    }
  ];

  // Get all unique categories across all datasets
  const getAllUniqueCategories = () => {
    const allCategories = new Set<string>();
    datasets.forEach(dataset => {
      dataset.charts.forEach(chart => {
        chart.data.forEach(item => allCategories.add(item.name));
      });
    });
    return Array.from(allCategories).map(category => ({
      name: category,
      color: categoryColors[category as keyof typeof categoryColors]
    }));
  };

  const globalLegendData = getAllUniqueCategories();

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
          <SlideTitle title="Datasets" subtitle="Datasets de áudio abrangentes para avaliação e teste de algoritmos" />
        </div>
      </div>

      {/* Main Content - Dataset Charts */}
      <div className="flex-1 px-[2vw] pb-[4vh] min-h-0">
        <div className="h-full flex flex-col items-center justify-center">
          {/* Dataset Cards */}
          <div className="grid grid-cols-3 gap-[2vw] max-w-[90vw] w-full mb-8">
            {datasets.map((dataset, index) => {
              const Icon = dataset.icon;
              
              return (
                <div 
                  key={index}
                  className={cn(
                    "bg-white rounded-lg shadow-lg border-l-4 p-[1.5vw] transition-all duration-700 transform hover:scale-[1.01] hover:shadow-xl flex flex-col h-[55vh]",
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

                  {/* Charts arranged vertically */}
                  <div className="flex-1 flex flex-col gap-4">
                    {dataset.charts.map((chart, chartIndex) => (
                      <div key={chartIndex} className="flex flex-col flex-1">
                        <h4 className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-semibold text-gray-700 mb-2 text-center">
                          {chart.title}
                        </h4>
                        <div className="flex-1 flex items-center justify-center min-h-[120px]">
                          <ResponsiveContainer width="100%" height={120}>
                            <PieChart>
                              <Pie
                                data={chart.data}
                                cx="50%"
                                cy="50%"
                                outerRadius={40}
                                dataKey="value"
                                label={chart.data.length === 1 ? false : ({ value }) => `${value}%`}
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

          {/* Global Legend - Horizontal below middle card */}
          <div className={cn(
            "flex items-center justify-center gap-6 transition-all duration-700 transform",
            animationStep >= 4 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            {globalLegendData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDataSlide;
