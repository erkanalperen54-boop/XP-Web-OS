
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an email via backend or service
    console.log('Form data:', formState);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Contact Info */}
        <div className="lg:w-1/3 space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-black font-heading text-white uppercase tracking-tighter">
              Get <span className="text-magenta-500 neon-text-magenta">Connected</span>
            </h1>
            <div className="w-20 h-1.5 bg-magenta-500 rounded-full neon-border-magenta" />
            <p className="text-gray-400 text-lg">
              Open for professional inquiries, engineering collaborations, or just a technical deep dive.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="p-3 bg-white/5 rounded-xl text-magenta-500 group-hover:bg-magenta-500 group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email Protocol</h4>
                <p className="text-white text-lg font-medium">{PERSONAL_INFO.email}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 group">
              <div className="p-3 bg-white/5 rounded-xl text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Base Location</h4>
                <p className="text-white text-lg font-medium">Ankara / Gölbaşı</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="p-3 bg-white/5 rounded-xl text-white group-hover:bg-white group-hover:text-black transition-all">
                <ExternalLink size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Corporation</h4>
                <a href={PERSONAL_INFO.companyUrl} target="_blank" className="text-white text-lg font-medium flex items-center gap-2 hover:underline">
                  {PERSONAL_INFO.company} <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex gap-6">
            <a href={PERSONAL_INFO.github} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Github size={28} /></a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={28} /></a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-magenta-500 to-cyan-500 rounded-3xl blur opacity-20" />
          <form 
            onSubmit={handleSubmit}
            className="relative glassmorphism p-10 rounded-3xl border border-white/10 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Identification</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-magenta-500 transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Communication Node</label>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-magenta-500 transition-colors text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Data Transmission</label>
              <textarea 
                rows={6} 
                placeholder="Message details..."
                required
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-magenta-500 transition-colors text-white resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-magenta-600 text-white font-black rounded-xl flex items-center justify-center gap-3 transition-all hover:bg-magenta-500 active:scale-95 neon-border-magenta"
            >
              {sent ? 'TRANSMISSION COMPLETE' : 'SEND SIGNAL'} <Send size={20} />
            </button>
            
            {sent && (
              <p className="text-center text-magenta-400 text-sm font-bold animate-pulse uppercase tracking-[0.2em]">
                System Response: Acknowledged. Will reply shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
