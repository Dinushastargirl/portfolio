import React from 'react';
import { TIMELINE } from '../../constants';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Cpu } from 'lucide-react';

const Journey: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-neon-yellow mb-2">My Journey</h2>
        <p className="text-gray-400">From Content Creation to Full Stack Engineering</p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-pink via-neon-cyan to-transparent opacity-50" />

        <div className="space-y-12">
          {TIMELINE.map((event, index) => {
            const Icon = event.icon === 'education' ? GraduationCap : event.icon === 'work' ? Briefcase : Cpu;
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center md:justify-between ${!isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white rounded-full -translate-x-[7px] md:-translate-x-1/2 border-4 border-black z-10 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-[45%] p-6 rounded-xl border border-white/10 bg-black/40 hover:bg-white/5 hover:border-neon-cyan/50 transition-all backdrop-blur-sm group`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-white/5 ${event.icon === 'tech' ? 'text-neon-cyan' : event.icon === 'work' ? 'text-neon-pink' : 'text-neon-yellow'}`}>
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-mono text-gray-400">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">{event.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Journey;