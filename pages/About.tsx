
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Briefcase, User, GraduationCap, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-black font-heading text-white">About <span className="text-magenta-500">Me</span></h1>
            <div className="w-20 h-1.5 bg-magenta-500 rounded-full neon-border-magenta" />
          </div>

          <p className="text-lg text-gray-400 leading-relaxed">
            I am a results-driven Mid-level Software Developer currently serving as the 
            <span className="text-white font-bold"> Lead Engineer at Alka Savunma</span>. 
            My focus lies in building high-performance, secure systems that operate in demanding environments.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            With a background rooted in complex system architecture, I bridge the gap between low-level performance 
            and modern high-level interfaces. I believe in writing code that is not just functional, but clean, 
            efficient, and scalable.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="glassmorphism p-6 rounded-2xl border-l-4 border-l-cyan-500">
              <Briefcase className="text-cyan-500 mb-3" size={24} />
              <h3 className="text-white font-bold text-xl">Lead Eng.</h3>
              <p className="text-sm text-gray-400">Alka Savunma</p>
            </div>
            <div className="glassmorphism p-6 rounded-2xl border-l-4 border-l-magenta-500">
              <MapPin className="text-magenta-500 mb-3" size={24} />
              <h3 className="text-white font-bold text-xl">Location</h3>
              <p className="text-sm text-gray-400">Turkey / Ankara</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="relative glassmorphism p-8 rounded-3xl border border-white/10 space-y-10">
            <h2 className="text-2xl font-bold font-heading text-white flex items-center gap-3">
              <User className="text-magenta-500" /> Bio Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1 bg-white/10 h-12" />
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-widest font-bold">Full Name</h4>
                  <p className="text-lg text-white">Alperen Erkan</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-white/10 h-12" />
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-widest font-bold">Current Focus</h4>
                  <p className="text-lg text-white">Defense Tech & Embedded Systems</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-white/10 h-12" />
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-widest font-bold">Education</h4>
                  <p className="text-lg text-white">Computer Engineering Excellence</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <a 
                href={PERSONAL_INFO.companyUrl} 
                target="_blank"
                className="flex items-center justify-between group px-6 py-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
              >
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Work Experience</p>
                  <p className="text-white font-bold">Lead Engineer @ Alka Savunma</p>
                </div>
                <Briefcase className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
