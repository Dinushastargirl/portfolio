
import React from 'react';
import { QUALIFICATIONS } from '../../constants';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, Calendar, Building } from 'lucide-react';

const Qualifications: React.FC = () => {
  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto custom-scrollbar">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-neon-yellow flex items-center gap-3">
          <Award size={32} />
          Qualifications & Certifications
        </h2>
        <p className="text-gray-400 mt-2">
          A collection of my professional certifications, diplomas, and course completions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {QUALIFICATIONS.map((qual, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
            className="bg-white/5 border border-white/10 rounded-lg p-5 flex flex-col gap-3 group cursor-default hover:border-neon-yellow/50 transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="p-2 bg-neon-yellow/10 rounded-lg">
                <BadgeCheck className="text-neon-yellow" size={24} />
              </div>
              {qual.date && (
                <div className="flex items-center gap-1 text-xs font-mono text-gray-500 bg-black/30 px-2 py-1 rounded">
                  <Calendar size={10} />
                  {qual.date}
                </div>
              )}
            </div>
            
            <div>
              <h3 className="font-bold text-gray-200 group-hover:text-white leading-snug">
                {qual.title}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                <Building size={12} />
                <span>{qual.issuer}</span>
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-white/5 flex justify-end">
               <span className="text-[10px] uppercase tracking-wider text-gray-500 group-hover:text-neon-yellow/70">
                 Verified
               </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Qualifications;
