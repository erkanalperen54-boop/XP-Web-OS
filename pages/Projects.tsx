
import React, { useEffect, useState } from 'react';
import { fetchGitHubRepos } from '../services/githubService';
import { Project } from '../types';
import { PERSONAL_INFO } from '../constants';
import { Github, Star, GitBranch, ExternalLink, Search, LayoutGrid, List } from 'lucide-react';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const loadRepos = async () => {
      setLoading(true);
      const data = await fetchGitHubRepos(PERSONAL_INFO.githubUsername);
      setProjects(data);
      setLoading(false);
    };
    loadRepos();
  }, []);

  const filteredProjects = projects.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
        <div className="space-y-4">
          <h1 className="text-5xl font-black font-heading text-white">Project <span className="text-cyan-500">Nexus</span></h1>
          <p className="text-gray-400 text-lg">A real-time sync with my GitHub repositories. Open source is in my DNA.</p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Filter repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 text-white text-sm"
            />
          </div>
          <div className="flex bg-white/5 rounded-lg border border-white/10 p-1">
            <button 
              onClick={() => setView('grid')}
              className={`p-1.5 rounded ${view === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-400'}`}
            >
              <LayoutGrid size={18} />
            </button>
            <button 
              onClick={() => setView('list')}
              className={`p-1.5 rounded ${view === 'list' ? 'bg-cyan-500 text-black' : 'text-gray-400'}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin neon-border-cyan" />
          <span className="text-cyan-500 font-bold animate-pulse tracking-widest uppercase text-xs">Accessing Mainframe...</span>
        </div>
      ) : (
        <div className={view === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "flex flex-col gap-4"
        }>
          {filteredProjects.map((repo) => (
            <div 
              key={repo.id} 
              className={`group glassmorphism rounded-xl border border-white/10 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/5 ${
                view === 'grid' ? 'p-6 flex flex-col justify-between h-full' : 'p-5 flex items-center justify-between'
              }`}
            >
              <div className={view === 'grid' ? 'space-y-4' : 'flex items-center gap-8 flex-grow'}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover:text-cyan-400 transition-colors">
                    <Github size={20} />
                  </div>
                  <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors truncate max-w-[200px]">
                    {repo.name}
                  </h3>
                </div>
                
                <p className={`text-sm text-gray-500 group-hover:text-gray-300 transition-colors ${
                  view === 'grid' ? 'line-clamp-3' : 'hidden md:block flex-grow max-w-lg'
                }`}>
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <span className="flex items-center gap-1.5 text-cyan-500">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 neon-border-cyan" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star size={14} className="group-hover:text-yellow-400" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GitBranch size={14} /> {repo.forks_count}
                  </span>
                </div>
              </div>

              <div className={view === 'grid' ? 'mt-6 pt-4 border-t border-white/5' : 'flex-shrink-0'}>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  SOURCE CODE <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && filteredProjects.length === 0 && (
        <div className="text-center py-24 glassmorphism rounded-3xl border border-white/10">
          <p className="text-gray-400 text-lg">No matching repositories found. Systems are operational.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
