import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center space-x-3 ${className}`}
    >
      {/* Logo SVG */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
        className={`${sizeClasses[size]} relative`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer ring with gradient */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient1)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse-glow"
          />
          
          {/* Inner hexagon */}
          <polygon
            points="50,15 75,30 75,60 50,75 25,60 25,30"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="url(#gradient3)"
            opacity="0.8"
          />
          
          {/* Central Y */}
          <path
            d="M35 35 L50 50 L65 35 M50 50 L50 65"
            stroke="#06d6a0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_10px_rgba(6,214,160,0.8)]"
          />
          
          {/* Central K */}
          <path
            d="M70 35 L70 65 M70 50 L85 35 M70 50 L85 65"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06d6a0" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06d6a0" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <radialGradient id="gradient3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(6,214,160,0.1)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.1)" />
            </radialGradient>
          </defs>
          
          {/* Rotating dots */}
          <motion.circle
            cx="50"
            cy="10"
            r="2"
            fill="#06d6a0"
            animate={{ rotate: 360 }}
            style={{ transformOrigin: "50px 50px" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="90"
            cy="50"
            r="1.5"
            fill="#3b82f6"
            animate={{ rotate: -360 }}
            style={{ transformOrigin: "50px 50px" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>

      {/* Logo Text */}
      {showText && (
        <div className="font-orbitron font-bold">
          <motion.span
            className={`${textSizeClasses[size]} text-neon-green glow-text`}
            whileHover={{ textShadow: "0 0 20px currentColor" }}
          >
            YK
          </motion.span>
          <motion.span
            className={`${textSizeClasses[size]} text-cyber-blue`}
            whileHover={{ textShadow: "0 0 20px currentColor" }}
          >
            _DEV
          </motion.span>
        </div>
      )}
    </motion.div>
  );
}