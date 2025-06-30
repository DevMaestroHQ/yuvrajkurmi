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
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-3 ${className}`}
    >
      {/* Modern Minimalist Logo */}
      <motion.div
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`${sizeClasses[size]} relative flex-shrink-0`}
      >
        <svg
          viewBox="0 0 48 48"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Modern Gradient */}
            <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            
            {/* Shadow Filter */}
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(59, 130, 246, 0.3)"/>
            </filter>
            
            {/* Subtle Glow */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background Circle */}
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="url(#modernGradient)"
            opacity="0.1"
            filter="url(#shadow)"
          />
          
          {/* Main Circle Border */}
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="url(#modernGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />
          
          {/* YK Monogram */}
          <g transform="translate(24, 24)" filter="url(#glow)">
            {/* Y Letter - Modern Geometric */}
            <g transform="translate(-8, 0)">
              <path
                d="M-6 -8 L0 -2 L6 -8 M0 -2 L0 8"
                stroke="url(#modernGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Y Accent Dot */}
              <circle cx="0" cy="6" r="1.5" fill="url(#modernGradient)" opacity="0.8"/>
            </g>
            
            {/* K Letter - Modern Geometric */}
            <g transform="translate(8, 0)">
              <path
                d="M-4 -8 L-4 8 M-4 -1 L4 -8 M-4 -1 L4 8"
                stroke="url(#modernGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* K Accent Dots */}
              <circle cx="2" cy="-4" r="1" fill="url(#modernGradient)" opacity="0.6"/>
              <circle cx="2" cy="4" r="1" fill="url(#modernGradient)" opacity="0.6"/>
            </g>
          </g>
          
          {/* Subtle Decorative Elements */}
          <g opacity="0.4">
            {/* Corner Tech Elements */}
            <rect x="6" y="6" width="2" height="2" rx="1" fill="url(#modernGradient)"/>
            <rect x="40" y="6" width="2" height="2" rx="1" fill="url(#modernGradient)"/>
            <rect x="6" y="40" width="2" height="2" rx="1" fill="url(#modernGradient)"/>
            <rect x="40" y="40" width="2" height="2" rx="1" fill="url(#modernGradient)"/>
          </g>
          
          {/* Rotating Ring Animation */}
          <circle
            cx="24"
            cy="24"
            r="18"
            fill="none"
            stroke="url(#modernGradient)"
            strokeWidth="0.5"
            strokeDasharray="2,6"
            opacity="0.3"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 24 24"
              to="360 24 24"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </motion.div>

      {/* Logo Text */}
      {showText && (
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className={`font-display font-bold text-contrast ${textSizeClasses[size]} leading-tight`}>
            Yubraj Kurmi
          </span>
          <span className="text-xs text-readable-secondary font-medium">
            Full Stack Developer
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}