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
      {/* Modern Logo SVG */}
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`${sizeClasses[size]} relative floating-element`}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ff7f" />
              <stop offset="50%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#16213e" />
            </linearGradient>
          </defs>
          
          {/* Outer ring with gradient */}
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="url(#backgroundGradient)"
            stroke="url(#logoGradient)"
            strokeWidth="3"
          />
          
          {/* Inner hexagon shape */}
          <polygon
            points="60,25 85,40 85,80 60,95 35,80 35,40"
            fill="rgba(0,255,127,0.1)"
            stroke="url(#logoGradient)"
            strokeWidth="2"
          />
          
          {/* YK Monogram - modern design */}
          <g fill="url(#logoGradient)">
            {/* Y letter */}
            <path
              d="M45 45 L55 55 L65 45 M55 55 L55 75"
              stroke="url(#logoGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* K letter */}
            <path
              d="M70 45 L70 75 M70 60 L80 50 M70 60 L80 70"
              stroke="url(#logoGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
          
          {/* Decorative code brackets */}
          <g stroke="url(#logoGradient)" strokeWidth="2" fill="none" opacity="0.6">
            <path d="M30 35 L25 40 L30 45" strokeLinecap="round" />
            <path d="M90 35 L95 40 L90 45" strokeLinecap="round" />
            <path d="M30 75 L25 80 L30 85" strokeLinecap="round" />
            <path d="M90 75 L95 80 L90 85" strokeLinecap="round" />
          </g>
          
          {/* Tech dots pattern */}
          <circle cx="40" cy="30" r="2" fill="url(#logoGradient)" opacity="0.8" />
          <circle cx="80" cy="30" r="2" fill="url(#logoGradient)" opacity="0.8" />
          <circle cx="40" cy="90" r="2" fill="url(#logoGradient)" opacity="0.8" />
          <circle cx="80" cy="90" r="2" fill="url(#logoGradient)" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Professional Logo Text */}
      {showText && (
        <div className="font-orbitron font-bold">
          <span className={`${textSizeClasses[size]} gradient-text font-bold`}>
            YUBRAJ KURMI
          </span>
          <div className="text-sm text-neon-green font-mono font-medium">
            Senior Full Stack Developer
          </div>
        </div>
      )}
    </motion.div>
  );
}