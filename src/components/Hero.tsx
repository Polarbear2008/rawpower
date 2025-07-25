import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover brightness-75">
        <source src="/gym.mp4" type="video/mp4" />
      </video>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Brand Logo */}
        <div className="mb-16">
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl bg-gradient-to-br from-red-600 via-orange-400 to-yellow-300 text-transparent bg-clip-text tracking-tight mb-6 drop-shadow-lg">
            RAW<span className="block md:inline">POWER</span>
          </h1>
          <div className="w-24 h-px bg-foreground mx-auto"></div>
        </div>

        {/* Value Proposition */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-wide">
            Elite Training Programs
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Professional-grade training systems designed by world-class coaches. 
            Instant download. Lifetime access. Results guaranteed.
          </p>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-light text-white">10K+</div>
            <div className="text-sm text-gray-300">Downloads</div>
          </div>
          <div className="text-center border-x border-border">
            <div className="text-2xl md:text-3xl font-light text-white">4.9★</div>
            <div className="text-sm text-gray-300">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-light text-white">24/7</div>
            <div className="text-sm text-gray-300">Access</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={scrollToProducts}
            size="lg"
            className="bg-gradient-to-r from-red-600 to-yellow-400 text-background hover:brightness-110 font-medium text-lg px-12 py-4 uppercase tracking-wide transition-all duration-200"
          >
            Get Programs
          </Button>
          <Button 
            variant="outline" 
            onClick={scrollToProducts}
            size="lg"
            className="bg-black text-white hover:bg-black/90 font-medium text-lg px-12 py-4 uppercase tracking-wide transition-all duration-200"
          >
            Learn More
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-300 mx-auto cursor-pointer" onClick={scrollToProducts} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
