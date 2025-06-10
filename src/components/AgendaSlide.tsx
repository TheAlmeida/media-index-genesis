
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

      {/* Horizontal Zigzag Timeline */}
      <div className="flex-1 px-[2vw] pb-[2vh] relative overflow-x-auto">
        <div className="relative min-w-max h-full px-[4vw]">
          {/* Horizontal connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
          
          <div className="flex items-center justify-between h-full min-w-[150vw]">
            {agendaItems.map((item, index) => {
              const Icon = item.icon;
              const isTop = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Step Container */}
                  <div className={cn(
                    "flex flex-col items-center transition-all duration-700 transform",
                    animationStep >= index + 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}>
                    {/* Text content above or below */}
                    <div className={cn(
                      "mb-[2vh] text-center",
                      isTop ? "order-1" : "order-3"
                    )}>
                      <div className="bg-white rounded-full p-[1vw] shadow-md border-2 border-gray-100 max-w-[12vw]">
                        <div className="flex items-center justify-center gap-[0.5vw] mb-[0.5vh]">
                          <span className={cn(
                            "inline-flex items-center justify-center rounded-full text-white font-bold",
                            "w-[1.5vw] h-[1.5vw] min-w-[20px] min-h-[20px] text-[clamp(0.6rem,0.8vw,0.8rem)]",
                            item.bgColor
                          )}>
                            {index + 1}
                          </span>
                        </div>
                        <h3 className="text-[clamp(0.7rem,0.9vw,0.9rem)] font-bold text-gray-800 leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Center circle */}
                    <div className={cn(
                      "relative z-10 order-2",
                      isTop ? "mt-[2vh]" : "mb-[2vh]"
                    )}>
                      <div className={cn(
                        "rounded-full border-4 border-white shadow-lg flex items-center justify-center",
                        "w-[3vw] h-[3vw] min-w-[50px] min-h-[50px]",
                        item.bgColor
                      )}>
                        <Icon className="w-[1.5vw] h-[1.5vw] min-w-[25px] min-h-[25px] text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Arrow to next step */}
                  {index < agendaItems.length - 1 && (
                    <div className={cn(
                      "absolute left-full top-1/2 transform -translate-y-1/2 ml-[1vw] transition-all duration-700",
                      animationStep >= index + 3 ? "opacity-100" : "opacity-0"
                    )}>
                      <ArrowRight className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px] text-gray-400" />
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
