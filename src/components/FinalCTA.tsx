import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const FinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let {
          hours,
          minutes,
          seconds
        } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return {
          hours,
          minutes,
          seconds
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const handlePurchase = (type: string) => {
    console.log(`Purchasing ${type}`);
    // Stripe integration would go here
  };
  return <section className="py-20 bg-background relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 tracking-tight">
          START TODAY
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed font-light">
          Download the tools. Follow the system. Build the body you've always wanted.
        </p>

        {/* Limited Offer */}
        <div className="border-2 border-foreground p-6 mb-12 inline-block">
          <p className="text-foreground font-medium mb-4">LIMITED TIME: Next 100 downloads get instant bonus content</p>
          <div className="flex justify-center gap-4 text-center">
            <div className="border border-foreground px-4 py-2">
              <div className="text-2xl font-light text-foreground">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs text-muted-foreground">HOURS</div>
            </div>
            <div className="text-foreground text-2xl font-light">:</div>
            <div className="border border-foreground px-4 py-2">
              <div className="text-2xl font-light text-foreground">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs text-muted-foreground">MINS</div>
            </div>
            <div className="text-foreground text-2xl font-light">:</div>
            <div className="border border-foreground px-4 py-2">
              <div className="text-2xl font-light text-foreground">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs text-muted-foreground">SECS</div>
            </div>
          </div>
        </div>

        {/* Final Offer */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* DUP Program */}
          <div className="border border-border hover:border-foreground p-8 transition-all duration-200 group">
            <h3 className="font-display text-2xl text-foreground mb-4 tracking-wide">DUP PROGRAM</h3>
            <div className="text-3xl font-light text-foreground mb-4">$10</div>
            <p className="text-muted-foreground mb-6 font-light">8-week powerbuilding system</p>
            <Button onClick={() => handlePurchase('dup')} className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium py-3 uppercase tracking-wide transition-all duration-200">
              Download Now
            </Button>
          </div>

          {/* Bundle - Featured */}
          <div className="border-2 border-foreground p-8 relative group transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-6 py-2 font-medium uppercase text-sm">
              Best Value
            </div>
            <h3 className="font-display text-2xl text-foreground mb-4 tracking-wide">COMPLETE BUNDLE</h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl text-muted-foreground line-through font-light">$29.99</span>
              <span className="text-4xl font-light text-foreground">$25.99</span>
            </div>
            <p className="text-foreground font-medium mb-4">Save $4.98</p>
            <p className="text-muted-foreground mb-6 font-light">Both programs + bonuses</p>
            <Button onClick={() => handlePurchase('bundle')} className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium py-3 uppercase tracking-wide transition-all duration-200">
              Get Bundle Now
            </Button>
          </div>

          {/* Deadlift Program */}
          <div className="border border-border hover:border-foreground p-8 transition-all duration-200 group">
            <h3 className="font-display text-2xl text-foreground mb-4 tracking-wide">DEADLIFT PROGRAM</h3>
            <div className="text-3xl font-light text-foreground mb-4">$19.99</div>
            <p className="text-muted-foreground mb-6 font-light">6-week deadlift specialization</p>
            <Button onClick={() => handlePurchase('deadlift')} className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium py-3 uppercase tracking-wide transition-all duration-200">
              Download Now
            </Button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-12">
          <p className="text-muted-foreground mb-4 font-light">Secure payment with:</p>
          <div className="flex justify-center gap-8 text-muted-foreground">
            <div className="text-xl">💳</div>
            <div className="text-xl">🍎</div>
            <div className="text-xl">📱</div>
            <div className="text-xl">💰</div>
          </div>
          <p className="text-sm text-muted-foreground mt-2 font-light">Stripe • Apple Pay • Google Pay • PayPal</p>
        </div>

        {/* Final Motivational Statement */}
        <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6 max-w-3xl mx-auto">
          "Success is forged under heavy iron and relentless consistency."
        </h3>
        

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="text-green-500" size={20} />
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="text-green-500" size={20} />
            <span>Secure Checkout via Stripe</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="text-green-500" size={20} />
            <span>Trusted by 10,000+ Athletes</span>
          </div>
        </div>
        
      </div>
    </section>;
};
export default FinalCTA;