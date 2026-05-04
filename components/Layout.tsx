
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, PERSONAL_INFO } from '../constants';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-magenta-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-heading neon-text-green flex items-center gap-2 group">
            <span className="text-white group-hover:text-green-400 transition-colors">ALPEREN</span>
            <span className="text-green-500 font-extrabold">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:text-green-400 ${
                  location.pathname === item.path ? 'text-green-400 font-bold' : 'text-gray-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glassmorphism animate-in fade-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-lg font-medium tracking-wide uppercase text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24 z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="z-10 py-12 border-t border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading text-white">Alperen</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Lead Engineer at Alka Savunma, crafting high-performance defense solutions and modern software architectures.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-green-500">Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Me</Link>
              <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
              <a href={PERSONAL_INFO.companyUrl} target="_blank" className="text-gray-400 hover:text-white transition-colors">Alka Savunma</a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-magenta-500">Connect</h4>
            <div className="flex gap-4">
              <a href={PERSONAL_INFO.github} target="_blank" className="p-2 glassmorphism rounded-full hover:bg-green-500/20 transition-all">
                <Github size={20} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-2 glassmorphism rounded-full hover:bg-magenta-500/20 transition-all">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2 glassmorphism rounded-full hover:bg-white/20 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Alperen Erkan. Built with React & Neon Vibes.
        </div>
      </footer>
    </div>
  );
};
