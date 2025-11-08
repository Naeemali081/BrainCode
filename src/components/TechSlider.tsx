import React from 'react';
import { usePerformance } from '../hooks/usePerformance';

interface TechStack {
  name: string;
  logo: string;
  bgColor: string;
  textColor: string;
  glowColor: string;
}

const techStacks: TechStack[] = [
  { 
    name: 'Vue.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-white',
    glowColor: 'hover:shadow-emerald-500/20'
  },
  { 
    name: 'Nuxt.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
    bgColor: 'bg-green-500/10',
    textColor: 'text-white',
    glowColor: 'hover:shadow-green-500/20'
  },
  { 
    name: 'React.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    bgColor: 'bg-cyan-500/10',
    textColor: 'text-white',
    glowColor: 'hover:shadow-cyan-500/20'
  },
  { 
    name: 'Next.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    bgColor: 'bg-slate-600/10',
    textColor: 'text-white',
    glowColor: 'hover:shadow-slate-500/20'
  },
  { 
    name: 'Node.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    bgColor: 'bg-lime-500/10',
    textColor: 'text-white',
    glowColor: 'hover:shadow-lime-500/20'
  },
  { 
    name: 'Laravel', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    bgColor: 'bg-red-500/10',
    textColor: 'text-white',
    glowColor: 'hover:shadow-red-500/20'
  },
  { 
    name: 'DevOps', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-white',
    glowColor: 'hover:shadow-blue-500/20'
  },
  { 
    name: 'React Native', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    bgColor: 'bg-sky-500/10',
    textColor: 'text-white',
    glowColor: 'hover:shadow-sky-500/20'
  },
  { 
    name: 'Flutter', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    bgColor: 'bg-indigo-500/10',
    textColor: 'text-white',
    glowColor: 'hover:shadow-indigo-500/20'
  },
  { 
    name: 'Android', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    bgColor: 'bg-green-600/10',
    textColor: 'text-white',
    glowColor: 'hover:shadow-green-600/20'
  },
  { 
    name: 'iOS', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
    bgColor: 'bg-gray-500/10',
    textColor: 'text-white',
    glowColor: 'hover:shadow-gray-500/20'
  },
];

const TechCard: React.FC<{ tech: TechStack; enableAnimations: boolean }> = ({ tech, enableAnimations }) => (
  <div className={`group relative flex items-center gap-3 px-5 py-3 ${tech.bgColor} backdrop-blur-sm border border-slate-700/50 rounded-xl whitespace-nowrap mx-2 ${enableAnimations ? `hover:scale-105 ${tech.glowColor} hover:shadow-xl transition-all duration-300 ease-out` : ''}`}>
    {/* Logo */}
    <div className="w-6 h-6 flex-shrink-0">
      <img 
        src={tech.logo} 
        alt={tech.name}
        className={`w-full h-full object-contain ${enableAnimations ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}
        onError={(e) => {
          // Fallback to a generic icon if logo fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'block';
        }}
      />
      <span className="hidden text-lg">⚡</span>
    </div>
    
    {/* Tech name */}
    <span className={`${tech.textColor} font-medium text-sm ${enableAnimations ? 'group-hover:text-blue-200 transition-colors duration-300' : ''}`}>
      {tech.name}
    </span>
  </div>
);

const SliderRow: React.FC<{ 
  techs: TechStack[]; 
  direction: 'left' | 'right';
  speed?: number;
  enableAnimations: boolean;
}> = ({ techs, direction, speed = 25, enableAnimations }) => {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  
  return (
    <div className="relative overflow-hidden py-2">
      <div className={`flex ${enableAnimations ? animationClass : ''}`} style={{ animationDuration: `${speed}s` }}>
        {/* First set of items */}
        {techs.map((tech, index) => (
          <TechCard key={`first-${index}`} tech={tech} enableAnimations={enableAnimations} />
        ))}
        {/* Duplicate set for seamless loop */}
        {techs.map((tech, index) => (
          <TechCard key={`second-${index}`} tech={tech} enableAnimations={enableAnimations} />
        ))}
      </div>
    </div>
  );
};

export const TechSlider: React.FC = () => {
  const { isLowEndDevice, reducedMotion, isMobile } = usePerformance();
  const enableAnimations = !isLowEndDevice && !reducedMotion;
  const enableBackgroundAnimations = enableAnimations && !isMobile;
  
  // Split tech stacks into two rows
  const firstRow = techStacks.slice(0, 6);
  const secondRow = techStacks.slice(6);

  return (
    <section id="technologies" className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements - only on high-end devices */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      {enableBackgroundAnimations && (
        <>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </>
      )}
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6 ${enableAnimations ? 'animate-gradient' : ''}`}>
              Top-Rated Solutions Stack
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-slate-300 text-xl max-w-4xl mx-auto mt-8 leading-relaxed">
            Using the most up-to-date and current technology, we create effective solutions for businesses ranging from startups to Fortune 1000.
          </p>
        </div>

        {/* Moving Sliders */}
        <div className="space-y-8">
          {/* First row - moving right to left */}
          <SliderRow techs={firstRow} direction="left" speed={35} enableAnimations={enableAnimations} />
          
          {/* Second row - moving left to right */}
          <SliderRow techs={secondRow} direction="right" speed={30} enableAnimations={enableAnimations} />
        </div>
        
        {/* Bottom gradient line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
      </div>
    </section>
  );
};
