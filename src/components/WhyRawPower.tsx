import { useEffect, useState } from 'react';

const features = [
  {
    icon: "🧬",
    title: "Science-Based",
    description: "Every program is built on proven training principles and peer-reviewed research, not internet trends."
  },
  {
    icon: "📋",
    title: "Structured Plans",
    description: "No guesswork. Every workout, every set, every rep is planned and progressed systematically."
  },
  {
    icon: "⚡",
    title: "Instant Access",
    description: "Download immediately after purchase. Start training today, not tomorrow."
  },
  {
    icon: "🎯",
    title: "Proven Results",
    description: "Thousands of lifters have achieved personal records following these exact protocols."
  }
];

const WhyRawPower = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    features.forEach((_, index) => {
      setTimeout(() => {
        setVisibleFeatures(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section id="results" className="py-20 bg-background relative fade-in-section">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 tracking-tight">
            WHY CHOOSE RAW POWER
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Professional training systems designed by elite coaches for serious athletes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-300 ${
                visibleFeatures.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto border border-border flex items-center justify-center group-hover:border-foreground transition-all duration-200">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-medium text-foreground mb-4 group-hover:text-foreground transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="text-center">
          <div className="inline-block border-2 border-foreground p-8 max-w-3xl">
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 tracking-wide">
              ELITE PROGRAMS. ELITE RESULTS.
            </h3>
            <p className="text-muted-foreground text-lg font-light">
              Stop wasting time with cookie-cutter programs. 
              Get the same training systems used by competitive powerlifters and bodybuilders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRawPower;
