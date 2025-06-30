import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingPhase, setLoadingPhase] = useState(0);

  const loadingMessages = [
    "Initializing Portfolio...",
    "Loading Components...",
    "Preparing Experience...",
    "Almost Ready..."
  ];

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          const increment = Math.random() * 15 + 5; // 5-20% increments
          return Math.min(prev + increment, 100);
        }
        return 100;
      });
    }, 200);

    // Phase progression
    const phaseInterval = setInterval(() => {
      setLoadingPhase(prev => (prev + 1) % loadingMessages.length);
    }, 600);

    // Complete loading smoothly
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 300);
    }, 2400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(phaseInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5">
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-brand-primary/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, -100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="text-center relative z-10">
            {/* Modern Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-24 h-24 mx-auto mb-8 relative"
            >
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="w-full h-full rounded-full border-2 border-transparent border-t-brand-primary border-r-brand-secondary"></div>
              </motion.div>
              
              {/* Inner Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2"
              >
                <div className="w-full h-full rounded-full border-2 border-transparent border-l-brand-accent border-b-brand-primary opacity-60"></div>
              </motion.div>
              
              {/* Center YK Monogram */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-lg"
                >
                  YK
                </motion.div>
              </div>
              
              {/* Pulse Effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-6"
            >
              {/* Brand Name */}
              <div className="space-y-2">
                <motion.h1
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl font-display font-bold text-contrast"
                >
                  Yubraj Kurmi
                </motion.h1>
                <p className="text-sm text-readable-secondary font-medium">
                  Full Stack Developer
                </p>
              </div>
              
              {/* Loading Progress */}
              <div className="w-80 mx-auto space-y-4">
                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-full relative"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Progress Percentage */}
                  <div className="flex justify-between items-center mt-2">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={loadingPhase}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-readable-secondary"
                      >
                        {loadingMessages[loadingPhase]}
                      </motion.span>
                    </AnimatePresence>
                    
                    <motion.span
                      key={progress}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      className="text-sm font-medium text-brand-primary"
                    >
                      {Math.round(progress)}%
                    </motion.span>
                  </div>
                </div>
                
                {/* Loading Dots */}
                <div className="flex justify-center items-center space-x-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-brand-primary rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-brand-primary/30 rounded-tl-lg" />
          <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-brand-primary/30 rounded-tr-lg" />
          <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-brand-primary/30 rounded-bl-lg" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-brand-primary/30 rounded-br-lg" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}