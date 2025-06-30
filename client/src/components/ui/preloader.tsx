import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return Math.min(prev + 10, 100);
        return 100;
      });
    }, 40);

    // Complete loading under 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

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
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 bg-background flex items-center justify-center z-50"
        >
          <div className="text-center">
            {/* Fast Loading Spinner */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-16 h-16 mx-auto mb-6 relative"
            >
              {/* Fast spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="w-full h-full rounded-full border-4 border-transparent border-t-brand-primary"></div>
              </motion.div>
              
              {/* Center dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-3 h-3 bg-brand-primary rounded-full"
                />
              </div>
            </motion.div>

            {/* Minimal Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="space-y-2"
            >
              <div className="text-lg font-display font-semibold text-contrast">
                Yubraj Kurmi
              </div>
              
              {/* Fast Progress Bar */}
              <div className="w-48 mx-auto">
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}