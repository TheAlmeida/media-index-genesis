
import React, { useState, useEffect } from 'react';
import { Database, FileText, Headphones, Mic, Shield, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

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
        setTimeout(() => setAnimationStep(5), 1600),
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
      color: "blue",
      stats: [
        { label: "Reference Tracks", value: "99" },
        { label: "Query Files", value: "21" },
        { label: "Audio Segments", value: "~100" }
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
      color: "green",
      stats: [
        { label: "Reference Files", value: "163" },
        { label: "Music Content", value: "81%" },
        { label: "Query Duration", value: "5-10s" }
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
      color: "purple",
      stats: [
        { label: "Total Files", value: "182" },
        { label: "Total Duration", value: "90+ min" },
        { label: "Advertisements", value: "18" }
      ],
      features: [
        "Integrated Super Bowl advertisements",
        "Realistic broadcast environment simulation",
        "Complex query scenarios testing",
        "Indirect acoustic capture testing"
      ]
    }
  ];

  const methodologyCards = [
    {
      icon: Mic,
      title: "Realistic Testing",
      description: "Indirect acoustic capture testing using mobile phone recording. Results showed artificially inflated performance due to all reference clips being included in queries.",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Standardization",
      description: "All audio files standardized to .wav format, mono, 8 kHz for consistency across tests and fair algorithm comparison.",
      color: "blue"
    },
    {
      icon: BarChart,
      title: "Evaluation Framework",
      description: "Comprehensive testing framework designed to assess algorithm robustness under various acoustic conditions and content types.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500 border-blue-500 text-blue-600",
      green: "bg-green-500 border-green-500 text-green-600", 
      purple: "bg-purple-500 border-purple-500 text-purple-600",
      orange: "bg-orange-500 border-orange-500 text-orange-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

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
          <h1 className="text-[clamp(2rem,3.5vw,3.5rem)] font-bold text-gray-800 mb-[0.3vh]">
            Research Datasets
          </h1>
          <p className="text-[clamp(0.8rem,1.1vw,1.1rem)] text-gray-600 font-light">
            Comprehensive audio datasets for algorithm evaluation and testing
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-[2vw] pb-[9vh] min-h-0">
        <div className="h-full flex flex-col gap-[1vh]">
          
          {/* Dataset Cards - Main Section */}
          <div className="flex-1 min-h-0">
            <div className="grid grid-cols-3 gap-[1.2vw] h-full">
              {datasets.map((dataset, index) => {
                const Icon = dataset.icon;
                const colorClasses = getColorClasses(dataset.color);
                
                return (
                  <div 
                    key={index}
                    className={cn(
                      "bg-white rounded-lg shadow-lg border-l-4 p-[0.8vw] transition-all duration-700 transform hover:scale-[1.01] hover:shadow-xl flex flex-col",
                      `border-${dataset.color}-500`,
                      animationStep >= index + 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    )}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-[0.6vw] mb-[0.8vh] flex-shrink-0">
                      <div className={cn(
                        "w-[2vw] h-[2vw] min-w-[24px] min-h-[24px] rounded-full flex items-center justify-center",
                        colorClasses.split(' ')[0]
                      )}>
                        <Icon className="w-[1vw] h-[1vw] min-w-[12px] min-h-[12px] text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[clamp(0.75rem,0.9vw,0.9rem)] font-bold text-gray-800 leading-tight">
                          {dataset.title}
                        </h3>
                        <p className="text-[clamp(0.55rem,0.7vw,0.7rem)] text-gray-500">
                          {dataset.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-1 mb-[0.8vh] flex-shrink-0">
                      {dataset.stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-1.5 bg-gray-50 rounded">
                          <div className={cn(
                            "text-[clamp(0.65rem,0.8vw,0.8rem)] font-bold leading-tight",
                            colorClasses.split(' ')[2]
                          )}>
                            {stat.value}
                          </div>
                          <div className="text-[clamp(0.45rem,0.55vw,0.55rem)] text-gray-600 leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features - Fill remaining space */}
                    <div className="flex-1 space-y-[0.2vh] overflow-hidden">
                      {dataset.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <div className={cn(
                            "w-1 h-1 rounded-full mt-1.5 flex-shrink-0",
                            colorClasses.split(' ')[0]
                          )} />
                          <p className="text-[clamp(0.55rem,0.7vw,0.7rem)] text-gray-600 leading-tight">
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

          {/* Methodology Cards - Bottom Section */}
          <div className="flex-shrink-0">
            <div className="grid grid-cols-3 gap-[1.2vw] h-[12vh]">
              {methodologyCards.map((card, index) => {
                const Icon = card.icon;
                const colorClasses = getColorClasses(card.color);
                
                return (
                  <div 
                    key={index}
                    className={cn(
                      "bg-white rounded-lg shadow-md border-l-4 p-[0.6vw] transition-all duration-700 transform hover:scale-[1.01] flex",
                      `border-${card.color}-500`,
                      animationStep >= 5 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    )}
                  >
                    <div className="flex items-start gap-[0.6vw] h-full w-full">
                      <div className={cn(
                        "w-[1.5vw] h-[1.5vw] min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                        colorClasses.split(' ')[0]
                      )}>
                        <Icon className="w-[0.8vw] h-[0.8vw] min-w-[10px] min-h-[10px] text-white" />
                      </div>
                      <div className="flex-1 flex flex-col h-full">
                        <h4 className="text-[clamp(0.7rem,0.85vw,0.85rem)] font-semibold text-gray-800 mb-1 flex-shrink-0">
                          {card.title}
                        </h4>
                        <p className="text-[clamp(0.55rem,0.65vw,0.65rem)] text-gray-600 leading-tight flex-1 overflow-hidden">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDataSlide;
