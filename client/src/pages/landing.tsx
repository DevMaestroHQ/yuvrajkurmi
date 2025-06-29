import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Code, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Landing() {
  const [, setLocation] = useLocation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Crafting beautiful, scalable solutions with cutting-edge technologies"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized applications that deliver exceptional user experiences"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Building digital products that reach millions of users worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg relative overflow-hidden">
      {/* Solid Background with Subtle Pattern */}
      <div className="absolute inset-0 bg-dark-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff7f' fill-opacity='0.05'%3E%3Ccircle cx='20' cy='20' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
        
      {/* Subtle animated elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-neon-green rounded-full"
          animate={{
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
        />
      ))}

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto px-6">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-32 h-32 mx-auto mb-8"
          >
            <svg viewBox="0 0 120 120" className="w-full h-full">
              <defs>
                <linearGradient id="landingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ff7f" />
                  <stop offset="50%" stopColor="#00d4ff" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="#0f172a"
                stroke="url(#landingGradient)"
                strokeWidth="2"
              />
              <polygon
                points="60,25 85,40 85,80 60,95 35,80 35,40"
                fill="none"
                stroke="url(#landingGradient)"
                strokeWidth="3"
              />
              <text
                x="60"
                y="70"
                textAnchor="middle"
                className="text-xl font-orbitron font-bold"
                fill="url(#landingGradient)"
              >
                YK
              </text>
            </svg>
          </motion.div>

          {/* Static Title (removed typewriter) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-orbitron font-bold gradient-text mb-4">
              YUBRAJ KURMI
            </h1>
            <div className="text-xl md:text-2xl text-cyber-blue font-mono mb-6">
              Transforming ideas into digital reality...
            </div>
          </motion.div>

          {/* Feature Cards */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, staggerChildren: 0.2 }}
                className="grid md:grid-cols-3 gap-6 mb-12"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="professional-card p-6 hover:scale-105 transition-transform duration-300"
                  >
                    <feature.icon className="w-12 h-12 text-neon-green mx-auto mb-4" />
                    <h3 className="text-lg font-orbitron font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Call to Action */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-6"
              >
                <div className="text-xl text-slate-300 mb-8">
                  Let's create something amazing together
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => setLocation("/")}
                      className="bg-neon-green text-dark-bg hover:bg-neon-green/90 font-mono text-lg px-8 py-3 border-2 border-neon-green transition-all duration-300"
                    >
                      Enter Portfolio
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => setLocation("/contact")}
                      variant="outline"
                      className="border-2 border-cyber hover:border-neon-green hover:text-neon-green bg-dark-bg text-slate-300 font-mono text-lg px-8 py-3 transition-all duration-300"
                    >
                      Start Project
                    </Button>
                  </motion.div>
                </div>

                <div className="text-sm text-slate-500 mt-8">
                  <div className="flex justify-center space-x-8">
                    <div>🎯 50+ Projects Launched</div>
                    <div>⚡ Performance Optimized</div>
                    <div>🌟 Award-Winning Developer</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-green rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}