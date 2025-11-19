
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageCircle, Linkedin, Github } from 'lucide-react';
import { CONTACT_INFO, USER_PORTRAIT_SIDE } from '../../constants';

const Contact: React.FC = () => {
  return (
    <div className="h-full w-full max-w-6xl mx-auto p-2 md:p-4 flex flex-col gap-8 overflow-x-hidden">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center py-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neon-green mb-2">Let's Connect</h2>
        <p className="text-gray-300 text-sm md:text-base">
          Building solutions, solving problems. Reach out via any platform below.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Image Section */}
        <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2"
        >
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                    src={USER_PORTRAIT_SIDE} 
                    alt="Dinusha Pushparajah" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <h3 className="text-white font-bold text-lg">Dinusha Pushparajah</h3>
                        <p className="text-neon-cyan text-sm">Full Stack Developer</p>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Info & Form Section */}
        <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-1/2 space-y-6"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-neon-green/50 transition-all group">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                        <Mail className="text-neon-green" size={20} />
                    </div>
                    <div className="overflow-hidden">
                        <div className="text-xs text-gray-400">Email</div>
                        <div className="text-sm font-medium truncate w-full">{CONTACT_INFO.email}</div>
                    </div>
                </a>

                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-green-400/50 transition-all group">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-green-400/20 transition-colors">
                        <MessageCircle className="text-green-400" size={20} />
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">WhatsApp</div>
                        <div className="text-sm font-medium">{CONTACT_INFO.phone}</div>
                    </div>
                </a>

                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-400/50 transition-all group">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
                        <Linkedin className="text-blue-400" size={20} />
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">LinkedIn</div>
                        <div className="text-sm font-medium">View Profile</div>
                    </div>
                </a>

                <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-400/50 transition-all group">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-400/20 transition-colors">
                        <Github className="text-purple-400" size={20} />
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">GitHub</div>
                        <div className="text-sm font-medium">Dinushastargirl</div>
                    </div>
                </a>
            </div>

            {/* Simple Form */}
            <form className="space-y-4 w-full bg-black/20 p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-semibold text-white mb-4">Send a Message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="bg-black/30 border border-white/10 rounded p-3 text-white focus:border-neon-cyan outline-none transition-colors" />
                    <input type="email" placeholder="Email" className="bg-black/30 border border-white/10 rounded p-3 text-white focus:border-neon-cyan outline-none transition-colors" />
                </div>
                <textarea rows={4} placeholder="Your Message..." className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-neon-cyan outline-none transition-colors" />
                <button type="button" className="w-full py-3 bg-gradient-to-r from-neon-cyan to-blue-600 rounded-lg font-bold text-black hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20">
                    <Send size={18} /> Send Message
                </button>
            </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
