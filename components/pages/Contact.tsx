import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

const Contact: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center max-w-3xl mx-auto p-4">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-neon-green mb-4">Let's Connect</h2>
        <p className="text-gray-300">
          Building solutions, solving problems. Reach out via any platform below.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
        <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-neon-green/50 transition-all">
          <Mail className="text-neon-green" size={20} />
          <div className="overflow-hidden">
            <div className="text-xs text-gray-400">Email</div>
            <div className="text-sm font-medium truncate">{CONTACT_INFO.email}</div>
          </div>
        </a>

        <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-neon-green/50 transition-all">
          <MessageCircle className="text-green-400" size={20} />
          <div>
            <div className="text-xs text-gray-400">WhatsApp</div>
            <div className="text-sm font-medium">{CONTACT_INFO.phone}</div>
          </div>
        </a>

        <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-400/50 transition-all">
          <Linkedin className="text-blue-400" size={20} />
          <div>
            <div className="text-xs text-gray-400">LinkedIn</div>
            <div className="text-sm font-medium">View Profile</div>
          </div>
        </a>

        <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-400/50 transition-all">
          <Github className="text-purple-400" size={20} />
          <div>
            <div className="text-xs text-gray-400">GitHub</div>
            <div className="text-sm font-medium">Dinushastargirl</div>
          </div>
        </a>
      </div>

      {/* Simple Form */}
      <form className="space-y-4 w-full bg-black/20 p-6 rounded-xl border border-white/5">
          <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="bg-black/30 border border-white/10 rounded p-3 text-white focus:border-neon-cyan outline-none transition-colors" />
              <input type="email" placeholder="Email" className="bg-black/30 border border-white/10 rounded p-3 text-white focus:border-neon-cyan outline-none transition-colors" />
          </div>
          <textarea rows={3} placeholder="Your Message..." className="w-full bg-black/30 border border-white/10 rounded p-3 text-white focus:border-neon-cyan outline-none transition-colors" />
          <button type="button" className="w-full py-3 bg-gradient-to-r from-neon-cyan to-blue-600 rounded font-bold text-black hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
          </button>
      </form>
    </div>
  );
};

export default Contact;