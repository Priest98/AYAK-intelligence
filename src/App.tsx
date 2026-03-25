import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent-cyan selection:text-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Testimonials />
        <Element name="contact">
        <Contact />
      </Element>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
