import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  color: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ label, icon: Icon, onClick, color }) => {
  return (
    <motion.div 
      onClick={onClick}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
      whileTap={{ scale: 0.95 }}
      className="w-24 h-24 flex flex-col items-center justify-center gap-2 rounded-lg cursor-pointer group transition-colors"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
        <Icon className="text-white drop-shadow-md" size={32} />
      </div>
      <span className="text-xs font-medium text-white text-center drop-shadow-md px-2 bg-black/20 rounded">
        {label}
      </span>
    </motion.div>
  );
};

export default DesktopIcon;