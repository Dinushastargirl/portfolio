import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WindowType } from '../types';
import { User, Briefcase, Cpu, Mail, Power, Search } from 'lucide-react';
import StartMenu from './StartMenu';

interface TaskbarProps {
  openWindows: WindowType[];
  activeWindow: WindowType | null;
  onOpen: (id: WindowType) => void;
  onShutdown: () => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ openWindows, activeWindow, onOpen, onShutdown }) => {
  const [time, setTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const startMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Close start menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (startMenuRef.current && !startMenuRef.current.contains(event.target as Node)) {
        setStartMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const apps = [
    { id: WindowType.HOME, label: 'Home', icon: User, color: 'text-neon-pink' },
    { id: WindowType.JOURNEY, label: 'Journey', icon: Briefcase, color: 'text-neon-yellow' },
    { id: WindowType.PROJECTS, label: 'Projects', icon: Cpu, color: 'text-neon-cyan' },
    { id: WindowType.CONTACT, label: 'Contact', icon: Mail, color: 'text-neon-green' },
  ];

  return (
    <>
      <div ref={startMenuRef}>
        <AnimatePresence>
            {startMenuOpen && (
                <StartMenu 
                    isOpen={startMenuOpen} 
                    onClose={() => setStartMenuOpen(false)} 
                    onOpenApp={onOpen}
                    onShutdown={onShutdown}
                />
            )}
        </AnimatePresence>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-14 bg-black/60 backdrop-blur-xl border-t border-white/10 flex items-center justify-between px-4 z-50 select-none">
        {/* Start Button & Search */}
        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ filter: 'brightness(1.2)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setStartMenuOpen(!startMenuOpen)}
            className="w-8 h-8 rounded bg-gradient-to-br from-neon-pink to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/20 cursor-pointer"
          >
            <div className="w-4 h-4 bg-white rounded-sm opacity-80" />
          </motion.button>
          
          <div className="hidden md:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 text-gray-400 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => setStartMenuOpen(true)}>
            <Search size={14} />
            <span className="text-xs">Search</span>
          </div>
        </div>

        {/* Dock */}
        <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          {apps.map((app) => {
            const isOpen = openWindows.includes(app.id);
            const isActive = activeWindow === app.id;
            const Icon = app.icon;

            return (
              <motion.button
                key={app.id}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpen(app.id)}
                className={`relative w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all ${
                  isActive ? 'bg-white/15 shadow-inner' : 'hover:bg-white/5'
                }`}
              >
                <Icon className={`${app.color}`} size={24} />
                {isOpen && (
                  <div className="absolute -bottom-1 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
                
                {/* Tooltip */}
                <div className="absolute -top-10 opacity-0 hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs text-white pointer-events-none whitespace-nowrap">
                  {app.label}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* System Tray */}
        <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
          <div className="hidden md:block text-right">
            <div>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            <div className="text-[10px] opacity-60">{time.toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taskbar;