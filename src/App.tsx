import { TopBanner } from './components/TopBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechSlider } from './components/TechSlider';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { motion } from 'framer-motion';
import { usePerformance } from './hooks/usePerformance';
import { useMemoryCleanup } from './hooks/useMemoryMonitor';

function App() {
  const { isLowEndDevice, reducedMotion, isMobile } = usePerformance();
  const memoryInfo = useMemoryCleanup();
  
  // Disable heavy animations on low-end devices or when reduced motion is preferred
  const enableAnimations = !isLowEndDevice && !reducedMotion;
  const enableBackgroundAnimations = enableAnimations && !isMobile;

  return (
    <motion.div 
      className="min-h-screen bg-slate-950 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: enableAnimations ? 0.5 : 0.1 }}
    >
      {/* Background animated elements - only on high-end devices */}
      {enableBackgroundAnimations && (
        <div className="fixed inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10">
        <ErrorBoundary>
          <TopBanner />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <motion.div
            initial={enableAnimations ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: enableAnimations ? 0.8 : 0, delay: enableAnimations ? 0.2 : 0 }}
          >
            <Hero />
          </motion.div>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <motion.div
            initial={enableAnimations ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={enableAnimations ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: enableAnimations ? 0.8 : 0 }}
          >
            <TechSlider />
          </motion.div>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <motion.div
            initial={enableAnimations ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={enableAnimations ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: enableAnimations ? 0.8 : 0 }}
          >
            <Services />
          </motion.div>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <motion.div
            initial={enableAnimations ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={enableAnimations ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: enableAnimations ? 0.8 : 0 }}
          >
            <About />
          </motion.div>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <motion.div
            initial={enableAnimations ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={enableAnimations ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: enableAnimations ? 0.8 : 0 }}
          >
            <Portfolio />
          </motion.div>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <motion.div
            initial={enableAnimations ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={enableAnimations ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: enableAnimations ? 0.8 : 0 }}
          >
            <Footer />
          </motion.div>
        </ErrorBoundary>
      </div>
    </motion.div>
  );
}

export default App;
