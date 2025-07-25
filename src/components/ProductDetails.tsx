
import { useEffect, useState } from 'react';

interface ProductDetailsProps {
  selectedProduct: string | null;
}

const productContent = {
  dup: {
    title: 'DUP Program for Powerbuilding',
    subtitle: 'The Science of Strength & Size',
    preview: [
      'Week 1-2: Foundation Phase - Neural Adaptation',
      'Week 3-4: Strength Phase - Heavy Loading',
      'Week 5-6: Hypertrophy Phase - Volume Focus',
      'Week 7-8: Peak Phase - Competition Prep',
      'Nutrition Guidelines for Each Phase',
      'Recovery Protocols & Sleep Optimization'
    ],
    details: 'Daily Undulating Periodization (DUP) manipulates training variables within each week to maximize both strength and muscle growth. This program cycles through different rep ranges and intensities to prevent plateaus and ensure continuous progress.'
  },
  deadlift: {
    title: 'The Supreme Deadlift Program',
    subtitle: 'Master the King of All Lifts',
    preview: [
      'Week 1: Technique Refinement & Base Building',
      'Week 2-3: Strength Development Phase',
      'Week 4: Accessory Integration & Weak Point Training',
      'Week 5: Peak Strength & Testing Preparation',
      'Week 6: Competition Peak & New PR Testing',
      'Advanced Variation Programming'
    ],
    details: 'This specialized program targets every aspect of deadlift performance through scientifically-backed progression schemes, advanced exercise selection, and strategic periodization designed for intermediate to advanced lifters ready to break through plateaus.'
  }
};

const ProductDetails = ({ selectedProduct }: ProductDetailsProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setIsVisible(true);
    }
  }, [selectedProduct]);

  if (!selectedProduct || !productContent[selectedProduct as keyof typeof productContent]) {
    return null;
  }

  const product = productContent[selectedProduct as keyof typeof productContent];

  return (
    <section className={`py-20 bg-background transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mockup Section */}
          <div className="lg:sticky lg:top-20">
            <div className="relative">
              {/* Clean Document Mockup */}
              <div className="relative w-full max-w-sm mx-auto">
                <div className="bg-background border-2 border-foreground p-8 shadow-lg">
                  <div className="bg-background p-6">
                    <h3 className="font-display text-xl text-foreground mb-4 tracking-wide">{product.title}</h3>
                    <div className="space-y-3">
                      <div className="h-px bg-foreground w-3/4"></div>
                      <div className="h-px bg-muted-foreground w-full"></div>
                      <div className="h-px bg-muted-foreground w-5/6"></div>
                      <div className="h-px bg-muted-foreground w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Format Badge */}
              <div className="absolute -top-4 -right-4 bg-foreground text-background px-4 py-2 font-medium text-sm uppercase tracking-wide">
                PDF
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
                {product.title}
              </h2>
              <p className="text-lg text-foreground font-medium mb-6">{product.subtitle}</p>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">{product.details}</p>
            </div>

            {/* Program Breakdown */}
            <div>
              <h3 className="font-display text-2xl text-foreground mb-6 tracking-wide">PROGRAM OUTLINE</h3>
              <div className="space-y-4">
                {product.preview.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border-l border-foreground hover:bg-muted/50 transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 border border-foreground text-foreground font-medium flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <span className="text-foreground font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border p-6">
                <h4 className="font-medium text-foreground mb-3">Instant Access</h4>
                <p className="text-muted-foreground text-sm font-light">Download immediately after purchase. No waiting, no shipping delays.</p>
              </div>
              <div className="border border-border p-6">
                <h4 className="font-medium text-foreground mb-3">Mobile Optimized</h4>
                <p className="text-muted-foreground text-sm font-light">Perfectly formatted for phones and tablets. Train anywhere.</p>
              </div>
              <div className="border border-border p-6">
                <h4 className="font-medium text-foreground mb-3">Lifetime Access</h4>
                <p className="text-muted-foreground text-sm font-light">Download once, keep forever. No subscriptions or recurring fees.</p>
              </div>
              <div className="border border-border p-6">
                <h4 className="font-medium text-foreground mb-3">Print Ready</h4>
                <p className="text-muted-foreground text-sm font-light">High-quality PDF perfect for printing or digital viewing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
