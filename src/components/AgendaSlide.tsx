
import React, { useState, useEffect } from 'react';
import { User, Shield, File, Settings, ChartBar, Target, Clock, Check } from 'lucide-react';
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
      color: "blue",
      bgColor: "bg-blue-500",
      textColor: "text-blue-500",
    },
    {
      icon: Shield,
      title: "Host Company & State of Art",
      color: "indigo",
      bgColor: "bg-indigo-500",
      textColor: "text-indigo-500",
    },
    {
      icon: File,
      title: "Achieved Algorithms",
      color: "purple",
      bgColor: "bg-purple-500",
      textColor: "text-purple-500",
    },
    {
      icon: Settings,
      title: "Evaluation Methodologies",
      color: "green",
      bgColor: "bg-green-500",
      textColor: "text-green-500",
    },
    {
      icon: ChartBar,
      title: "Experimental Results",
      color: "yellow",
      bgColor: "bg-yellow-500",
      textColor: "text-yellow-500",
    },
    {
      icon: Target,
      title: "Challenges & Solutions",
      color: "red",
      bgColor: "bg-red-500",
      textColor: "text-red-500",
    },
    {
      icon: Clock,
      title: "Future Work",
      color: "orange",
      bgColor: "bg-orange-500",
      textColor: "text-orange-500",
    },
    {
      icon: Check,
      title: "Conclusions",
      color: "teal",
      bgColor: "bg-teal-500",
      textColor: "text-teal-500",
    }
  ];

  // Calculate positions for curved stair-step effect
  const getCardPosition = (index: number) => {
    const totalItems = agendaItems.length;
    const progress = index / (totalItems - 1);
    
    // Create a curved path from top-left to bottom-right
    const baseX = progress * 85; // 85% of viewport width
    const baseY = progress * 75; // 75% of viewport height
    
    // Add curve effect using sine wave
    const curveOffset = Math.sin(progress * Math.PI) * 10;
    
    const x = baseX + curveOffset;
    const y = baseY + Math.sin(progress * Math.PI * 0.5) * 5;
    
    return {
      left: `${5 + x}%`,
      top: `${15 + y}%`,
    };
  };

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden",
      className
    )}>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
            Presentation Timeline
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light">
            Journey through the audio fingerprinting analysis
          </p>
        </div>
      </div>

      {/* Timeline Cards */}
      <div className="absolute inset-0 w-full h-full">
        {agendaItems.map((item, index) => {
          const IconComponent = item.icon;
          const position = getCardPosition(index);
          const isVisible = animationStep >= index + 1;
          
          return (
            <div
              key={index}
              className={cn(
                "absolute transition-all duration-700 transform",
                isVisible 
                  ? "translate-y-0 opacity-100 scale-100" 
                  : "translate-y-8 opacity-0 scale-90"
              )}
              style={{
                ...position,
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Connection Line to Next Card */}
              {index < agendaItems.length - 1 && (
                <div
                  className={cn(
                    "absolute top-1/2 left-full w-16 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2 transition-all duration-500",
                    isVisible ? "opacity-60 scale-x-100" : "opacity-0 scale-x-0"
                  )}
                  style={{
                    transitionDelay: `${(index + 1) * 150}ms`,
                  }}
                />
              )}
              
              {/* Card */}
              <div className={cn(
                "bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200",
                "w-48 md:w-56 lg:w-64"
              )}>
                <div className="p-6">
                  {/* Icon Circle */}
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto",
                    item.bgColor
                  )}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-center mb-3">
                    <span className={cn(
                      "inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white",
                      item.bgColor
                    )}>
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-center text-gray-800 font-bold text-lg leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                {/* Bottom accent */}
                <div className={cn("h-1 rounded-b-2xl", item.bgColor)} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className={cn(
          "bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg transition-all duration-700",
          animationStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <span className="text-sm font-medium text-gray-700">
            {Math.min(animationStep, agendaItems.length)} / {agendaItems.length} Topics
          </span>
        </div>
      </div>
    </div>
  );
};

export default AgendaSlide;
