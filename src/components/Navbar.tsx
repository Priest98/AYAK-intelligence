import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Process', to: 'how-it-works' },
  { name: 'Portfolio', to: 'portfolio' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="p-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 group-hover:neon-glow-cyan transition-all">
            <Cpu className="w-6 h-6 text-accent-cyan" />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter">
            AYAK <span className="text-accent-cyan">INTELLIGENCE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              offset={-80}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            className="px-5 py-2 rounded-full bg-accent-cyan text-background text-sm font-bold hover:neon-glow-cyan transition-all cursor-pointer"
          >
            Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t-0 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                offset={-80}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-muted hover:text-foreground transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-accent-cyan text-background font-bold text-center cursor-pointer"
            >
              Book a Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
