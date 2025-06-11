
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
      title: "Open Source Dataset",
      subtitle: "pexafb_easy_small",
      color: "#3b82f6",
      charts: [
        {
          title: "Reference vs Query",
          data: [
            { name: "Reference Tracks", value: 99, fill: "#3b82f6" },
            { name: "Query Files", value: 21, fill: "#60a5fa" }
          ]
        },
        {
          title: "Audio Segments",
          data: [
            { name: "Audio Segments", value: 100, fill: "#93c5fd" },
            { name: "Processed", value: 80, fill: "#dbeafe" }
          ]
        }
      ]
    },
    {
      icon: Headphones,
      title: "Experimental Dataset",
      subtitle: "Custom Mediaprobe Structure",
      color: "#10b981",
      charts: [
        {
          title: "Content Distribution",
          data: [
            { name: "Music Content", value: 81, fill: "#10b981" },
            { name: "Other Content", value: 19, fill: "#34d399" }
          ]
        },
        {
          title: "Total Files",
          data: [
            { name: "Total Files", value: 163, fill: "#6ee7b7" },
            { name: "Processed", value: 140, fill: "#a7f3d0" }
          ]
        },
        {
          title: "Content Types",
          data: [
            { name: "Movies", value: 30, fill: "#059669" },
            { name: "Sports", value: 25, fill: "#10b981" },
            { name: "Talk Shows", value: 45, fill: "#34d399" }
          ]
        }
      ]
    },
    {
      icon: Database,
      title: "Expanded Version",
      subtitle: "With Advertising Content",
      color: "#8b5cf6",
      charts: [
        {
          title: "Content vs Ads",
          data: [
            { name: "Regular Content", value: 164, fill: "#8b5cf6" },
            { name: "Advertisements", value: 18, fill: "#a78bfa" }
          ]
        },
        {
          title: "Duration Analysis",
          data: [
            { name: "Total Duration (min)", value: 90, fill: "#c4b5fd" },
            { name: "Ad Duration (min)", value: 15, fill: "#ddd6fe" }
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
            Research Datasets
          </h1>
          <p className="text-[clamp(1.2rem,1.8vw,1.8rem)] text-gray-600 font-light">
            Comprehensive audio datasets for algorithm evaluation and testing
          </p>
        </div>
      </div>

      {/* Main Content - Dataset Charts */}
      <div className="flex-1 px-[2vw] pb-[4vh] min-h-0">
        <div className="h-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-[2vw] max-w-[90vw] w-full">
            {datasets.map((dataset, index) => {
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
                  {/* Charts Grid - Takes full height */}
                  <div className={cn(
                    "flex-1 grid gap-4",
                    dataset.charts.length === 2 ? "grid-cols-2" : "grid-cols-1 grid-rows-3"
                  )}>
                    {dataset.charts.map((chart, chartIndex) => (
                      <div key={chartIndex} className="flex flex-col">
                        <div className="flex-1 min-h-[120px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={chart.data}
                                cx="50%"
                                cy="50%"
                                outerRadius={dataset.charts.length === 3 ? 50 : 60}
                                dataKey="value"
                                label={({ name, value }) => `${value}`}
                              >
                                {chart.data.map((entry, entryIndex) => (
                                  <Cell key={`cell-${entryIndex}`} fill={entry.fill} />
                                ))}
                              </Pie>
                              <Tooltip 
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
