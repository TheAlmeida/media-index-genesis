
import React, { useState, useEffect } from 'react';
import PresentationSlide from '../components/PresentationSlide';
import AgendaSlide from '../components/AgendaSlide';
import InternshipContextSlide from '../components/InternshipContextSlide';
import AudioFingerprintingSlide from '../components/AudioFingerprintingSlide';
import AlgorithmAnalysisSlide from '../components/AlgorithmAnalysisSlide';
import ResearchDataSlide from '../components/ResearchDataSlide';
import EvaluationMethodologySlide from '../components/EvaluationMethodologySlide';
import EvaluationResultsSlide from '../components/EvaluationResultsSlide';
import ChallengesSolutionsSlide from '../components/ChallengesSolutionsSlide';
import FutureWorkSlide from '../components/FutureWorkSlide';
import ConclusionsSlide from '../components/ConclusionsSlide';
import ThankYouSlide from '../components/ThankYouSlide';
import { Button } from '../components/ui/button';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    { component: PresentationSlide, title: "Title Slide" },
    { component: AgendaSlide, title: "Presentation Agenda" },
    { component: InternshipContextSlide, title: "Internship Context" },
    { component: AudioFingerprintingSlide, title: "Audio Fingerprinting Pipeline" },
    { component: AlgorithmAnalysisSlide, title: "Algorithm Analysis" },
    { component: ResearchDataSlide, title: "Research Data" },
    { component: EvaluationMethodologySlide, title: "Evaluation Methodology" },
    { component: EvaluationResultsSlide, title: "Experimental Results" },
    { component: ChallengesSolutionsSlide, title: "Challenges & Solutions" },
    { component: FutureWorkSlide, title: "Future Work" },
    { component: ConclusionsSlide, title: "Conclusions" },
    { component: ThankYouSlide, title: "Thank You" }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev - 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-slate-50">
      {/* Slides Container */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          const offset = (index - currentSlide) * 100;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-out ${
                isTransitioning ? 'transition-duration-300' : ''
              }`}
              style={{
                transform: `translateX(${offset}%)`,
              }}
            >
              <SlideComponent isActive={index === currentSlide} />
            </div>
          );
        })}
      </div>
      
      {/* Simplified Navigation Bar */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/50 px-8 py-4">
          <div className="flex items-center space-x-6">
            {/* Previous Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0 || isTransitioning}
              className="h-11 w-11 p-0 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 border border-slate-200 shadow-sm transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Slide Counter */}
            <div className="flex items-center space-x-3">
              <span className="text-slate-800 font-semibold text-lg tracking-wide">
                {currentSlide + 1}
              </span>
              <div className="w-px h-6 bg-slate-300"></div>
              <span className="text-slate-500 font-medium text-lg">
                {slides.length}
              </span>
            </div>
            
            {/* Next Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1 || isTransitioning}
              className="h-11 w-11 p-0 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 border border-slate-200 shadow-sm transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="fixed top-6 left-6 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-slate-200/50 px-4 py-3 flex items-center space-x-2">
          <Keyboard className="w-4 h-4 text-slate-600" />
          <span className="text-sm font-medium text-slate-700">
            Use ← → arrow keys to navigate
          </span>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-6 right-6 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-slate-200/50 px-4 py-3">
          <div className="flex items-center space-x-3">
            <div className="text-sm font-medium text-slate-700">Progress</div>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
            <div className="text-sm font-semibold text-slate-800">
              {Math.round(((currentSlide + 1) / slides.length) * 100)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
