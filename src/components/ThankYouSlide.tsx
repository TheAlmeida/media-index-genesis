
import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { ThumbsUp, GraduationCap, Building, Users, Heart } from 'lucide-react';

interface ThankYouSlideProps {
  isActive: boolean;
}

const ThankYouSlide: React.FC<ThankYouSlideProps> = ({ isActive }) => {
  const acknowledgments = [
    {
      icon: GraduationCap,
      title: "Academic Supervisor",
      name: "Daniel Miranda",
      description: ""
    },
    {
      icon: Building,
      title: "Company Supervisors", 
      name: "Ruben Dias & Nuno Dias",
      description: ""
    },
    {
      icon: Users,
      title: "Company Coworkers",
      name: "Sérgio Martins & Luís Silva", 
      description: ""
    },
    {
      icon: Heart,
      title: "Family",
      name: "",
      description: "For support & encouragement"
    }
  ];

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br from-purple-900 to-purple-600 p-8 flex flex-col items-center justify-center text-white ${isActive ? 'animate-fade-in' : ''}`}>
      {/* Header Section */}
      <div className="text-center mb-12">
        {/* Central Icon */}
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
          <ThumbsUp className="w-12 h-12 text-purple-600" />
        </div>
        
        {/* Main Title */}
        <h1 className="text-6xl font-bold text-white mb-6">
          Thank You
        </h1>
        
        {/* Horizontal Separator */}
        <Separator className="bg-white/30 w-32 mx-auto mb-8" />
      </div>

      {/* Project Title Section */}
      <div className="text-center mb-16">
        <Badge className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 text-lg font-medium mb-6 rounded-full border border-white/30">
          Audio Fingerprinting Analysis & Benchmarking
        </Badge>
        
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          For your attention and interest in this comprehensive analysis of audio fingerprinting algorithms
        </p>
      </div>

      {/* Acknowledgments Section */}
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-white" />
            <h2 className="text-3xl font-bold text-white">Special Thanks</h2>
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Four Recognition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {acknowledgments.map((ack, index) => {
            const IconComponent = ack.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-white">
                    {ack.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  {ack.name && (
                    <p className="text-white/90 font-medium mb-2">
                      {ack.name}
                    </p>
                  )}
                  {ack.description && (
                    <p className="text-white/80 text-sm italic">
                      {ack.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThankYouSlide;
