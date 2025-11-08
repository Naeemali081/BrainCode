import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  isLowEndDevice: boolean;
  isMobile: boolean;
  reducedMotion: boolean;
  connectionSpeed: 'slow' | 'fast' | 'unknown';
}

export function usePerformance(): PerformanceMetrics {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isLowEndDevice: false,
    isMobile: false,
    reducedMotion: false,
    connectionSpeed: 'unknown'
  });

  useEffect(() => {
    const detectPerformance = () => {
      // Detect mobile devices
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Check for reduced motion preference
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Detect low-end devices
      const isLowEndDevice = (() => {
        // Check hardware concurrency (CPU cores)
        const cores = navigator.hardwareConcurrency || 1;
        
        // Check memory (if available)
        const memory = (navigator as any).deviceMemory || 4;
        
        // Check connection
        const connection = (navigator as any).connection;
        const effectiveType = connection?.effectiveType || '4g';
        
        return cores <= 2 || memory <= 2 || effectiveType === 'slow-2g' || effectiveType === '2g';
      })();

      // Detect connection speed
      const connectionSpeed = (() => {
        const connection = (navigator as any).connection;
        if (!connection) return 'unknown';
        
        const effectiveType = connection.effectiveType;
        if (effectiveType === 'slow-2g' || effectiveType === '2g') return 'slow';
        return 'fast';
      })();

      setMetrics({
        isLowEndDevice,
        isMobile,
        reducedMotion,
        connectionSpeed
      });
    };

    detectPerformance();
    
    // Listen for changes in reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => detectPerformance();
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return metrics;
}
