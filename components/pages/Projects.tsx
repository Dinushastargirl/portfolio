import React from 'react';
import { PROJECTS } from '../../constants';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="pb-10">
      <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
        <div>
          <h2 className="text-3xl font-bold text-neon-cyan">Projects</h2>
          <p className="text-sm text-gray-400 mt-1">Selected works from Web Dev, AI, and Design</p>
        </div>
        <div className="text-xs font-mono text-gray-500 hidden md:block">
          {PROJECTS.length} ITEMS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5 }}
            className={`group relative p-6 bg-white/5 rounded-xl border border-transparent hover:${project.color} transition-all duration-300 flex flex-col h-full`}
          >
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-xl -z-10 group-hover:from-white/10 transition-colors`} />
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-white text-gray-100">{project.title}</h3>
            
            <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, ti) => (
                  <span key={ti} className="text-[10px] px-2 py-1 bg-black/30 rounded border border-white/5 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 pt-2 border-t border-white/5">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium bg-white/10 hover:bg-neon-pink hover:text-black rounded transition-colors">
                  <ExternalLink size={14} /> Live Demo
                </button>
                <button className="px-3 py-2 bg-white/5 hover:bg-white/20 rounded text-gray-300 transition-colors">
                  <Github size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;