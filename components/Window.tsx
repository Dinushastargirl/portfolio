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
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: 50 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="absolute top-[10%] left-[5%] md:left-[15%] w-[90%] md:w-[70%] h-[80%] rounded-lg shadow-2xl overflow-hidden flex flex-col border border-os-border backdrop-blur-md bg-os-window"
      style={{ zIndex }}
      onMouseDown={() => onClick(id)}
    >
      {/* Window Header */}
      <div className="h-10 bg-black/40 flex items-center justify-between px-4 border-b border-white/5 select-none cursor-grab active:cursor-grabbing">
        <div className="flex items-center gap-2">
          <div className="text-sm font-mono text-neon-cyan">{title}</div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={(e) => { e.stopPropagation(); onMinimize(id); }} className="hover:bg-white/10 p-1 rounded transition-colors">
            <Minus size={14} className="text-gray-400" />
          </button>
          <button className="hover:bg-white/10 p-1 rounded transition-colors hidden md:block">
            <Maximize2 size={14} className="text-gray-400" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onClose(id); }} className="hover:bg-red-500/80 p-1 rounded transition-colors group">
            <X size={14} className="text-gray-400 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-y-auto p-6 relative">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;