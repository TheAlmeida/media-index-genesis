
import React, { useState, useEffect } from 'react';
import { User, Shield, File, Settings, ChartBar, Target, Clock, Check, Database, ArrowDown } from 'lucide-react';
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

      {/* Zigzag Timeline */}
      <div className="flex-1 px-[2vw] pb-[2vh] relative">
        <div className="relative h-full">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
          
          {agendaItems.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;
            const rowIndex = Math.floor(index / 2);
            const topPosition = (index * 10) + 5; // Distribute evenly across height
            
            return (
              <div key={index} className="absolute w-full" style={{ top: `${topPosition}%` }}>
                {/* Step Container */}
                <div className={cn(
                  "flex items-center transition-all duration-700 transform",
                  isLeft ? "justify-start" : "justify-end",
                  animationStep >= index + 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}>
                  {/* Left side content */}
                  {isLeft && (
                    <div className="w-[45%] pr-[2vw] text-right">
                      <div className="bg-white rounded-lg p-[1vw] shadow-md border-l-4" style={{ borderLeftColor: item.bgColor.replace('bg-', '#') }}>
                        <div className="flex items-center justify-end gap-[0.5vw] mb-[0.5vh]">
                          <span className={cn(
                            "inline-flex items-center justify-center rounded-full text-white font-bold",
                            "w-[2vw] h-[2vw] min-w-[24px] min-h-[24px] text-[clamp(0.7rem,1vw,1rem)]",
                            item.bgColor
                          )}>
                            {index + 1}
                          </span>
                        </div>
                        <h3 className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-bold text-gray-800 leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* Center circle */}
                  <div className="relative z-10">
                    <div className={cn(
                      "rounded-full border-4 border-white shadow-lg flex items-center justify-center",
                      "w-[4vw] h-[4vw] min-w-[60px] min-h-[60px]",
                      item.bgColor
                    )}>
                      <Icon className="w-[2vw] h-[2vw] min-w-[30px] min-h-[30px] text-white" />
                    </div>
                  </div>

                  {/* Right side content */}
                  {!isLeft && (
                    <div className="w-[45%] pl-[2vw] text-left">
                      <div className="bg-white rounded-lg p-[1vw] shadow-md border-r-4" style={{ borderRightColor: item.bgColor.replace('bg-', '#') }}>
                        <div className="flex items-center gap-[0.5vw] mb-[0.5vh]">
                          <span className={cn(
                            "inline-flex items-center justify-center rounded-full text-white font-bold",
                            "w-[2vw] h-[2vw] min-w-[24px] min-h-[24px] text-[clamp(0.7rem,1vw,1rem)]",
                            item.bgColor
                          )}>
                            {index + 1}
                          </span>
                        </div>
                        <h3 className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-bold text-gray-800 leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>

                {/* Arrow to next step */}
                {index < agendaItems.length - 1 && (
                  <div className={cn(
                    "absolute left-1/2 transform -translate-x-1/2 mt-[1vh] transition-all duration-700",
                    animationStep >= index + 3 ? "opacity-100" : "opacity-0"
                  )}>
                    <ArrowDown className="w-[1.5vw] h-[1.5vw] min-w-[20px] min-h-[20px] text-gray-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AgendaSlide;
