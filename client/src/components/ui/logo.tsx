import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16", 
    lg: "w-20 h-20"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`${className}`}
    >
      {/* Illustrated Logo SVG */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`${sizeClasses[size]} relative`}
      >
        <svg
          viewBox="0 0 80 80"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#06D6A0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background Circle with Tech Pattern */}
          <circle
            cx="40"
            cy="40"
            r="38"
            fill="url(#mainGradient)"
            opacity="0.1"
          />
          
          {/* Tech Grid Pattern */}
          <defs>
            <pattern id="techGrid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="url(#mainGradient)" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <circle cx="40" cy="40" r="35" fill="url(#techGrid)" opacity="0.4"/>
          
          {/* Central Illustrated YK */}
          <g transform="translate(40, 40)">
            {/* Decorative Code Brackets */}
            <path
              d="M-25 -15 L-30 -10 L-30 10 L-25 15"
              stroke="url(#accentGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#glow)"
            />
            <path
              d="M25 -15 L30 -10 L30 10 L25 15"
              stroke="url(#accentGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#glow)"
            />
            
            {/* Y Letter - Artistic Design */}
            <g transform="translate(-8, 0)">
              <path
                d="M-8 -12 L0 0 L8 -12 M0 0 L0 12"
                stroke="url(#mainGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#glow)"
              />
              {/* Y decoration dots */}
              <circle cx="-6" cy="-8" r="1.5" fill="url(#accentGradient)" opacity="0.8"/>
              <circle cx="6" cy="-8" r="1.5" fill="url(#accentGradient)" opacity="0.8"/>
              <circle cx="0" cy="8" r="1.5" fill="url(#accentGradient)" opacity="0.8"/>
            </g>
            
            {/* K Letter - Artistic Design */}
            <g transform="translate(8, 0)">
              <path
                d="M-4 -12 L-4 12 M-4 0 L8 -12 M-4 0 L8 12"
                stroke="url(#mainGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#glow)"
              />
              {/* K decoration dots */}
              <circle cx="-4" cy="-8" r="1.5" fill="url(#accentGradient)" opacity="0.8"/>
              <circle cx="4" cy="-6" r="1.5" fill="url(#accentGradient)" opacity="0.8"/>
              <circle cx="4" cy="6" r="1.5" fill="url(#accentGradient)" opacity="0.8"/>
              <circle cx="-4" cy="8" r="1.5" fill="url(#accentGradient)" opacity="0.8"/>
            </g>
          </g>
          
          {/* Orbital Elements */}
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke="url(#mainGradient)"
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.4"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 40 40"
              to="360 40 40"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Floating Tech Icons */}
          <g opacity="0.6">
            {/* Code symbol */}
            <text x="15" y="20" fontSize="8" fill="url(#accentGradient)" fontFamily="monospace">&lt;/&gt;</text>
            {/* Gear symbol */}
            <circle cx="65" cy="25" r="3" fill="none" stroke="url(#accentGradient)" strokeWidth="1"/>
            <circle cx="65" cy="25" r="1.5" fill="url(#accentGradient)"/>
            {/* Database symbol */}
            <rect x="12" y="55" width="8" height="6" rx="2" fill="none" stroke="url(#accentGradient)" strokeWidth="1"/>
            <line x1="14" y1="57" x2="18" y2="57" stroke="url(#accentGradient)" strokeWidth="1"/>
            {/* Lightning bolt */}
            <path d="M60 60 L65 55 L62 55 L67 50 L62 55 L65 55 Z" fill="url(#accentGradient)" opacity="0.8"/>
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}