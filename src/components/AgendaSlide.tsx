
import React, { useState, useEffect } from 'react';
import { User, Shield, File, Settings, ChartBar, Target, Clock, Check, Database } from 'lucide-react';
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
      icon: Database,
      title: "Datasets",
      color: "teal",
      bgColor: "bg-teal-500",
      textColor: "text-teal-500",
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
      color: "pink",
      bgColor: "bg-pink-500",
      textColor: "text-pink-500",
    }
  ];

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col",
      className
    )}>
      {/* Header */}
      <div className="flex-shrink-0 pt-[2vh] pb-[1vh] px-[2vw]">
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

      {/* Cards Container */}
      <div className="flex-1 px-[2vw] pb-[2vh] flex items-center justify-center">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {agendaItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div key={index} className={cn(
                "flex-shrink-0 transition-all duration-700 transform",
                animationStep >= index + 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}>
                {/* Card */}
                <div className="relative">
                  {/* Number badge */}
                  <div className={cn(
                    "absolute -top-2 -right-2 z-10 rounded-full text-white font-bold flex items-center justify-center",
                    "w-8 h-8 text-sm",
                    item.bgColor
                  )}>
                    {index + 1}
                  </div>
                  
                  {/* Card content */}
                  <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 p-6 w-48 h-48 flex flex-col items-center justify-center text-center">
                    {/* Icon */}
                    <div className={cn(
                      "rounded-full flex items-center justify-center mb-4",
                      "w-16 h-16",
                      item.bgColor
                    )}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-sm font-bold text-gray-800 leading-tight">
                      {item.title}
                    </h3>
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
