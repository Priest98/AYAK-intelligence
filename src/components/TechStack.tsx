import React from 'react';
import { motion } from 'motion/react';

const techs = [
  { name: 'OpenAI', icon: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg' },
  { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
  { name: 'Zapier', icon: 'https://cdn.worldvectorlogo.com/logos/zapier.svg' },
  { name: 'Make.com', icon: 'https://cdn.worldvectorlogo.com/logos/make-3.svg' },
  { name: 'LangChain', icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' },
  { name: 'Anthropic', icon: 'https://cdn.worldvectorlogo.com/logos/anthropic-icon.svg' },
  { name: 'AWS', icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
  { name: 'Google Cloud', icon: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg' },
];

export default function TechStack() {
  return (
    <section className="py-20 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-xs font-bold tracking-[0.3em] text-muted uppercase">Powered By Industry Leaders</h2>
      </div>
      
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {[...techs, ...techs].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 glass rounded-xl p-2 flex items-center justify-center group-hover:neon-glow-cyan transition-all">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg font-bold text-muted group-hover:text-foreground transition-colors">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
