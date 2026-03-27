import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-scroll';
import { cn } from '@/src/lib/utils';

interface Project {
  title: string;
  category: string;
  image: string;
  desc: string;
  longDesc: string;
  technologies: string[];
  gallery: string[];
}

const projects: Project[] = [
  {
    title: 'Support AI Agent',
    category: 'Customer Support',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800',
    desc: 'Automated 85% of customer support tickets using a custom LLM-powered chatbot.',
    longDesc: 'A cutting-edge customer support solution that leverages custom Fine-tuned LLMs to understand and resolve complex user inquiries. It integrates directly with Zendesk and Slack to provide a unified support experience. The agent features sentiment analysis, automatic ticket classification, and real-time knowledge base updates.',
    technologies: ['Python', 'OpenAI API', 'Pinecone', 'React'],
    gallery: [
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    title: 'Sales Pipeline Pro',
    category: 'Sales Automation',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    desc: 'End-to-end sales automation from lead scraping to personalized email sequences.',
    longDesc: 'An automated sales intelligence platform that identifies potential leads from thousands of web sources, cleans the data, and initiates personalized outreach sequences via Apollo and Lemlist. It significantly reduces the SDR workload while increasing conversion rates through AI-driven personalization.',
    technologies: ['Node.js', 'Puppeteer', 'Apollo API', 'NLP'],
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    title: 'SocialPulse AI',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    desc: 'Automated content creation and engagement system for multi-platform social growth.',
    longDesc: 'An AI-powered social media manager that monitors trends in real-time and generates high-quality posts, reels, and tweets tailored to your brand voice. Includes an automated engagement bot that interacts with key influencers and potential customers, driving organic growth.',
    technologies: ['Stable Diffusion', 'GPT-4', 'Redis', 'Node.js'],
    gallery: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    title: 'InsightEngine',
    category: 'Data Analysis',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    desc: 'Real-time data scraping and sentiment analysis system for market research.',
    longDesc: 'A massive data processing engine that scrapes millions of data points daily to provide market sentiment analysis and competitive intelligence for Fortune 500 companies. It visualizes complex trends using interactive D3.js dashboards, allowing for data-driven strategic decisions.',
    technologies: ['BigQuery', 'TensorFlow', 'Python', 'D3.js'],
    gallery: [
      'https://images.unsplash.com/photo-1504868584819-f8eec4b6d760?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.2em] text-accent-cyan uppercase mb-4"
            >
              Our Work
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Proven <span className="text-accent-purple">Results</span>
            </motion.h3>
          </div>
          <Link
            to="portfolio"
            smooth={true}
            offset={-80}
            className="px-6 py-3 rounded-full glass font-bold hover:bg-white/10 transition-all cursor-pointer inline-block"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden glass aspect-video cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
                <div className="text-xs font-bold tracking-widest text-accent-cyan uppercase mb-2">{project.category}</div>
                <h4 className="text-2xl font-bold mb-2 transition-transform group-hover:translate-x-2">{project.title}</h4>
                <p className="text-muted text-sm max-w-md mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {project.desc}
                </p>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 delay-100">
                   <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-accent-cyan">
                     View Case Study <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] glass rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative bg-background/50">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 left-4 p-2 rounded-xl glass hover:bg-white/20 transition-all md:hidden pointer-events-auto"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 p-3 rounded-xl glass hover:bg-white/20 transition-all hidden md:block"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-sm font-bold tracking-widest text-accent-cyan uppercase mb-4">{selectedProject.category}</div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">{selectedProject.title}</h2>
                
                <p className="text-lg text-muted mb-8 leading-relaxed">
                  {selectedProject.longDesc}
                </p>

                <div className="space-y-8">
                  <div>
                    <h5 className="text-sm font-bold tracking-widest uppercase mb-4 text-foreground/80">Technologies Used</h5>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="px-4 py-2 rounded-xl glass border-accent-cyan/20 text-accent-cyan text-xs font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold tracking-widest uppercase mb-4 text-foreground/80">Key Challenges Solved</h5>
                    <ul className="space-y-3">
                      {[1, 2, 3].map((_, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                          <span>Scalable infrastructure for handling {Math.floor(Math.random() * 1000) + 100}k+ daily API requests securely.</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 flex flex-wrap gap-4">
                    <button className="px-8 py-4 rounded-full bg-accent-cyan text-background font-bold hover:neon-glow-cyan transition-all flex items-center gap-2">
                       Launch Project <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 rounded-full glass font-bold hover:bg-white/10 transition-all flex items-center gap-2 border border-white/5">
                       View Source <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
