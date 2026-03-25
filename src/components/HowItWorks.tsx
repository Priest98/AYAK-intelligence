import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Rocket } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const steps = [
  {
    icon: Search,
    title: 'Analyze',
    desc: 'We deep-dive into your current workflows to identify bottlenecks and automation opportunities.',
    color: 'text-accent-cyan'
  },
  {
    icon: PenTool,
    title: 'Design',
    desc: 'Our experts architect a custom AI-native solution tailored to your specific business goals.',
    color: 'text-accent-purple'
  },
  {
    icon: Rocket,
    title: 'Deploy',
    desc: 'We implement the automation, integrate it with your tools, and scale it as you grow.',
    color: 'text-accent-cyan'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent-cyan uppercase mb-4">The Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold">How We <span className="text-accent-purple">Automate</span></h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full glass flex items-center justify-center mb-8 relative group">
                  <div className={cn(
                    "absolute inset-0 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity",
                    i % 2 === 0 ? "bg-accent-cyan" : "bg-accent-purple"
                  )} />
                  <step.icon className={cn("w-10 h-10", step.color)} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border border-white/10 flex items-center justify-center text-xs font-bold">
                    0{i + 1}
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-muted leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
