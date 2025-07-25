import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Marcus Rodriguez",
    program: "DUP Program",
    rating: 5,
    text: "Gained 15lbs on my squat in just 8 weeks. The periodization is brilliant - never felt overtrained but constantly progressing.",
    image: "💪",
    date: "2 weeks ago",
    verified: true
  },
  {
    id: 2,
    name: "Sarah Chen",
    program: "Supreme Deadlift",
    rating: 5,
    text: "Finally broke my 6-month plateau. Hit a 40lb PR on deadlift following this program exactly as written. Worth every penny.",
    image: "🔥",
    date: "1 month ago",
    verified: true
  },
  {
    id: 3,
    name: "Jake Thompson",
    program: "Bundle Purchase",
    rating: 5,
    text: "Both programs are pure gold. The detail and progression schemes are next level. Best investment I've made for my training.",
    image: "⚡",
    date: "3 weeks ago",
    verified: true
  },
  {
    id: 4,
    name: "Elena Vasquez",
    program: "DUP Program",
    rating: 5,
    text: "Love how the nutrition guide complements the training. Lost 8lbs while gaining strength. Exactly what I needed.",
    image: "🎯",
    date: "1 week ago",
    verified: true
  },
  {
    id: 5,
    name: "David Kim",
    program: "Supreme Deadlift",
    rating: 5,
    text: "The accessory work fixed my lockout weakness. Technique cues are spot on. Went from 405 to 455 in 6 weeks.",
    image: "🚀",
    date: "4 days ago",
    verified: true
  },
  {
    id: 6,
    name: "Ashley Brooks",
    program: "Bundle Purchase",
    rating: 5,
    text: "Professional quality programs. Clear instructions, smart progressions. These guys know what they're doing.",
    image: "💯",
    date: "2 months ago",
    verified: true
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const currentTestimonials = testimonials.slice(
    currentSlide * testimonialsPerSlide,
    (currentSlide + 1) * testimonialsPerSlide
  );

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden fade-in-section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 tracking-tight">
            CLIENT RESULTS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Real transformations from athletes who trusted our proven systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-border p-6 hover:border-foreground transition-all duration-200 group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-foreground font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground font-light">{testimonial.program}</p>
                </div>
                {testimonial.verified && (
                  <div className="border border-foreground text-foreground text-xs px-2 py-1 font-medium">
                    VERIFIED
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-foreground text-sm">★</div>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/90 mb-4 leading-relaxed font-light">
                "{testimonial.text}"
              </p>

              {/* Date */}
              <div className="text-xs text-muted-foreground text-right font-light">
                {testimonial.date}
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mb-16">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 transition-colors duration-200 ${
                currentSlide === index ? 'bg-foreground' : 'bg-border hover:bg-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-light text-foreground">2,847+</div>
            <div className="text-muted-foreground font-light">Downloads</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-light text-foreground">4.9/5</div>
            <div className="text-muted-foreground font-light">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-light text-foreground">94%</div>
            <div className="text-muted-foreground font-light">Report PR's</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
