import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  const phases = [
    { text: 'Initializing...', duration: 600 },
    { text: 'Loading portfolio...', duration: 500 },
    { text: 'Almost ready...', duration: 400 },
    { text: 'Welcome!', duration: 300 }
  ];

  useEffect(() => {
    let phaseIndex = 0;
    
    const advancePhase = () => {
      if (phaseIndex < phases.length - 1) {
        phaseIndex++;
        setLoadingPhase(phaseIndex);
        setTimeout(advancePhase, phases[phaseIndex].duration);
      } else {
        setTimeout(() => setIsLoading(false), 400);
      }
    };

    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return Math.min(prev + 1.2, 100);
        return 100;
      });
    }, 25);

    // Start phase progression
    setTimeout(advancePhase, phases[0].duration);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 bg-background flex items-center justify-center z-50"
        >
          <div className="text-center max-w-md mx-auto p-8">
            {/* Modern Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-20 h-20 mx-auto mb-8 relative"
            >
              {/* Spinning rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="w-full h-full rounded-full border-2 border-brand-primary/30 border-t-brand-primary"></div>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2"
              >
                <div className="w-full h-full rounded-full border-2 border-brand-secondary/30 border-r-brand-secondary"></div>
              </motion.div>
              
              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">YK</span>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-2xl font-semibold text-foreground mb-2">
                Yubraj Kurmi
              </h1>
              <div className="text-sm text-muted-foreground">
                Senior Full Stack Developer
              </div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex justify-between text-xs text-muted-foreground mb-3">
                <span>Loading</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Status Messages */}
            <motion.div
              key={loadingPhase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-muted-foreground text-sm mb-6"
            >
              {phases[loadingPhase].text}
            </motion.div>

            {/* Animated Dots */}
            <div className="flex justify-center space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.3, 1], 
                    opacity: [0.4, 1, 0.4] 
                  }}
                  transition={{ 
                    duration: 1.2, 
                    repeat: Infinity, 
                    delay: i * 0.15 
                  }}
                  className="w-1.5 h-1.5 bg-brand-primary rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}