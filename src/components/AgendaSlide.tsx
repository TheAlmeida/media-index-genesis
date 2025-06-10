
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

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col",
      className
    )}>
      {/* Header */}
      <div className="flex-shrink-0 pt-8 pb-6 px-6">
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

      {/* Cards Grid */}
      <div className="flex-1 px-6 pb-20 flex items-center justify-center min-h-0">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {agendaItems.map((item, index) => {
              const IconComponent = item.icon;
              const isVisible = animationStep >= index + 1;
              
              return (
                <div
                  key={index}
                  className={cn(
                    "transition-all duration-700 transform",
                    isVisible 
                      ? "translate-y-0 opacity-100 scale-100" 
                      : "translate-y-8 opacity-0 scale-90"
                  )}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Card */}
                  <div className={cn(
                    "bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 h-full",
                    "min-h-[200px] flex flex-col"
                  )}>
                    <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
                      {/* Step Number */}
                      <div className="mb-4">
                        <span className={cn(
                          "inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white",
                          item.bgColor
                        )}>
                          {index + 1}
                        </span>
                      </div>
                      
                      {/* Icon Circle */}
                      <div className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                        item.bgColor
                      )}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-gray-800 font-bold text-lg leading-tight">
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
        </div>
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
