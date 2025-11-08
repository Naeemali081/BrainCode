import { useEffect, useState } from 'react';

interface MemoryInfo {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
  memoryUsagePercentage: number;
  isHighMemoryUsage: boolean;
}

export function useMemoryMonitor(): MemoryInfo | null {
  const [memoryInfo, setMemoryInfo] = useState<MemoryInfo | null>(null);

  useEffect(() => {
    const checkMemoryUsage = () => {
      // Check if performance.memory is available (Chrome/Edge)
      const performance = window.performance as any;
      if (performance && performance.memory) {
        const memory = performance.memory;
        const memoryUsagePercentage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
        const isHighMemoryUsage = memoryUsagePercentage > 80; // Alert if over 80%

        setMemoryInfo({
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit,
          memoryUsagePercentage,
          isHighMemoryUsage
        });

        // Log warning if memory usage is high
        if (isHighMemoryUsage) {
          console.warn(`High memory usage detected: ${memoryUsagePercentage.toFixed(1)}%`);
        }
      }
    };

    // Check memory usage every 5 seconds
    const interval = setInterval(checkMemoryUsage, 5000);
    
    // Initial check
    checkMemoryUsage();

    return () => clearInterval(interval);
  }, []);

  return memoryInfo;
}

// Hook to trigger garbage collection when memory is high
export function useMemoryCleanup() {
  const memoryInfo = useMemoryMonitor();

  useEffect(() => {
    if (memoryInfo?.isHighMemoryUsage) {
      // Suggest garbage collection (only works in development)
      if (window.gc && typeof window.gc === 'function') {
        console.log('Triggering garbage collection due to high memory usage');
        window.gc();
      }
      
      // Clear any cached data or reduce memory usage
      // This is where you could implement app-specific memory cleanup
    }
  }, [memoryInfo?.isHighMemoryUsage]);

  return memoryInfo;
}
