
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight, Lock } from 'lucide-react';
import { USER_PORTRAIT_MAIN } from '../constants';

interface LoginScreenProps {
  onUnlock: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'ABC1234') {
      onUnlock();
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="absolute inset-0 z-[100] bg-black/60 backdrop-blur-xl flex flex-col items-center justify-center p-4"
    >
      <div className="flex flex-col items-center gap-6 w-full max-w-sm">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-br from-neon-pink to-neon-cyan shadow-[0_0_40px_rgba(0,255,255,0.3)]">
            <img src={USER_PORTRAIT_MAIN} alt="User" className="w-full h-full rounded-full object-cover border-4 border-black" />
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-wider text-center">Dinusha Pushparajah</h2>
        
        <form onSubmit={handleLogin} className="flex flex-col items-center gap-4 w-full">
          <div className="relative w-full">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className={`w-full bg-white/10 border ${error ? 'border-red-500 animate-shake' : 'border-white/20'} rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan transition-all text-center tracking-widest`}
              autoFocus
            />
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          
          <button 
            type="submit" 
            className="flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors border border-white/5"
          >
            Login <ArrowRight size={14} />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginScreen;
