import React from 'react';
import { Cpu, Mail, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Section */}
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">
            Ready to <span className="text-gradient">Automate?</span>
          </h2>
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            className="px-8 py-4 rounded-full bg-accent-cyan text-background font-bold text-lg hover-glow-cyan transition-all cursor-pointer inline-block"
          >
            Book a Strategy Call
          </Link>
          <ArrowUpRight className="w-6 h-6 inline-block ml-2 text-accent-cyan" />
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-8 h-8 text-accent-cyan" />
              <span className="text-2xl font-display font-bold tracking-tighter">
                AYAK <span className="text-accent-cyan">INTELLIGENCE</span>
              </span>
            </div>
            <p className="text-muted max-w-sm mb-8 leading-relaxed">
              Building the future of business through intelligent automation and AI-native systems.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-3 rounded-xl glass hover:text-accent-cyan transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-accent-cyan">Navigation</h4>
            <ul className="space-y-4 text-muted font-medium">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    className="text-muted hover:text-foreground transition-colors cursor-pointer link-underline inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-accent-cyan">Contact</h4>
            <ul className="space-y-4 text-muted font-medium">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@ayak.ai
              </li>
              <li>San Francisco, CA</li>
              <li>Remote Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted font-medium">
          <p>AYAK Intelligence © 2026. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
