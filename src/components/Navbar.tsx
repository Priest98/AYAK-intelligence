import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged, saveUserProfile } from '../lib/firebase';
import { User } from 'firebase/auth';
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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        saveUserProfile(currentUser);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  const handleSignOut = () => signOut(auth);

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
              className="text-sm font-medium text-muted hover:text-foreground transition-colors cursor-pointer link-underline"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-6 w-px bg-white/10 mx-2" />
          
          {user ? (
            <div className="flex items-center gap-4">
              <button
                onClick={handleSignOut}
                className="text-xs font-bold text-muted hover:text-foreground transition-colors uppercase tracking-widest flex items-center gap-1.5"
              >
                <LogOut className="w-3 h-3" />
                Sign Out
              </button>
              <div className="w-9 h-9 rounded-full border border-accent-cyan/30 p-0.5 group relative">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <div className="w-full h-full rounded-full bg-accent-cyan/20 flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-accent-cyan" />
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-background rounded-full shadow-lg" />
              </div>
            </div>
          ) : (
            <button
              onClick={handleSignIn}
              className="flex items-center gap-2 px-5 py-2 rounded-full glass border-accent-cyan/30 text-accent-cyan text-sm font-bold hover:bg-accent-cyan/10 transition-all"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
          )}

          <Link
            to="contact"
            smooth={true}
            offset={-80}
            className="px-5 py-2 rounded-full bg-accent-cyan text-background text-sm font-bold hover-glow-cyan transition-all cursor-pointer"
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
            className="absolute top-full left-0 right-0 glass border-t-0 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
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
            
            <div className="h-px bg-white/10 my-2" />
            
            {user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-accent-cyan/30 p-0.5">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full rounded-full border" />
                    ) : (
                      <UserIcon className="w-5 h-5 text-accent-cyan m-auto" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{user.displayName}</h4>
                    <p className="text-xs text-muted">{user.email}</p>
                  </div>
                </div>
                <button onClick={handleSignOut} className="p-2 text-muted hover:text-foreground">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                className="w-full py-3 rounded-xl glass border-accent-cyan/30 text-accent-cyan font-bold flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                Sign In with Google
              </button>
            )}

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
