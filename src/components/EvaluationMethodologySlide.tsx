
import React, { useState, useEffect } from 'react';
import { Target, Clock, Database, CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EvaluationMethodologySlideProps {
  isActive?: boolean;
  className?: string;
}

const EvaluationMethodologySlide: React.FC<EvaluationMethodologySlideProps> = ({ isActive = true, className }) => {
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
      ];

      return () => timeouts.forEach(clearTimeout);
    } else {
      setAnimationStep(0);
    }
  }, [isActive]);

  const methodologySteps = [
    {
      icon: Target,
      title: "Matching Quality",
      subtitle: "Precision & Recall Analysis",
      color: "bg-blue-600",
      description: "Comprehensive evaluation using the Audio Fingerprinting Benchmark Toolkit developed by Pexeso (2023)",
      metrics: [
        "Track level evaluation",
        "Segment level evaluation", 
        "Bounding Box evaluation",
        "Ground truth validation using source metadata"
      ]
    },
    {
      icon: Clock,
      title: "Execution Time",
      subtitle: "Performance Analysis",
      color: "bg-emerald-600",
      description: "Custom profiling system to measure algorithm performance across different operational phases",
      metrics: [
        "Reference indexing time measurement",
        "Query processing latency analysis",
        "Matching and retrieval performance",
        "Scalability assessment on standardized hardware"
      ]
    },
    {
      icon: Database,
      title: "Memory Efficiency",
      subtitle: "Storage Requirements",
      color: "bg-purple-600",
      description: "Comprehensive analysis of storage requirements and memory optimization strategies",
      metrics: [
        "Indexed database size analysis",
        "Estimated fingerprint size per second of audio",
        "Fingerprint compression efficiency"
      ]
    }
  ];

  return (
    <div className={cn(
      "h-[100dvh] w-[100dvw] bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden",
      className
    )}>
      {/* Header Section */}
      <div className="pt-[4vh] pb-[3vh] px-[4vw]">
        <div className={cn(
          "text-center transition-all duration-700 transform",
          animationStep >= 1 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        )}>
          <h1 className="text-[clamp(3rem,5vw,5rem)] font-bold text-slate-800 mb-4 leading-tight">
            Evaluation Framework
          </h1>
          <p className="text-[clamp(1.2rem,2vw,2rem)] text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Three-dimensional approach to comprehensive algorithm benchmarking and performance analysis
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 px-[4vw] pb-[4vh]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3vw] h-full max-w-7xl mx-auto">
          {methodologySteps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div 
                key={index}
                className={cn(
                  "bg-white rounded-2xl shadow-xl border border-slate-200 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl flex flex-col",
                  animationStep >= index + 2 ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
              >
                {/* Card Header */}
                <div className="p-8 border-b border-slate-100">
                  <div className="flex items-start gap-5">
                    <div className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0",
                      step.color
                    )}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-base text-slate-500 font-medium">
                        {step.subtitle}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-slate-600">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-slate-600 leading-relaxed mb-8 text-base">
                    {step.description}
                  </p>

                  {/* Methodology Points */}
                  <div className="space-y-4 flex-1">
                    <h4 className="text-base font-semibold text-slate-700 mb-4 flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                      Key Evaluation Metrics
                    </h4>
                    {step.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <p className="text-base text-slate-600 leading-relaxed">
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400 font-medium">
                        Metric {index + 1} of 3
                      </span>
                      <div className={cn(
                        "w-3 h-3 rounded-full",
                        step.color.replace('bg-', 'bg-').replace('-600', '-300')
                      )} />
                    </div>
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

export default EvaluationMethodologySlide;
