
import React, { useState, useEffect } from 'react';
import Scene3D from './components/Scene3D';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import LoginScreen from './components/LoginScreen';
import DesktopBanner from './components/DesktopBanner';
import { WindowType, WindowState } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { User, Briefcase, Cpu, Mail, Power, Wifi, Battery, Signal, FolderOpen, Award } from 'lucide-react';
import { DESKTOP_WALLPAPER } from './constants';

// Import Pages
import Home from './components/pages/Home';
import Journey from './components/pages/Journey';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Qualifications from './components/pages/Qualifications';

type OSState = 'OFF' | 'LOGIN' | 'DESKTOP';

// Mobile Status Bar Component
const MobileStatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-8 flex items-center justify-between px-4 text-white z-50 font-medium text-xs md:hidden pointer-events-none">
      <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      <div className="flex items-center gap-2">
        <Signal size={14} />
        <Wifi size={14} />
        <Battery size={16} />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [osState, setOsState] = useState<OSState>('LOGIN');
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<WindowType | null>(null);
  const [highestZ, setHighestZ] = useState(10);

  // Initialize specific window content
  const getWindowContent = (id: WindowType) => {
    switch (id) {
      case WindowType.HOME: return <Home />;
      case WindowType.JOURNEY: return <Journey />;
      case WindowType.PROJECTS: return <Projects />;
      case WindowType.CONTACT: return <Contact />;
      case WindowType.QUALIFICATIONS: return <Qualifications />;
      default: return null;
    }
  };

  const getWindowTitle = (id: WindowType) => {
    switch (id) {
      case WindowType.HOME: return 'About Me';
      case WindowType.JOURNEY: return 'My Journey';
      case WindowType.PROJECTS: return 'Project Portfolio';
      case WindowType.CONTACT: return 'Contact';
      case WindowType.QUALIFICATIONS: return 'Qualifications';
      default: return 'Window';
    }
  };

  const openWindow = (id: WindowType) => {
    const existingWindow = windows.find(w => w.id === id);

    if (existingWindow) {
      // If minimized or in background, bring to front
      setWindows(prev => prev.map(w => 
        w.id === id 
          ? { ...w, isMinimized: false, zIndex: highestZ + 1 } 
          : w
      ));
      setHighestZ(prev => prev + 1);
      setActiveWindowId(id);
    } else {
      // Open new
      const newWindow: WindowState = {
        id,
        title: getWindowTitle(id),
        isOpen: true,
        isMinimized: false,
        zIndex: highestZ + 1,
        content: getWindowContent(id),
      };
      setWindows(prev => [...prev, newWindow]);
      setHighestZ(prev => prev + 1);
      setActiveWindowId(id);
    }
  };

  const closeWindow = (id: WindowType) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const minimizeWindow = (id: WindowType) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const focusWindow = (id: WindowType) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: highestZ + 1 } : w));
    setHighestZ(prev => prev + 1);
    setActiveWindowId(id);
  };

  if (osState === 'OFF') {
    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center">
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1, textShadow: "0 0 10px #fff" }}
                onClick={() => setOsState('LOGIN')}
                className="flex flex-col items-center gap-4 group"
            >
                <div className="w-20 h-20 rounded-full border-2 border-white/20 group-hover:border-neon-cyan flex items-center justify-center transition-colors">
                    <Power size={40} className="text-white/50 group-hover:text-neon-cyan transition-colors" />
                </div>
                <span className="text-gray-500 group-hover:text-white font-mono text-sm">SYSTEM OFF</span>
            </motion.button>
        </div>
    );
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black font-sans selection:bg-neon-pink selection:text-white">
      {/* Mobile Status Bar */}
      {osState === 'DESKTOP' && <MobileStatusBar />}

      {/* 3D Background */}
      <Scene3D />

      <AnimatePresence>
        {osState === 'LOGIN' && (
            <LoginScreen onUnlock={() => setOsState('DESKTOP')} />
        )}
      </AnimatePresence>

      {osState === 'DESKTOP' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full">
            
            {/* Wallpaper & Quote Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {/* Desktop Background Image */}
              <div className="absolute inset-0 opacity-60 mix-blend-overlay md:mix-blend-normal md:opacity-100">
                <img 
                  src={DESKTOP_WALLPAPER} 
                  alt="Desktop Background" 
                  className="w-full h-full object-cover"
                />
                {/* Vignette to ensure text/icons pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
              </div>

              {/* Quote */}
              <div className="absolute bottom-24 md:bottom-20 left-0 right-0 text-center px-4 z-10">
                <p className="text-white font-serif italic text-sm md:text-2xl tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] text-shadow-white opacity-80 md:opacity-100">
                  "I can do all things through Christ who strengthens me"
                </p>
              </div>
            </div>

            {/* Desktop Banner (Hidden on mobile) */}
            <DesktopBanner />

            {/* Desktop Area / App Grid */}
            {/* Mobile: Centered grid, Desktop: Left aligned grid */}
            <div className="absolute top-12 md:top-0 left-0 right-0 bottom-20 p-4 md:p-6 z-10">
                <div className="grid grid-cols-4 gap-2 md:grid-cols-[repeat(auto-fill,100px)] md:gap-4 md:auto-rows-min justify-items-center md:justify-items-start">
                    <DesktopIcon 
                        label="About Me" 
                        icon={User} 
                        onClick={() => openWindow(WindowType.HOME)} 
                        color="from-neon-pink to-purple-600"
                    />
                    <DesktopIcon 
                        label="Journey" 
                        icon={Briefcase} 
                        onClick={() => openWindow(WindowType.JOURNEY)} 
                        color="from-neon-yellow to-orange-500"
                    />
                    <DesktopIcon 
                        label="Projects" 
                        icon={Cpu} 
                        onClick={() => openWindow(WindowType.PROJECTS)} 
                        color="from-neon-cyan to-blue-500"
                    />
                    <DesktopIcon 
                        label="Contact" 
                        icon={Mail} 
                        onClick={() => openWindow(WindowType.CONTACT)} 
                        color="from-neon-green to-emerald-600"
                    />
                    <DesktopIcon 
                        label="Qualifications" 
                        icon={Award} 
                        onClick={() => openWindow(WindowType.QUALIFICATIONS)} 
                        color="from-purple-500 to-pink-600"
                    />
                </div>
            </div>

            {/* Windows Layer */}
            <AnimatePresence>
                {windows.map((win) => (
                !win.isMinimized && (
                    <Window
                    key={win.id}
                    id={win.id}
                    title={win.title}
                    zIndex={win.zIndex}
                    onClose={closeWindow}
                    onMinimize={minimizeWindow}
                    onClick={focusWindow}
                    >
                    {win.content}
                    </Window>
                )
                ))}
            </AnimatePresence>

            {/* Taskbar / Dock */}
            <Taskbar 
                openWindows={windows.map(w => w.id)} 
                activeWindow={activeWindowId}
                onOpen={openWindow} 
                onShutdown={() => setOsState('OFF')}
            />
        </motion.div>
      )}
    </div>
  );
};

export default App;
