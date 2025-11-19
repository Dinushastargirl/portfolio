
import React from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';
import { WindowType } from '../types';

interface WindowProps {
  id: WindowType;
  title: string;
  children: React.ReactNode;
  onClose: (id: WindowType) => void;
  onMinimize: (id: WindowType) => void;
  zIndex: number;
  onClick: (id: WindowType) => void;
}

const Window: React.FC<WindowProps> = ({ id, title, children, onClose, onMinimize, zIndex, onClick }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="absolute md:top-[10%] md:left-[15%] md:w-[70%] md:h-[80%] md:rounded-lg inset-0 m-0 w-full h-full md:m-auto shadow-2xl overflow-hidden flex flex-col border-none md:border md:border-os-border backdrop-blur-md bg-[#0f0f13] md:bg-os-window z-50"
      style={{ zIndex }}
      onMouseDown={() => onClick(id)}
    >
      {/* Window Header */}
      <div className="h-12 md:h-10 bg-black/60 md:bg-black/40 flex items-center justify-between px-4 border-b border-white/10 select-none shrink-0">
        <div className="flex items-center gap-2">
          <div className="text-sm font-mono text-neon-cyan font-bold tracking-wide">{title}</div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={(e) => { e.stopPropagation(); onMinimize(id); }} className="hover:bg-white/10 p-2 md:p-1 rounded transition-colors">
            <Minus size={16} className="text-gray-400" />
          </button>
          <button className="hover:bg-white/10 p-1 rounded transition-colors hidden md:block">
            <Maximize2 size={14} className="text-gray-400" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onClose(id); }} className="hover:bg-red-500/80 p-2 md:p-1 rounded transition-colors group">
            <X size={16} className="text-gray-400 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 relative scroll-smooth">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
