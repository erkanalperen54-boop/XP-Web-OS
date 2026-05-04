
import React from 'react';
import { NavItem, Certification } from './types';
import { Github, Linkedin, Mail, ExternalLink, ShieldCheck, Briefcase, Cpu, Award, Binary, Terminal, Box, Zap, Code2, FileCode } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' }
];

export const PERSONAL_INFO = {
  name: "Alperen",
  level: "Mid-level Software Developer | Lead Engineer at Alka Savunma",
  company: "Alka Savunma",
  companyUrl: "https://www.alkasavunma.com",
  linkedin: "https://www.linkedin.com/in/alperen-erkan-177037339/",
  github: "https://www.github.com/Mr-Alperen",
  email: "alperenerkan00@gmail.com",
  githubUsername: "Mr-Alperen"
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'oscp',
    title: 'OSCP Certificate',
    issuer: 'OffSec',
    date: '2024',
    link: 'https://www.offsec.com/courses/pen-200/',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'oscc',
    title: 'OSCC Certificate',
    issuer: 'OffSec',
    date: '2024',
    link: 'https://www.offsec.com/courses/offsec-cloud-professional/',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'klcp',
    title: 'KLCP Certificate',
    issuer: 'OffSec',
    date: '2023',
    link: 'https://www.offsec.com/courses/kali-linux-certified-professional/',
    image: 'https://images.unsplash.com/photo-1624969862293-b749659ccc4e?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

export const TECH_STACK = [
  { name: 'C/C++', icon: <Cpu className="w-5 h-5" /> },
  { name: 'x86_64 Assembly', icon: <Binary className="w-5 h-5" /> },
  { name: 'Python', icon: <Code2 className="w-5 h-5" /> },
  { name: 'Docker', icon: <Box className="w-5 h-5" /> },
  { name: 'Rust', icon: <Zap className="w-5 h-5" /> },
  { name: 'BASH / ZSH', icon: <Terminal className="w-5 h-5" /> },
  { name: 'BATCH', icon: <FileCode className="w-5 h-5" /> },
];
