
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
      title: "Orientador Académico",
      name: "Daniel Miranda",
      description: ""
    },
    {
      icon: Building,
      title: "Orientadores da Empresa", 
      name: "Rúben Dias & Nuno Dias",
      description: ""
    },
    {
      icon: Users,
      title: "Equipa Mediaprobe",
      name: "Todos os colaboradores", 
      description: ""
    },
    {
      icon: Heart,
      title: "Família e Amigos",
      name: "",
      description: "Pelo apoio e encorajamento"
    }
  ];

  return (
    <div className={`min-h-screen w-full relative overflow-hidden p-8 flex flex-col items-center justify-center text-white ${isActive ? 'animate-fade-in' : ''}`}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/30 via-transparent to-cyan-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-teal-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-300/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-cyan-400/10 rounded-full blur-md animate-pulse delay-700"></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Central Icon */}
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <ThumbsUp className="w-12 h-12 text-white" />
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Obrigado
          </h1>
          
          {/* Horizontal Separator */}
          <Separator className="bg-white/40 w-32 mx-auto mb-8" />
        </div>

        {/* Project Title Section */}
        <div className="text-center mb-16">
          <Badge className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 text-lg font-medium mb-6 rounded-full border border-white/30 backdrop-blur-sm shadow-lg">
            Media Indexing
          </Badge>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Pela vossa atenção e interesse nesta análise abrangente de algoritmos de audio fingerprinting
          </p>
        </div>

        {/* Acknowledgments Section */}
        <div className="w-full max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-white drop-shadow-md" />
              <h2 className="text-3xl font-bold text-white drop-shadow-lg">Agradecimentos Especiais</h2>
              <Users className="w-8 h-8 text-white drop-shadow-md" />
            </div>
          </div>

          {/* Four Recognition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {acknowledgments.map((ack, index) => {
              const IconComponent = ack.icon;
              return (
                <Card key={index} className="bg-white/15 backdrop-blur-md border-white/30 text-white hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-white drop-shadow-md">
                      {ack.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    {ack.name && (
                      <p className="text-white/95 font-medium mb-2 drop-shadow-sm">
                        {ack.name}
                      </p>
                    )}
                    {ack.description && (
                      <p className="text-white/85 text-sm italic drop-shadow-sm">
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
    </div>
  );
};

export default ThankYouSlide;
