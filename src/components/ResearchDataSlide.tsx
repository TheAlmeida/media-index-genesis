
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
      data: [
        { name: "Reference Tracks", value: 99, fill: "#3b82f6" },
        { name: "Query Files", value: 21, fill: "#60a5fa" },
        { name: "Audio Segments", value: 100, fill: "#93c5fd" }
      ],
      features: [
        "Free Music Archive (FMA) tracks",
        "Modified audio segments (echo, pitch changes, noise)",
        "Used for initial algorithm validation",
        "Audio Fingerprinting Benchmark Toolkit origin"
      ]
    },
    {
      icon: Headphones,
      title: "Experimental Dataset",
      subtitle: "Custom Mediaprobe Structure",
      color: "#10b981",
      data: [
        { name: "Music Content", value: 81, fill: "#10b981" },
        { name: "Other Content", value: 19, fill: "#34d399" },
        { name: "Total Files", value: 163, fill: "#6ee7b7" }
      ],
      features: [
        "Reflects Mediaprobe's internal database structure",
        "Mixed content: music, movies, sports, talk-shows, esports",
        "Simulated acoustic distortions in queries",
        "Primary dataset for performance evaluation"
      ]
    },
    {
      icon: Database,
      title: "Expanded Version",
      subtitle: "With Advertising Content",
      color: "#8b5cf6",
      data: [
        { name: "Regular Content", value: 164, fill: "#8b5cf6" },
        { name: "Advertisements", value: 18, fill: "#a78bfa" },
        { name: "Total Duration (min)", value: 90, fill: "#c4b5fd" }
      ],
      features: [
        "Integrated Super Bowl advertisements",
        "Realistic broadcast environment simulation",
        "Complex query scenarios testing",
        "Indirect acoustic capture testing"
      ]
    }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#8b5cf6'];

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 relative overflow-hidden flex flex-col",
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
              const Icon = dataset.icon;
              
              return (
                <div 
                  key={index}
                  className={cn(
                    "bg-white rounded-lg shadow-lg border-l-4 p-[1.5vw] transition-all duration-700 transform hover:scale-[1.01] hover:shadow-xl flex flex-col h-[70vh]",
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

                  {/* Pie Chart */}
                  <div className="h-[30vh] w-full mb-[2vh] flex-shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={dataset.data}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}`}
                        >
                          {dataset.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: `2px solid ${dataset.color}`,
                            borderRadius: '8px',
                            fontSize: '14px'
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Features - Fill remaining space */}
                  <div className="flex-1 space-y-[1vh] overflow-hidden">
                    {dataset.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: dataset.color }}
                        />
                        <p className="text-[clamp(1.2rem,1.6vw,1.6rem)] text-gray-600 leading-relaxed">
                          {feature}
                        </p>
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
