import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow Startups',
    content: 'AYAK Intelligence transformed our sales process. We went from manual outreach to a fully automated AI pipeline that generates 3x more leads.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director, Global Logistics',
    content: 'The custom AI agents they built for our customer support have been a game-changer. Our response time dropped from hours to seconds.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, Creative Agency',
    content: 'Automating our data analysis with AYAK saved us 20+ hours a week. Their team is brilliant and the results speak for themselves.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent-cyan uppercase mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold">What Our <span className="text-accent-purple">Clients</span> Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-cyan text-accent-cyan" />
                ))}
              </div>
              <p className="text-lg mb-8 italic text-muted leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-muted font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
