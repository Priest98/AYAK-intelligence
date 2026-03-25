import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'ai' | 'user';
  timestamp: Date;
}

const KNOWLEDGE_BASE = {
  greetings: ["Hello! I'm the AYAK AI Assistant. How can I help you automate your business today?", "Hi there! Ready to scale your operations with AI? I'm here to answer any questions."],
  services: "We offer end-to-end AI solutions including AI Workflow Automation, Intelligent Chatbots, Business Process Automation, and Custom AI Integrations.",
  process: "Our process has three phases: 1. Analyze your workflows, 2. Design a custom AI-native solution, and 3. Deploy and scale the automation.",
  about: "AYAK Intelligence focuses on eliminating repetitive tasks to empower human creativity through intelligent automation.",
  contact: "You can book a consultation using the 'Book a Consultation' button or fill out the form in our Contact section below!",
  default: "That's a great question! For specific inquiries about that, it's best to book a strategy call with our experts. Would you like me to help you find the contact form?"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: KNOWLEDGE_BASE.greetings[0], sender: 'ai', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Response Logic
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let responseText = KNOWLEDGE_BASE.default;

      if (lowerInput.includes('service') || lowerInput.includes('capabilities')) responseText = KNOWLEDGE_BASE.services;
      else if (lowerInput.includes('process') || lowerInput.includes('how') || lowerInput.includes('work')) responseText = KNOWLEDGE_BASE.process;
      else if (lowerInput.includes('about') || lowerInput.includes('mission') || lowerInput.includes('who')) responseText = KNOWLEDGE_BASE.about;
      else if (lowerInput.includes('contact') || lowerInput.includes('book') || lowerInput.includes('call') || lowerInput.includes('consultation')) responseText = KNOWLEDGE_BASE.contact;
      else if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) responseText = KNOWLEDGE_BASE.greetings[1];

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[350px] md:w-[400px] h-[500px] mb-4 overflow-hidden rounded-3xl glass border-white/10 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-accent-cyan/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent-cyan/20 border border-accent-cyan/30">
                  <Bot className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight text-foreground">AYAK Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-muted uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors text-muted hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex gap-3",
                    msg.sender === 'user' ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border",
                    msg.sender === 'user' 
                      ? "bg-accent-purple/20 border-accent-purple/30 text-accent-purple" 
                      : "bg-accent-cyan/20 border-accent-cyan/30 text-accent-cyan"
                  )}>
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={cn(
                    "max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed",
                    msg.sender === 'user'
                      ? "bg-accent-purple text-white rounded-tr-none"
                      : "bg-white/5 border border-white/10 text-foreground rounded-tl-none"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                    <div className="w-1 h-1 bg-accent-cyan rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1 h-1 bg-accent-cyan rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1 h-1 bg-accent-cyan rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-white/5">
              <div className="flex gap-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask something..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all font-medium pr-10"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-1 top-1 bottom-1 px-3 bg-accent-cyan text-background rounded-lg disabled:opacity-50 hover:neon-glow-cyan transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-center text-muted mt-3 font-medium uppercase tracking-widest leading-none">
                Powered by AYAK Core AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "p-4 rounded-full shadow-2xl transition-all duration-500 group relative overflow-hidden",
          isOpen 
            ? "bg-white/10 text-foreground" 
            : "bg-accent-cyan text-background neon-glow-cyan"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />}
        </div>
      </motion.button>
    </div>
  );
}
