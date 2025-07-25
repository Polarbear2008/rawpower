import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({ title: 'Thank you!', description: 'You are now subscribed.' });
    setEmail('');
  };

  return (
    <section className="py-20 bg-muted fade-in-section">
      <div className="max-w-xl mx-auto text-center px-6">
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
          Join the Raw Power Community
        </h2>
        <p className="text-muted-foreground mb-8">
          Get exclusive training tips, product launches, and discounts.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" className="px-8">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
