import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simple fast loading
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          const increment = Math.random() * 25 + 15; // Faster increments
          return Math.min(prev + increment, 100);
        }
        return 100;
      });
    }, 150);

    // Complete loading quickly
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 200);
    }, 1000); // Reduced to 1 second

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-background flex items-center justify-center z-50"
        >
          <div className="text-center">
            {/* Simple Y Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 mx-auto mb-6 relative"
            >
              <svg
                viewBox="0 0 48 48"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1E40AF" />
                  </linearGradient>
                </defs>
                
                <g transform="translate(24, 24)">
                  <circle 
                    cx="0" 
                    cy="0" 
                    r="20" 
                    fill="url(#loadingGradient)" 
                    opacity="0.1"
                  />
                  
                  <path
                    d="M-8 -10 L0 -2 L8 -10"
                    stroke="url(#loadingGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M0 -2 L0 10"
                    stroke="url(#loadingGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  
                  <circle 
                    cx="0" 
                    cy="6" 
                    r="1.5" 
                    fill="url(#loadingGradient)" 
                    opacity="0.8"
                  />
                  
                  <circle 
                    cx="0" 
                    cy="0" 
                    r="18" 
                    fill="none" 
                    stroke="url(#loadingGradient)" 
                    strokeWidth="1.5" 
                    opacity="0.4"
                  />
                </g>
              </svg>
              
              {/* Simple Pulse */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-blue-500/20"
              />
            </motion.div>

            {/* Simple Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              <h2 className="text-xl font-semibold text-contrast">
                Yubraj Kurmi
              </h2>
              <p className="text-sm text-readable-secondary">
                Loading Portfolio...
              </p>
              
              {/* Simple Progress Bar */}
              <div className="w-64 mx-auto">
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </div>
                <div className="text-xs text-readable-secondary mt-2">
                  {Math.round(progress)}%
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}