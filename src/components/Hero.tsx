import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { ArrowRight, Bot, Zap, ShieldCheck } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold tracking-widest uppercase text-accent-cyan mb-8"
        >
          <Bot className="w-4 h-4" />
          The Future of Business Automation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tighter"
        >
          Automate <span className="text-gradient">Everything.</span><br />
          Scale <span className="text-gradient">Anything.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AYAK Intelligence builds AI-powered automations that save time, cut costs, and unlock exponential growth for modern enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            className="group px-8 py-4 rounded-full bg-accent-cyan text-background font-bold text-lg hover:neon-glow-cyan transition-all flex items-center gap-2 cursor-pointer"
          >
            Book a Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            className="px-8 py-4 rounded-full glass font-bold text-lg hover:bg-white/10 transition-all cursor-pointer"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Floating Stats/Badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Zap, label: '10x Faster Workflows', color: 'text-accent-cyan' },
            { icon: Bot, label: 'AI-Native Solutions', color: 'text-accent-purple' },
            { icon: ShieldCheck, label: 'Enterprise Security', color: 'text-accent-cyan' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <stat.icon className={cn("w-8 h-8", stat.color)} />
              <span className="text-sm font-bold tracking-tight text-muted uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
