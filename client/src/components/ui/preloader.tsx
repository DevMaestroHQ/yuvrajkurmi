import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    'Initializing modules...',
    'Loading portfolio data...',
    'Establishing secure connections...',
    'Optimizing user experience...',
    'System ready!'
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(messageInterval);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          return prev;
        }
      });
    }, 800);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50"
        >
          <div className="text-center">
            <div className="font-mono text-neon-green mb-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl mb-2 font-orbitron"
              >
                BOOTING PORTFOLIO SYSTEM...
              </motion.div>
              <div className="w-64 h-2 bg-dark-surface rounded-full overflow-hidden">
                <motion.div
                  className="loading-bar h-full w-full"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </div>
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-slate-400 font-mono text-sm mt-4"
            >
              {messages[currentMessage]}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
