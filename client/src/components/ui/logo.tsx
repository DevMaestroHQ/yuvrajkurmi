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
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl"
  };

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Modern Minimalist Y Logo */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="yLogo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#3B82F6" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* Modern Y Design */}
          <g transform="translate(50, 50)" filter="url(#shadow)">
            {/* Y Top Arms */}
            <path
              d="M-20 -25 L0 0 L20 -25"
              stroke="url(#yLogo)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Y Stem */}
            <path
              d="M0 0 L0 25"
              stroke="url(#yLogo)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            {/* Decorative Dot */}
            <circle
              cx="0"
              cy="-30"
              r="3"
              fill="url(#yLogo)"
            />
          </g>
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold text-contrast ${textSizeClasses[size]} leading-tight`}>
            Y Portfolio
          </span>
          <span className="text-xs text-readable-secondary font-medium">
            Full Stack Developer
          </span>
        </div>
      )}
    </motion.div>
  );
}