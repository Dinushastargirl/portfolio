
import React from 'react';
import { TIMELINE } from '../../constants';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, PenTool, Lightbulb, Rocket, Globe } from 'lucide-react';

const Journey: React.FC = () => {
  const getIcon = (iconType: string, title: string) => {
    if (title.includes('Content Writer') || title.includes('Content Creator')) return PenTool;
    if (title.includes('University') || title.includes('Diploma')) return GraduationCap;
    if (title.includes('One Dial') || title.includes('Hardware')) return Rocket;
    if (title.includes('Published')) return Globe;
    if (title.includes('Vision')) return Lightbulb;
    return Code;
  };

  const getColor = (index: number) => {
    const colors = ['text-neon-pink', 'text-neon-cyan', 'text-neon-yellow', 'text-neon-green'];
    return colors[index % colors.length];
  };

  return (
    <div className="relative min-h-full p-4 md:p-8 overflow-x-hidden">
      
      {/* Background Floating Elements for Immersion inside the window */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-32 h-32 bg-neon-pink/5 rounded-full blur-3xl"
         />
         <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-10 w-40 h-40 bg-neon-cyan/5 rounded-full blur-3xl"
         />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">
            My Story
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
            A path of curiosity, adaptation, and building.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto pb-20">
        {/* Connecting Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-pink via-neon-cyan to-neon-yellow opacity-30 rounded-full" />

        <div className="space-y-16">
          {TIMELINE.map((event, index) => {
            const Icon = getIcon(event.icon, event.title);
            const isLeft = index % 2 === 0;
            const colorClass = getColor(index);

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className={`relative flex items-center md:justify-between ${!isLeft ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node/Icon */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 -translate-x-1/2 bg-[#0f0f13] border-2 border-white/10 rounded-full z-20 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.8)] group hover:border-neon-cyan transition-colors">
                    <Icon size={20} className={`${colorClass} group-hover:scale-110 transition-transform`} />
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 w-full md:w-[42%] relative group`}>
                  <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(0,0,0,0.5)] ${event.title.includes('One Dial') || event.title.includes('Published') ? 'border-l-4 border-l-neon-yellow' : ''}`}>
                    
                    {/* Date Badge */}
                    <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-wider bg-black/40 rounded-full text-gray-400 border border-white/5">
                        {event.year}
                    </span>

                    <h3 className={`text-lg font-bold text-white mb-2 group-hover:${colorClass} transition-colors`}>
                        {event.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {event.description}
                    </p>

                    {/* Decorative glow on hover */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-gradient-to-br from-${colorClass.replace('text-', '')}/10 to-transparent`} />
                  </div>
                  
                  {/* Connector Line (Horizontal) */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] w-10 bg-white/20 ${isLeft ? '-right-10' : '-left-10'}`} />
                </div>
                
                {/* Empty Spacer for Layout Balance */}
                <div className="hidden md:block w-[42%]" />
              </motion.div>
            );
          })}
        </div>

        {/* End Node */}
        <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="absolute bottom-0 left-8 md:left-1/2 w-6 h-6 -translate-x-1/2 bg-neon-green rounded-full shadow-[0_0_20px_#00ff00]"
        />
      </div>
    </div>
  );
};

export default Journey;
