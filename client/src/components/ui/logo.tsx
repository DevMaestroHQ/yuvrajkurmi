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
      className={`${className}`}
    >
      {/* Simple Logo SVG */}
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`${sizeClasses[size]} relative`}
      >
        <svg
          viewBox="0 0 80 80"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          
          {/* Modern hexagonal background */}
          <path
            d="M40 10 L65 25 L65 55 L40 70 L15 55 L15 25 Z"
            fill="url(#backgroundGradient)"
            stroke="url(#logoGradient)"
            strokeWidth="2"
          />
          
          {/* Inner glow effect */}
          <path
            d="M40 15 L60 27.5 L60 52.5 L40 65 L20 52.5 L20 27.5 Z"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="1"
            opacity="0.3"
          />
          
          {/* YK Monogram - Bold and Modern */}
          <g fill="url(#logoGradient)">
            {/* Y letter - more geometric */}
            <path
              d="M25 30 L32 40 L39 30 M32 40 L32 50"
              stroke="url(#logoGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* K letter - modern angular design */}
            <path
              d="M45 30 L45 50 M45 40 L55 30 M45 40 L55 50"
              stroke="url(#logoGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
          
          {/* Corner accent dots */}
          <circle cx="25" cy="25" r="1.5" fill="url(#logoGradient)" opacity="0.6" />
          <circle cx="55" cy="25" r="1.5" fill="url(#logoGradient)" opacity="0.6" />
          <circle cx="25" cy="55" r="1.5" fill="url(#logoGradient)" opacity="0.6" />
          <circle cx="55" cy="55" r="1.5" fill="url(#logoGradient)" opacity="0.6" />
        </svg>
      </motion.div>
    </motion.div>
  );
}