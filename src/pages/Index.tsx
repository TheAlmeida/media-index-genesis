
import React, { useState } from 'react';
import PresentationSlide from '../components/PresentationSlide';
import AgendaSlide from '../components/AgendaSlide';
import { Button } from '../components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { component: PresentationSlide, title: "Title Slide" },
    { component: AgendaSlide, title: "Presentation Agenda" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen w-full relative">
      <CurrentSlideComponent isActive={true} />
      
      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="text-white hover:bg-white/20"
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
          disabled={currentSlide === slides.length - 1}
          className="text-white hover:bg-white/20"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
