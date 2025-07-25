import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'Programs', target: 'products' },
  { label: 'Results', target: 'testimonials' },
  { label: 'FAQ', target: 'faq' },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="font-display text-xl cursor-pointer" onClick={() => scrollTo('home')}>
          RAWPOWER
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((n) => (
            <button
              key={n.target}
              onClick={() => scrollTo(n.target)}
              className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </button>
          ))}
          <Button size="icon" variant="outline" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-destructive text-background text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 flex flex-col gap-4">
          {navItems.map((n) => (
            <button
              key={n.target}
              onClick={() => {
                scrollTo(n.target);
                setOpen(false);
              }}
              className="text-base uppercase tracking-wide text-muted-foreground text-left hover:text-foreground transition-colors"
            >
              {n.label}
            </button>
          ))}
          <Button variant="outline" className="mt-2 w-full flex justify-center gap-2">
            <ShoppingCart className="h-5 w-5" /> Cart
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
