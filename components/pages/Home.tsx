import React from 'react';
import { motion } from 'framer-motion';
import { BIO, SKILLS, USER_PORTRAIT_MAIN } from '../../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 h-full items-center">
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-sm font-mono text-neon-green mb-2 tracking-widest">WELCOME TO MY JOURNEY</h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            I build.<br/>I solve.<br/><span className="text-neon-pink">I evolve.</span>
          </h1>
        </div>
        
        <div className="p-4 border-l-4 border-neon-cyan bg-white/5 rounded-r-lg">
          <p className="text-xl font-light text-gray-200 italic">
            "{BIO.subtext}"
          </p>
        </div>

        <p className="text-gray-300 leading-relaxed">
          {BIO.intro}
        </p>

        <div className="flex gap-4 pt-4">
          <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:text-neon-cyan transition-all">
            <Github size={20} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:text-blue-400 transition-all">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:text-red-400 transition-all">
            <Mail size={20} />
          </a>
        </div>

        {/* Skills Ticker */}
        <div className="pt-8">
          <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">Core Stack</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.slice(0, 8).map((skill, i) => (
              <span key={i} className="px-3 py-1 text-xs border border-white/20 rounded-full hover:border-neon-yellow hover:text-neon-yellow transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Image Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="relative h-full min-h-[400px] flex items-center justify-center"
      >
        {/* Abstract background shapes */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-neon-pink/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 w-[80%] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
           {/* 
              NOTE: Replace src with your real portrait image. 
              For now using placeholder from constants.
           */}
          <img 
            src={USER_PORTRAIT_MAIN} 
            alt="Dinusha Pushparajah" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <div className="text-2xl font-bold">Dinusha Pushparajah</div>
            <div className="text-neon-yellow text-sm">Developer & Creator</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;