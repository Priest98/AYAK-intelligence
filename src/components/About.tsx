import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Workflow, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent-cyan uppercase mb-4">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Eliminating the <span className="text-muted">Repetitive</span>,<br />
              Empowering the <span className="text-accent-purple">Creative.</span>
            </h3>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              At AYAK Intelligence, we believe that human potential is wasted on manual, repetitive tasks. We bridge the gap between complex AI technology and practical business operations.
            </p>
            <div className="space-y-6">
              {[
                { icon: BrainCircuit, title: 'Intelligent Systems', desc: 'We build systems that learn and adapt to your unique business needs.' },
                { icon: Workflow, title: 'Seamless Workflows', desc: 'Our automations integrate perfectly with your existing tech stack.' },
                { icon: Zap, title: 'Rapid Deployment', desc: 'Go from manual to automated in weeks, not months.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center text-accent-cyan">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass relative group">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
                alt="AI Visualization"
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              {/* Floating UI Elements */}
              <div className="absolute top-8 left-8 p-4 glass rounded-2xl neon-glow-cyan">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  <span className="text-xs font-mono font-bold">SYSTEM ACTIVE</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 p-4 glass rounded-2xl neon-glow-purple">
                <div className="text-3xl font-black text-accent-purple">99.9%</div>
                <div className="text-[10px] font-bold text-muted uppercase tracking-widest">Accuracy Rate</div>
              </div>
            </div>
            
            {/* Decorative Rings */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full" />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full border-dashed animate-spin-slow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
