
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Assistant } from './components/Assistant';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={
        <div className="flex items-center justify-center h-[60vh]">
          <div className="w-12 h-12 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* GitHub pages often uses /main as requested, though / is root. We handle both */}
          <Route path="/main" element={<Home />} />
        </Routes>
      </Suspense>
      <Assistant />
    </Layout>
  );
};

export default App;
