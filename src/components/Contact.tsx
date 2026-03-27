import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-accent-cyan uppercase mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Start Your <span className="text-gradient">Automation</span> Journey
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg"
          >
            Ready to scale your business with AI? Fill out the form below and we'll get back to you within 24 hours.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto p-8 md:p-12 rounded-3xl glass border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-muted ml-1">Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-muted ml-1">Email</label>
                <input
                  required
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all font-medium"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-muted ml-1">Message</label>
              <textarea
                required
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all font-medium resize-none"
              ></textarea>
            </div>

            <button
              disabled={formState !== 'idle'}
              type="submit"
              className={cn(
                "w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all",
                formState === 'success' 
                  ? "bg-green-500 text-white" 
                  : "bg-accent-cyan text-background hover-glow-cyan active:scale-95 disabled:opacity-70"
              )}
            >
              {formState === 'idle' && (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
              {formState === 'loading' && (
                <>
                  Sending...
                  <Loader2 className="w-5 h-5 animate-spin" />
                </>
              )}
              {formState === 'success' && (
                <>
                  Message Sent!
                  <CheckCircle2 className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
