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
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Watermark } from '../components/ui/Watermark';

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
      }, 150);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev - 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 150);
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
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Watermarks in top right, stacked vertically */}
      <div className="watermark-stack">
        <Watermark type="escola" imgSrc="/escola.png" />
        <Watermark type="company" imgSrc="/company.png" />
      </div>
      {/* Slides Container */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          const offset = (index - currentSlide) * 100;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ${
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
      
      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0 || isTransitioning}
          className="text-white hover:bg-white/20 disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <span className="text-white text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </span>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1 || isTransitioning}
          className="text-white hover:bg-white/20 disabled:opacity-50"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Keyboard Navigation Hint - Only on slide 1 */}
      {currentSlide === 0 && (
        <div className="fixed top-4 left-4 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-xs z-50">
          Use ← → arrow keys to navigate
        </div>
      )}
    </div>
  );
};

export default Index;
