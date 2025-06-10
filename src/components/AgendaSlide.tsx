
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

      {/* Horizontal Timeline */}
      <div className="flex-1 px-[2vw] pb-[2vh] relative overflow-x-auto">
        <div className="relative min-w-max h-full px-[4vw]">
          <div className="flex items-center justify-between h-full min-w-[200vw]">
            {agendaItems.map((item, index) => {
              const Icon = item.icon;
              const isAbove = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Bubble Container */}
                  <div className={cn(
                    "relative flex flex-col items-center transition-all duration-700 transform",
                    animationStep >= index + 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                    isAbove ? "justify-start" : "justify-end flex-col-reverse",
                    // Floating animation using Tailwind's bounce with custom delays
                    "animate-bounce"
                  )} style={{
                    animationDelay: `${index * 0.3}s`,
                    animationDuration: '4s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'ease-in-out'
                  }}>
                    
                    {/* Main Bubble */}
                    <div className={cn(
                      "relative w-32 h-32 rounded-full flex flex-col items-center justify-center text-white shadow-lg border-4 border-white",
                      item.bgColor,
                      isAbove ? "mb-8" : "mt-8"
                    )}>
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-gray-800">{index + 1}</span>
                      </div>
                      
                      {/* Icon */}
                      <Icon className="w-8 h-8 mb-2" />
                      
                      {/* Title */}
                      <div className="text-center px-2">
                        <h3 className="text-xs font-semibold leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Curved Zigzag Arrow */}
                  {index < agendaItems.length - 1 && (
                    <div className={cn(
                      "absolute left-full top-1/2 transform -translate-y-1/2 ml-4 transition-all duration-700",
                      animationStep >= index + 3 ? "opacity-100" : "opacity-0"
                    )}>
                      <svg 
                        width="60" 
                        height="40" 
                        viewBox="0 0 60 40" 
                        className="text-gray-400"
                      >
                        <path
                          d={isAbove ? "M0,20 Q15,5 30,20 Q45,35 60,20" : "M0,20 Q15,35 30,20 Q45,5 60,20"}
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          markerEnd="url(#arrowhead)"
                        />
                        <defs>
                          <marker
                            id="arrowhead"
                            markerWidth="10"
                            markerHeight="7"
                            refX="9"
                            refY="3.5"
                            orient="auto"
                          >
                            <polygon
                              points="0 0, 10 3.5, 0 7"
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
    </div>
  );
};

export default AgendaSlide;
