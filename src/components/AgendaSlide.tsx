
import React, { useState, useEffect } from 'react';
import { User, Shield, File, Settings, ChartBar, Target, Clock, Check, Database, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AgendaSlideProps {
  isActive?: boolean;
  className?: string;
}

const AgendaSlide: React.FC<AgendaSlideProps> = ({ isActive = true, className }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationStep(0);
      
      const timeouts = [
        setTimeout(() => setAnimationStep(1), 200),
        setTimeout(() => setAnimationStep(2), 400),
        setTimeout(() => setAnimationStep(3), 600),
        setTimeout(() => setAnimationStep(4), 800),
        setTimeout(() => setAnimationStep(5), 1000),
        setTimeout(() => setAnimationStep(6), 1200),
        setTimeout(() => setAnimationStep(7), 1400),
        setTimeout(() => setAnimationStep(8), 1600),
        setTimeout(() => setAnimationStep(9), 1800),
      ];

      return () => timeouts.forEach(clearTimeout);
    } else {
      setAnimationStep(0);
    }
  }, [isActive]);

  const agendaItems = [
    {
      icon: User,
      title: "Internship Context",
      bgColor: "bg-blue-500",
    },
    {
      icon: Shield,
      title: "Host Company & State of Art",
      bgColor: "bg-indigo-500",
    },
    {
      icon: File,
      title: "Achieved Algorithms",
      bgColor: "bg-purple-500",
    },
    {
      icon: Database,
      title: "Datasets",
      bgColor: "bg-teal-500",
    },
    {
      icon: Settings,
      title: "Evaluation Methodologies",
      bgColor: "bg-green-500",
    },
    {
      icon: ChartBar,
      title: "Experimental Results",
      bgColor: "bg-yellow-500",
    },
    {
      icon: Target,
      title: "Challenges & Solutions",
      bgColor: "bg-red-500",
    },
    {
      icon: Clock,
      title: "Future Work",
      bgColor: "bg-orange-500",
    },
    {
      icon: Check,
      title: "Conclusions",
      bgColor: "bg-pink-500",
    }
  ];

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col",
      className
    )}>
      {/* Header */}
      <div className="flex-shrink-0 pt-[2vh] pb-[2vh] px-[2vw]">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="text-[clamp(2rem,4vw,4rem)] font-bold text-gray-800 mb-[0.5vh]">
            Presentation Timeline
          </h1>
          <p className="text-[clamp(0.9rem,1.5vw,1.5rem)] text-gray-600 font-light">
            Journey through the audio fingerprinting analysis
          </p>
        </div>
      </div>

      {/* Horizontal Timeline - Fixed Width to Fit All */}
      <div className="flex-1 px-[2vw] pb-[2vh] relative">
        <div className="relative h-full w-full flex items-center justify-center">
          <div className="flex items-center justify-between w-full max-w-[95vw] gap-2">
            {agendaItems.map((item, index) => {
              const Icon = item.icon;
              const isAbove = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col items-center flex-1">
                  {/* Bubble Container */}
                  <div className={cn(
                    "relative flex flex-col items-center transition-all duration-700 transform",
                    animationStep >= index + 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                    isAbove ? "justify-start" : "justify-end flex-col-reverse"
                  )} style={{
                    animation: `float 8s ease-in-out infinite`,
                    animationDelay: `${index * 0.8}s`
                  }}>
                    
                    {/* Main Bubble - Fixed Size */}
                    <div className={cn(
                      "relative w-24 h-24 rounded-full flex flex-col items-center justify-center text-white shadow-lg border-4 border-white",
                      item.bgColor,
                      isAbove ? "mb-4" : "mt-4"
                    )}>
                      {/* Number Badge */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="text-xs font-bold text-gray-800">{index + 1}</span>
                      </div>
                      
                      {/* Icon */}
                      <Icon className="w-6 h-6 mb-1" />
                      
                      {/* Title */}
                      <div className="text-center px-1">
                        <h3 className="text-[10px] font-semibold leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Curved Zigzag Arrow - Connecting to actual bubbles */}
                  {index < agendaItems.length - 1 && (
                    <div className={cn(
                      "absolute left-[calc(100%-12px)] top-1/2 transform -translate-y-1/2 z-10 transition-all duration-700",
                      animationStep >= index + 3 ? "opacity-100" : "opacity-0"
                    )}>
                      <svg 
                        width="24" 
                        height="40" 
                        viewBox="0 0 24 40" 
                        className="text-gray-400"
                      >
                        <path
                          d={isAbove ? "M0,20 Q8,8 16,20 Q20,28 24,20" : "M0,20 Q8,32 16,20 Q20,12 24,20"}
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          markerEnd="url(#arrowhead)"
                        />
                        <defs>
                          <marker
                            id="arrowhead"
                            markerWidth="8"
                            markerHeight="6"
                            refX="7"
                            refY="3"
                            orient="auto"
                          >
                            <polygon
                              points="0 0, 8 3, 0 6"
                              fill="currentColor"
                            />
                          </marker>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS Animation for slower floating effect */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
};

export default AgendaSlide;
