
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
        setTimeout(() => setAnimationStep(10), 2000),
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
      <div className="flex-shrink-0 pt-8 pb-6 px-8">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Presentation Timeline
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Journey through the audio fingerprinting analysis
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex-1 px-8 pb-8">
        <div className="grid grid-cols-3 gap-6 h-full max-w-7xl mx-auto">
          {agendaItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={index} 
                className={cn(
                  "transition-all duration-700 transform",
                  animationStep >= index + 2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
                  {/* Step Number */}
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4",
                    item.bgColor
                  )}>
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                    item.bgColor
                  )}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-800 leading-tight">
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
