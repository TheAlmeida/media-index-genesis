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
      subtitles: ["Project Overview", "Objectives & Goals", "Timeline & Scope"]
    },
    {
      icon: Shield,
      title: "Host Company & State of Art",
      color: "blue",
      borderColor: "border-t-blue-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      subtitles: ["Mediaprobe Background", "Industry Analysis", "Current Technologies"]
    },
    {
      icon: File,
      title: "Achieved Algorithms",
      color: "purple",
      borderColor: "border-t-purple-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      subtitles: ["Audio Fingerprinting", "Pattern Recognition", "Implementation Details"]
    },
    {
      icon: Settings,
      title: "Evaluation Methodologies",
      color: "green",
      borderColor: "border-t-green-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      subtitles: ["Testing Framework", "Performance Metrics", "Validation Process"]
    },
    {
      icon: ChartBar,
      title: "Experimental Results",
      color: "yellow",
      borderColor: "border-t-yellow-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      subtitles: ["Accuracy Analysis", "Performance Data", "Comparative Studies"]
    },
    {
      icon: Target,
      title: "Challenges & Solutions",
      color: "red",
      borderColor: "border-t-red-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      subtitles: ["Technical Obstacles", "Problem Resolution", "Lessons Learned"]
    },
    {
      icon: Clock,
      title: "Future Work",
      color: "orange",
      borderColor: "border-t-orange-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      subtitles: ["Enhancement Plans", "Scalability Goals", "Next Development Phase"]
    },
    {
      icon: Check,
      title: "Conclusions",
      color: "teal",
      borderColor: "border-t-teal-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      subtitles: ["Key Achievements", "Impact Assessment", "Final Remarks"]
    }
  ];

  return (
    <div className={cn(
      "h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col",
      className
    )}>
      {/* Header Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
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
        <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6 mb-8 sm:mb-12 lg:mb-16">
          <div className={cn(
            "transition-all duration-700 transform",
            animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          )}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
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
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 h-full">
          {agendaItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={cn(
                  "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform border-t-4",
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
                <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className={cn(
                      "w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center",
                      item.bgColor
                    )}>
                      <IconComponent className={cn("w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7", item.iconColor)} />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 flex-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Content Subtitles */}
                  <div className="space-y-2 sm:space-y-3 flex-1">
                    {item.subtitles.map((subtitle, subIndex) => (
                      <div
                        key={subIndex}
                        className={cn(
                          "flex items-center space-x-2 sm:space-x-3 transition-all duration-300",
                          animationStep >= index + 1 ? "opacity-100" : "opacity-0"
                        )}
                        style={{ 
                          transitionDelay: `${(index * 100) + (subIndex * 50) + 200}ms`,
                        }}
                      >
                        <div className={cn(
                          "w-2 h-2 rounded-full",
                          item.iconColor.replace('text-', 'bg-')
                        )}></div>
                        <span className="text-sm sm:text-base lg:text-lg text-gray-600">
                          {subtitle}
                        </span>
                      </div>
                    ))}
                  </div>
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
