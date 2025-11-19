import React from 'react';
import { motion } from 'framer-motion';
import { USER_PORTRAIT_MAIN } from '../constants';

const DesktopBanner: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="absolute top-[10%] right-[5%] md:right-[10%] max-w-md pointer-events-none z-0 hidden lg:block"
    >
      <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex items-center gap-6 shadow-2xl">
        <div className="w-24 h-24 rounded-full border-2 border-neon-cyan p-1 shrink-0">
          <img src={USER_PORTRAIT_MAIN} alt="Profile" className="w-full h-full rounded-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Welcome
          </h1>
          <p className="text-gray-300 text-sm">
            to the portfolio of <span className="text-neon-pink font-bold">Dinusha Pushparajah</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default DesktopBanner;