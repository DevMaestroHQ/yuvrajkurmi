import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);

  const messages = [
    'Initializing quantum processors...',
    'Loading neural networks...',
    'Establishing secure handshake...',
    'Compiling portfolio matrix...',
    'Optimizing user interface...',
    'Portfolio system online!'
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 2;
        return 100;
      });
    }, 100);

    // Message cycling
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(messageInterval);
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          return prev;
        }
      });
    }, 800);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card flex items-center justify-center z-50"
        >
          <div className="text-center max-w-lg mx-auto p-8">
            {/* Logo Animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-8"
            >
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <defs>
                  <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ff7f" />
                    <stop offset="50%" stopColor="#00d4ff" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="url(#preloaderGradient)"
                  strokeWidth="3"
                  strokeDasharray="20,5"
                />
                <polygon
                  points="60,25 85,40 85,80 60,95 35,80 35,40"
                  fill="rgba(0,255,127,0.1)"
                  stroke="url(#preloaderGradient)"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-orbitron font-bold gradient-text mb-2">
                PORTFOLIO.EXE
              </h1>
              <div className="text-sm font-mono text-slate-400">
                Yubraj Kurmi | Senior Full Stack Developer
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-mono text-neon-green mb-2">
                <span>LOADING...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-3 bg-dark-surface rounded-full overflow-hidden cyber-border">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-green via-cyber-blue to-neon-purple rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Status Messages */}
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="text-slate-300 font-mono text-sm"
            >
              <span className="text-neon-green mr-2">{'>'}</span>
              {messages[currentMessage]}
            </motion.div>

            {/* Animated Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.2 
                  }}
                  className="w-2 h-2 bg-neon-green rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
