import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, BarChart3, Globe, Zap, Users, ShieldCheck } from 'lucide-react';

const trends = [
  {
    title: "Hyperautomation Takeover",
    description: "Combining AI, ML, and RPA to automate complex end-to-end business processes, reducing errors by up to 40%.",
    icon: Zap,
    stat: "75% Adoption",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Autonomous AI Agents",
    description: "Moving beyond simple tasks to independent process management and intelligent decision-making by 2025.",
    icon: Globe,
    stat: "Next-Gen Tech",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Personalization at Scale",
    description: "AI-driven hyper-personalization handling 70% of customer interactions with micro-targeted strategies.",
    icon: Users,
    stat: "70% Interaction",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Predictive Maintenance",
    description: "Using IoT and AI to switch from reactive to proactive equipment health monitoring, cutting downtime.",
    icon: BarChart3,
    stat: "30% Cost Cut",
    color: "from-orange-500 to-red-500"
  }
];

export default function Trends() {
  return (
    <section id="trends" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-cyan/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold tracking-widest uppercase text-accent-cyan mb-4"
          >
            <TrendingUp className="w-4 h-4" />
            Market Intelligence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
          >
            AI Automation <span className="text-gradient">Trends 2025</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto text-lg"
          >
            Stay ahead of the competition with data-driven insights into the future of enterprise intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trends.map((trend, i) => (
            <motion.div
              key={trend.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass hover-glass-bright hover-lift relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${trend.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`} />
              
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${trend.color} p-3 mb-6 shadow-lg shadow-black/20`}>
                <trend.icon className="w-full h-full text-white" />
              </div>
              
              <div className="text-2xl font-black text-accent-cyan mb-2">{trend.stat}</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{trend.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {trend.description}
              </p>
              
              <div className="mt-6 flex items-center gap-2">
                <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                    className={`h-full bg-gradient-to-r ${trend.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 rounded-3xl glass border-dashed border-white/10 text-center"
        >
          <p className="text-muted italic text-sm">
            Sources: Forbes, McKinsey & Company, Gartner Group (Aggregated via AYAK Intelligence Research)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
