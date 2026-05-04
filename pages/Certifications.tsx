
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="space-y-4 mb-16">
        <h1 className="text-5xl font-black font-heading text-white uppercase tracking-tighter">
          My <span className="text-green-500 neon-text-green">Certifications</span>
        </h1>
        <div className="w-32 h-2 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
        <p className="text-gray-400 max-w-xl text-lg">
          Official engineering and security credentials from OffSec. Validated mission-critical expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATIONS.map((cert) => (
          <a 
            key={cert.id} 
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative glassmorphism rounded-2xl overflow-hidden border border-white/10 transition-all hover:-translate-y-2 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 flex items-center gap-2">
                <ShieldCheck size={14} className="text-green-500" />
                <span className="text-[10px] font-black tracking-widest text-white uppercase">OFFSEC CERTIFIED</span>
              </div>

              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl font-black text-white group-hover:text-green-400 transition-colors uppercase tracking-tighter">
                  {cert.title.split(' ')[0]}
                </h3>
                <p className="text-green-500 text-xs font-bold tracking-[0.2em] uppercase">Verification Active</p>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="flex items-center gap-1.5 text-gray-500 font-bold uppercase tracking-widest">
                  <Calendar size={14} className="text-green-500" /> Issued: {cert.date}
                </span>
                <span className="flex items-center gap-1 text-white font-black group-hover:text-green-400">
                  OFFICIAL LINK <ExternalLink size={14} />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-20 p-12 glassmorphism rounded-3xl border border-dashed border-white/10 text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">Ready for deployment?</h3>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Combining deep technical expertise with industry-standard certifications to deliver unmatched engineering quality.
        </p>
        <button className="px-12 py-4 bg-green-500 text-black font-black rounded-sm shadow-lg shadow-green-500/20 hover:scale-110 active:scale-95 transition-all tracking-widest uppercase">
          Initialize Contact
        </button>
      </div>
    </div>
  );
};

export default Certifications;
