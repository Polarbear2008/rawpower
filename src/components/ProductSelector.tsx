import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  price: string;
  level: string;
  duration: string;
  pages: number;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 'dup',
    name: 'DUP Program for Powerbuilding',
    price: '$10',
    level: 'All Levels',
    duration: '8 Weeks',
    pages: 12,
    description: 'Complete strength and hypertrophy plan using Daily Undulating Periodization',
    features: [
      'Progressive overload protocols',
      'Nutrition guide included',
      'Recovery strategies',
      'Exercise variations',
      'Week-by-week progression'
    ]
  },
  {
    id: 'deadlift',
    name: 'The Supreme Deadlift Program',
    price: '$19.99',
    level: 'Intermediate+',
    duration: '6 Weeks',
    pages: 6,
    description: 'Advanced deadlift specialization with cutting-edge programming',
    features: [
      'Advanced periodization',
      'Deadlift variations',
      'Accessory protocols',
      'Technique refinement',
      'Strength testing phases'
    ]
  }
];

interface ProductSelectorProps {
  onProductSelect: (productId: string) => void;
}

const ProductSelector = ({ onProductSelect }: ProductSelectorProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const handlePurchase = (productId: string) => {
    console.log(`Purchasing ${productId}`);
    // Stripe integration would go here
  };

  const handleBundle = () => {
    console.log('Purchasing bundle');
    // Bundle purchase logic
  };

  return (
    <section id="products" className="py-20 bg-background fade-in-section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 tracking-tight">
            TRAINING PROGRAMS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Professional-grade training systems designed by world-class coaches. 
            Choose your path to exceptional results.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative border transition-all duration-200 cursor-pointer group ${
                hoveredProduct === product.id 
                  ? 'border-foreground shadow-lg' 
                  : 'border-border hover:border-foreground/50'
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => onProductSelect(product.id)}
            >
              {/* Product Header */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-2 tracking-wide">
                      {product.name}
                    </h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{product.level}</span>
                      <span>•</span>
                      <span>{product.duration}</span>
                      <span>•</span>
                      <span>{product.pages} Pages</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-light text-foreground">{product.price}</div>
                    <div className="text-sm text-muted-foreground">PDF Download</div>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6 font-light">{product.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-foreground/90">
                      <div className="w-1 h-1 bg-foreground mr-4"></div>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePurchase(product.id);
                  }}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium py-4 uppercase tracking-wide transition-all duration-200"
                >
                  Download Now - {product.price}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Offer */}
        <div className="text-center">
          <div className="inline-block border-2 border-foreground p-8">
            <h3 className="font-display text-3xl text-foreground mb-4 tracking-wide">
              COMPLETE BUNDLE
            </h3>
            <p className="text-muted-foreground mb-6 font-light">
              Get both programs and save <span className="text-foreground font-medium">$4.98</span>
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-2xl text-muted-foreground line-through font-light">$29.99</span>
              <span className="text-4xl font-light text-foreground">$25.99</span>
            </div>
            <Button
              onClick={handleBundle}
              className="bg-foreground text-background hover:bg-foreground/90 font-medium text-lg px-12 py-4 uppercase tracking-wide transition-all duration-200"
            >
              Get Bundle Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSelector;
