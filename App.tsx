import React, { useState } from 'react';
import Scene3D from './components/Scene3D';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import LoginScreen from './components/LoginScreen';
import DesktopBanner from './components/DesktopBanner';
import { WindowType, WindowState } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { User, Briefcase, Cpu, Mail, Power } from 'lucide-react';

// Import Pages
import Home from './components/pages/Home';
import Journey from './components/pages/Journey';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

type OSState = 'OFF' | 'LOGIN' | 'DESKTOP';

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
      default: return null;
    }
  };

  const getWindowTitle = (id: WindowType) => {
    switch (id) {
      case WindowType.HOME: return 'About Me';
      case WindowType.JOURNEY: return 'My Journey';
      case WindowType.PROJECTS: return 'Project Portfolio';
      case WindowType.CONTACT: return 'Contact';
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
      {/* 3D Background */}
      <Scene3D />

      <AnimatePresence>
        {osState === 'LOGIN' && (
            <LoginScreen onUnlock={() => setOsState('DESKTOP')} />
        )}
      </AnimatePresence>

      {osState === 'DESKTOP' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full">
            {/* Desktop Banner */}
            <DesktopBanner />

            {/* Desktop Area */}
            <div className="absolute top-0 left-0 right-0 bottom-14 p-6 grid grid-cols-1 auto-rows-min gap-4 md:grid-cols-[repeat(auto-fill,100px)] z-0">
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

            {/* Taskbar */}
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