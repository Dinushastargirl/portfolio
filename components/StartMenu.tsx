import React from 'react';
import { motion } from 'framer-motion';
import { Search, Power, User, Folder, Settings } from 'lucide-react';
import { WindowType } from '../types';

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (id: WindowType) => void;
  onShutdown: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ isOpen, onClose, onOpenApp, onShutdown }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 20, opacity: 0, scale: 0.95 }}
      className="fixed bottom-16 left-4 w-80 md:w-96 bg-[#1a1b26]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
    >
      {/* Search Bar */}
      <div className="p-4 border-b border-white/5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Type here to search..." 
            className="w-full bg-black/30 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:border-neon-cyan outline-none"
          />
        </div>
      </div>

      {/* Pinned Apps */}
      <div className="p-4">
        <h3 className="text-xs font-bold text-gray-500 mb-3 px-2">Pinned</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { id: WindowType.HOME, label: 'About', icon: User, color: 'bg-blue-500' },
            { id: WindowType.PROJECTS, label: 'Projects', icon: Folder, color: 'bg-yellow-500' },
            { id: WindowType.JOURNEY, label: 'Journey', icon: Settings, color: 'bg-purple-500' },
          ].map((app) => (
            <button 
              key={app.label}
              onClick={() => { onOpenApp(app.id); onClose(); }}
              className="flex flex-col items-center gap-2 group p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <div className={`w-10 h-10 rounded-lg ${app.color} flex items-center justify-center shadow-lg text-white group-hover:scale-105 transition-transform`}>
                <app.icon size={20} />
              </div>
              <span className="text-[10px] text-gray-300">{app.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recommended */}
      <div className="p-4 pt-0">
        <h3 className="text-xs font-bold text-gray-500 mb-3 px-2">Recommended</h3>
        <div className="space-y-1">
            <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded flex items-center justify-center text-xs font-bold">P</div>
                <div className="flex flex-col">
                    <span className="text-sm font-medium">Portfolio Presentation.pdf</span>
                    <span className="text-[10px] text-gray-500">Recently added</span>
                </div>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded flex items-center justify-center text-xs font-bold">W</div>
                <div className="flex flex-col">
                    <span className="text-sm font-medium">One Dial Specs.docx</span>
                    <span className="text-[10px] text-gray-500">Yesterday</span>
                </div>
            </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="p-4 bg-black/20 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
             {/* Placeholder avatar */}
             <div className="w-full h-full bg-gradient-to-tr from-neon-pink to-neon-cyan" />
          </div>
          <div className="text-sm font-medium">Dinusha</div>
        </div>
        <button onClick={onShutdown} className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-gray-400 hover:text-red-400">
            <Power size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default StartMenu;