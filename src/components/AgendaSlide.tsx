
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
      // Reset and start animation when slide becomes active
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
      // Reset animation when slide becomes inactive
      setAnimationStep(0);
    }
  }, [isActive]);

  const agendaItems = [
    {
      icon: User,
      title: "Internship Context",
      color: "blue",
      borderColor: "border-t-blue-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Host Company & State of Art",
      color: "blue",
      borderColor: "border-t-blue-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: File,
      title: "Achieved Algorithms",
      color: "purple",
      borderColor: "border-t-purple-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Settings,
      title: "Evaluation Methodologies",
      color: "green",
      borderColor: "border-t-green-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: ChartBar,
      title: "Experimental Results",
      color: "yellow",
      borderColor: "border-t-yellow-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      icon: Target,
      title: "Challenges & Solutions",
      color: "red",
      borderColor: "border-t-red-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Clock,
      title: "Future Work",
      color: "orange",
      borderColor: "border-t-orange-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Check,
      title: "Conclusions",
      color: "teal",
      borderColor: "border-t-teal-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    }
  ];

  return (
    <div className={cn(
      "h-[100dvh] w-full bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col",
      className
    )}>
      {/* Header Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-12">
        {/* Navigation Button */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
          <div className={cn(
            "bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg transition-all duration-500",
            animationStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}>
            Report Overview
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-8 lg:mb-12">
          <div className={cn(
            "transition-all duration-700 transform",
            animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          )}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Presentation Agenda
            </h1>
          </div>
          
          <div className={cn(
            "transition-all duration-700 transform delay-200",
            animationStep >= 1 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
              A comprehensive overview of the audio fingerprinting analysis toolkit
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - 8 Panel Grid */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 h-full">
          {agendaItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={cn(
                  "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform border-t-4 hover:scale-105",
                  item.borderColor,
                  item.bgColor,
                  animationStep >= index + 1 
                    ? "translate-y-0 opacity-100 scale-100" 
                    : "translate-y-8 opacity-0 scale-95"
                )}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="p-3 sm:p-4 lg:p-6 h-full flex flex-col items-center justify-center text-center">
                  {/* Icon */}
                  <div className={cn(
                    "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mb-2 sm:mb-3 lg:mb-4",
                    item.bgColor
                  )}>
                    <IconComponent className={cn("w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6", item.iconColor)} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-gray-800 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AgendaSlide;
