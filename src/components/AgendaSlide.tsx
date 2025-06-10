
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
      <div className="flex-shrink-0 pt-[3vh] pb-[2vh] px-[4vw]">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="font-bold text-gray-800 mb-[1vh]" style={{ fontSize: `${Math.max(24, Math.min(64, window.innerWidth * 0.04))}px` }}>
            Presentation Timeline
          </h1>
          <p className="text-gray-600 font-light" style={{ fontSize: `${Math.max(16, Math.min(32, window.innerWidth * 0.02))}px` }}>
            Journey through the audio fingerprinting analysis
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex-1 px-[2vw] pb-[2vh] flex items-center justify-center min-h-0">
        <div className="w-full max-w-[96vw] max-h-[80vh]">
          <div className="grid grid-cols-4 gap-[1.5vw] auto-rows-fr h-full">
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
                    "bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 h-full",
                    "flex flex-col"
                  )}
                  style={{
                    borderRadius: `${Math.max(8, Math.min(24, window.innerWidth * 0.015))}px`,
                    minHeight: `${Math.max(120, Math.min(200, window.innerHeight * 0.15))}px`
                  }}>
                    <div className="flex-1 flex flex-col items-center justify-center text-center" style={{ padding: `${Math.max(12, Math.min(32, window.innerWidth * 0.015))}px` }}>
                      {/* Step Number */}
                      <div className="mb-2">
                        <span className={cn(
                          "inline-flex items-center justify-center rounded-full font-bold text-white",
                          item.bgColor
                        )}
                        style={{
                          width: `${Math.max(24, Math.min(48, window.innerWidth * 0.025))}px`,
                          height: `${Math.max(24, Math.min(48, window.innerWidth * 0.025))}px`,
                          fontSize: `${Math.max(10, Math.min(20, window.innerWidth * 0.012))}px`
                        }}>
                          {index + 1}
                        </span>
                      </div>
                      
                      {/* Icon Circle */}
                      <div className={cn(
                        "rounded-full flex items-center justify-center mb-2",
                        item.bgColor
                      )}
                      style={{
                        width: `${Math.max(40, Math.min(80, window.innerWidth * 0.04))}px`,
                        height: `${Math.max(40, Math.min(80, window.innerWidth * 0.04))}px`
                      }}>
                        <IconComponent 
                          className="text-white" 
                          style={{
                            width: `${Math.max(20, Math.min(40, window.innerWidth * 0.02))}px`,
                            height: `${Math.max(20, Math.min(40, window.innerWidth * 0.02))}px`
                          }}
                        />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-gray-800 font-bold leading-tight text-center"
                        style={{ fontSize: `${Math.max(11, Math.min(18, window.innerWidth * 0.012))}px` }}>
                        {item.title}
                      </h3>
                    </div>
                    
                    {/* Bottom accent */}
                    <div className={cn("rounded-b-xl", item.bgColor)} 
                      style={{ height: `${Math.max(3, Math.min(8, window.innerHeight * 0.008))}px` }} 
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-[2vh] left-1/2 transform -translate-x-1/2 z-20">
        <div className={cn(
          "bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all duration-700",
          animationStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{
          padding: `${Math.max(8, Math.min(16, window.innerHeight * 0.01))}px ${Math.max(16, Math.min(32, window.innerWidth * 0.02))}px`
        }}>
          <span className="font-medium text-gray-700"
            style={{ fontSize: `${Math.max(12, Math.min(20, window.innerWidth * 0.012))}px` }}>
            {Math.min(animationStep, agendaItems.length)} / {agendaItems.length} Topics
          </span>
        </div>
      </div>
    </div>
  );
};

export default AgendaSlide;
