import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ParticleNetwork } from '@/components/ParticleNetwork';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-24 px-4 relative overflow-hidden flex items-center bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <ParticleNetwork />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950/50 to-slate-950 pointer-events-none" />
      
      <motion.div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-6xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-8 backdrop-blur-sm"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <span className="font-medium">Innovating the Future of Technology</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          BrainCode 360
          <br />
          <motion.span 
            className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% auto' }}
          >
            Innovative Software Solutions
          </motion.span>
          <br />
          <span className="text-4xl md:text-6xl lg:text-7xl">
            for the Modern World
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We develop unparalleled digital technologies that stimulate businesses to foster innovation and boost productivity.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-5 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-base px-10 py-7 shadow-2xl shadow-purple-500/50 transition-all duration-300 rounded-full font-semibold"
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-slate-600 text-white hover:bg-slate-800/50 hover:border-slate-500 text-base px-10 py-7 backdrop-blur-sm transition-all duration-300 rounded-full font-semibold"
            >
              Explore Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
