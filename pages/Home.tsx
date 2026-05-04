
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Briefcase, ChevronDown, Terminal, Shield, Zap, Cpu, Code2, Rocket } from 'lucide-react';
import { PERSONAL_INFO, TECH_STACK } from '../constants';

const Home: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-[95vh] w-full flex flex-col justify-center items-center text-center px-6 relative bg-grid"
      >
        {/* Advanced Multi-Layered Dynamic Background */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            background: `
              radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 197, 94, 0.08), transparent 40%),
              radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217, 70, 239, 0.05), transparent 60%)
            `,
          }}
        />

        {/* Ambient Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />

        {/* Main Content Container */}
        <div className="space-y-10 z-10 max-w-6xl relative">
          <div className="animate-hero-text stagger-1">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white text-[10px] font-black tracking-[0.3em] uppercase mb-4">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-magenta-400 animate-pulse [animation-delay:0.2s]" />
              </span>
              Next-Gen Engineering Operations
            </div>
          </div>
          
          <div className="animate-hero-text stagger-2 space-y-2">
            <h1 className="text-7xl md:text-[10rem] font-black font-heading leading-none tracking-tighter">
              <span className="block text-white opacity-90">ALPEREN</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 neon-text-green">
                ERKAN
              </span>
            </h1>
          </div>

          <div className="animate-hero-text stagger-3 space-y-6">
            <p className="text-3xl md:text-5xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed uppercase tracking-tighter">
              <span className="text-white font-bold">Lead Engineer</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">
              <span className="flex items-center gap-2"><Shield size={14} className="text-green-500"/> Defense Tech</span>
              <span className="flex items-center gap-2"><Cpu size={14} className="text-magenta-500"/> System Architecture</span>
              <span className="flex items-center gap-2"><Code2 size={14} className="text-green-500"/> Full-Stack Dev</span>
            </div>
          </div>

          <div className="animate-hero-text stagger-4 flex flex-wrap justify-center gap-6 mt-16">
            <Link 
              to="/projects" 
              className="group relative px-12 py-5 bg-white text-black font-black rounded-sm transition-all hover:scale-105 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-3 tracking-widest uppercase">
                Explore Repository <ArrowRight size={18} />
              </span>
            </Link>
            <Link 
              to="/contact" 
              className="px-12 py-5 border border-white/20 text-white font-black rounded-sm transition-all hover:bg-white/5 active:scale-95 hover:border-white/50 tracking-widest uppercase"
            >
              Contact Agent
            </Link>
          </div>
        </div>

        {/* Dynamic Detail: Floating Technical Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Terminal className="absolute top-1/4 left-10 text-green-500/10 w-24 h-24 rotate-12 animate-float" />
          <Cpu className="absolute bottom-1/4 right-10 text-magenta-500/10 w-32 h-32 -rotate-12 animate-float [animation-delay:1s]" />
          <Rocket className="absolute top-1/3 right-1/4 text-white/5 w-16 h-16 animate-float [animation-delay:2s]" />
        </div>

        <div className="absolute bottom-8 flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-[9px] font-black tracking-[0.6em] uppercase text-white">Initiate Sequence</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent animate-bounce" />
        </div>
      </section>

      {/* Feature Section: Detailed Corporate Capabilities */}
      <section className="w-full py-32 bg-black relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6 group">
            <div className="w-16 h-16 rounded-full glassmorphism flex items-center justify-center border border-green-500/30 group-hover:bg-green-500/20 transition-all">
              <Shield className="text-green-400" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">Defense Infrastructure</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Designing secure, low-latency communication protocols and real-time operating environments for high-stakes defense applications.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="w-16 h-16 rounded-full glassmorphism flex items-center justify-center border border-magenta-500/30 group-hover:bg-magenta-500/20 transition-all">
              <Code2 className="text-magenta-400" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">Scalable Architecture</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Building distributed microservices and robust full-stack ecosystems that handle massive data loads with zero downtime.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="w-16 h-16 rounded-full glassmorphism flex items-center justify-center border border-green-500/30 group-hover:bg-green-500/20 transition-all">
              <Zap className="text-green-400" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">Rapid Prototyping</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Accelerating the lifecycle from concept to deployment using modern CI/CD pipelines and automated testing frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Pulse Section */}
      <section className="w-full py-24 bg-zinc-950/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-16 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-500">Global Tech Stack</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-4 group cursor-help">
                <div className="w-20 h-20 rounded-sm glassmorphism flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-white/20 transition-all duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {tech.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 group-hover:text-green-400 transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
