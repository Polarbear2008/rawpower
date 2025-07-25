import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ProductSelector from '@/components/ProductSelector';
import ProductDetails from '@/components/ProductDetails';
import Testimonials from '@/components/Testimonials';
import WhyRawPower from '@/components/WhyRawPower';
import FAQ from '@/components/FAQ';
import NewsletterSignup from '@/components/NewsletterSignup';
import FinalCTA from '@/components/FinalCTA';
import Navbar from '@/components/Navbar';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <div className="section-separator"></div>
      <section id="products">
        <ProductSelector onProductSelect={setSelectedProduct} />
      </section>
      <div className="section-separator"></div>
      <section id="programDetails">
        <ProductDetails selectedProduct={selectedProduct} />
      </section>
      <div className="section-separator"></div>
      <section id="testimonials">
        <Testimonials />
      </section>
      <div className="section-separator"></div>
      <section id="results">
        <WhyRawPower />
      </section>
      <div className="section-separator"></div>
      <section id="faq">
        <FAQ />
      </section>
      <div className="section-separator"></div>
      <NewsletterSignup />
      <div className="section-separator"></div>
      <FinalCTA />
    </div>
  );
};

export default Index;
