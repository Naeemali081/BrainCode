import { motion } from 'framer-motion';
import { Sparkles, Globe, Zap } from 'lucide-react';

export function TopBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-950/95 via-purple-950/95 to-slate-950/95 backdrop-blur-md text-white py-3 px-4 text-center text-sm overflow-hidden border-b border-purple-800/30 shadow-lg shadow-purple-900/20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10 animate-gradient"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * 40,
              opacity: 0 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * 40,
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <div className="relative flex items-center justify-center">
        <motion.div 
          className="animate-marquee whitespace-nowrap inline-flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 mx-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="w-4 h-4 text-purple-400" />
            </motion.div>
            <span className="text-purple-400 font-bold text-base tracking-widest">GLOBAL REACH</span>
          </motion.div>
          
          <motion.span 
            className="text-purple-300/60 text-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✦
          </motion.span>
          
          <span className="text-slate-300 mx-4 font-medium">Serving 50+ countries worldwide</span>
          
          <motion.span 
            className="text-purple-300/60 text-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            ✦
          </motion.span>
          
          <motion.div 
            className="inline-flex items-center gap-2 mx-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Zap className="w-4 h-4 text-purple-400" />
            </motion.div>
            <span className="text-purple-400 font-bold text-base tracking-widest">INNOVATION HUB</span>
          </motion.div>
          
          <motion.span 
            className="text-purple-300/60 text-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            ✦
          </motion.span>
          
          <span className="text-slate-300 mx-4 font-medium">Cutting-edge solutions</span>
          
          <motion.span 
            className="text-purple-300/60 text-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          >
            ✦
          </motion.span>
          
          <motion.div 
            className="inline-flex items-center gap-2 mx-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>
            <span className="text-purple-400 font-bold text-base tracking-widest">TRUSTED PARTNERS</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
