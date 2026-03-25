import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-scroll';

const projects = [
  {
    title: 'Support AI Agent',
    category: 'Customer Support',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800',
    desc: 'Automated 85% of customer support tickets using a custom LLM-powered chatbot.'
  },
  {
    title: 'Sales Pipeline Pro',
    category: 'Sales Automation',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    desc: 'End-to-end sales automation from lead scraping to personalized email sequences.'
  },
  {
    title: 'SocialPulse AI',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    desc: 'Automated content creation and engagement system for multi-platform social growth.'
  },
  {
    title: 'InsightEngine',
    category: 'Data Analysis',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    desc: 'Real-time data scraping and sentiment analysis system for market research.'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent-cyan uppercase mb-4">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Proven <span className="text-accent-purple">Results</span></h3>
          </div>
          <Link
            to="portfolio"
            smooth={true}
            offset={-80}
            className="px-6 py-3 rounded-full glass font-bold hover:bg-white/10 transition-all cursor-pointer"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass aspect-video"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
                <div className="text-xs font-bold tracking-widest text-accent-cyan uppercase mb-2">{project.category}</div>
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-muted text-sm max-w-md mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.desc}
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="p-3 rounded-full glass hover:neon-glow-cyan transition-all" onClick={(e) => e.preventDefault()}>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 rounded-full glass hover:neon-glow-purple transition-all" onClick={(e) => e.preventDefault()}>
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
