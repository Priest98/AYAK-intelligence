import React from 'react';
import { motion } from 'motion/react';
import { 
  Network, 
  MessageSquareCode, 
  Settings2, 
  Layers, 
  Database, 
  Lightbulb 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-scroll';

const services = [
  {
    icon: Network,
    title: 'AI Workflow Automation',
    desc: 'End-to-end automation of complex business processes using custom AI agents.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MessageSquareCode,
    title: 'Chatbot Development',
    desc: 'Intelligent conversational AI that handles support, sales, and lead qualification.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Settings2,
    title: 'Business Process Automation',
    desc: 'Streamlining internal operations to reduce overhead and eliminate human error.',
    color: 'from-cyan-500 to-emerald-500'
  },
  {
    icon: Layers,
    title: 'AI Integrations',
    desc: 'Connecting your existing tools with powerful AI models for enhanced capabilities.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Database,
    title: 'Data Automation',
    desc: 'Automated data scraping, cleaning, and analysis for real-time business insights.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Lightbulb,
    title: 'Custom AI Solutions',
    desc: 'Bespoke AI development tailored to solve your specific business challenges.',
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-accent-cyan uppercase mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our <span className="text-accent-purple">AI</span> Services
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl glass hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className={cn(
                "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity blur-3xl",
                service.color
              )} />
              
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 text-accent-cyan group-hover:neon-glow-cyan transition-all">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h4 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">{service.title}</h4>
              <p className="text-muted leading-relaxed">{service.desc}</p>
              
              <Link
                to="contact"
                smooth={true}
                offset={-80}
                className="mt-8 flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent-cyan opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
              >
                Learn More
                <div className="w-8 h-[1px] bg-accent-cyan" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
