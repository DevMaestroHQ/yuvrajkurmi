import { useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    const collectMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const metrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
      };

      // Collect Web Vitals if available
      if ('getEntriesByType' in performance) {
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          metrics.firstContentfulPaint = fcpEntry.startTime;
        }
      }

      // Log metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.group('Portfolio Performance Metrics');
        console.log('Load Time:', metrics.loadTime + 'ms');
        console.log('DOM Content Loaded:', metrics.domContentLoaded + 'ms');
        if (metrics.firstContentfulPaint) {
          console.log('First Contentful Paint:', metrics.firstContentfulPaint + 'ms');
        }
        console.groupEnd();
      }

      // Send to analytics in production
      if (process.env.NODE_ENV === 'production') {
        // Example: Send to Google Analytics 4 or other analytics service
        if (typeof (window as any).gtag !== 'undefined') {
          (window as any).gtag('event', 'page_load_time', {
            custom_parameter: metrics.loadTime
          });
        }
      }
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      setTimeout(collectMetrics, 100);
    } else {
      window.addEventListener('load', () => {
        setTimeout(collectMetrics, 100);
      });
    }

    // Monitor for layout shifts (CLS)
    if ('PerformanceObserver' in window) {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        
        if (clsValue > 0.1) {
          console.warn('High Cumulative Layout Shift detected:', clsValue);
        }
      });

      try {
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        // Layout shift observation not supported
      }

      // Monitor for largest contentful paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (lastEntry.startTime > 2500) {
          console.warn('Slow Largest Contentful Paint:', lastEntry.startTime + 'ms');
        }
      });

      try {
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        // LCP observation not supported
      }

      return () => {
        clsObserver.disconnect();
        lcpObserver.disconnect();
      };
    }
  }, []);

  // This component doesn't render anything
  return null;
}