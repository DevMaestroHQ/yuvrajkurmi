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
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Ultra Modern Geometric Logo */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Primary Brand Gradient */}
            <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="30%" stopColor="#3B82F6" />
              <stop offset="70%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            
            {/* Secondary Accent Gradient */}
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            
            {/* Professional Shadow */}
            <filter id="professionalShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="rgba(30, 64, 175, 0.2)"/>
            </filter>
          </defs>
          
          {/* Main Logo Container - Hexagonal Base */}
          <g transform="translate(32, 32)">
            {/* Background Hexagon */}
            <polygon
              points="-24,-14 -12,-26 12,-26 24,-14 24,14 12,26 -12,26 -24,14"
              fill="url(#brandGradient)"
              opacity="0.08"
              filter="url(#professionalShadow)"
            />
            
            {/* Primary Hexagon Border */}
            <polygon
              points="-20,-12 -10,-22 10,-22 20,-12 20,12 10,22 -10,22 -20,12"
              fill="none"
              stroke="url(#brandGradient)"
              strokeWidth="2"
              opacity="0.6"
            />
            
            {/* Inner Design Elements */}
            <g>
              {/* Y Letter - Professional Geometric */}
              <g transform="translate(-10, 0)">
                {/* Y Main Structure */}
                <path
                  d="M-8 -12 L0 -4 L8 -12 M0 -4 L0 12"
                  stroke="url(#brandGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Y Accent */}
                <circle cx="0" cy="8" r="2" fill="url(#accentGradient)" opacity="0.8"/>
              </g>
              
              {/* K Letter - Professional Geometric */}
              <g transform="translate(10, 0)">
                {/* K Main Structure */}
                <path
                  d="M-6 -12 L-6 12 M-6 -2 L6 -12 M-6 -2 L6 12"
                  stroke="url(#brandGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* K Accents */}
                <circle cx="3" cy="-6" r="1.5" fill="url(#accentGradient)" opacity="0.7"/>
                <circle cx="3" cy="6" r="1.5" fill="url(#accentGradient)" opacity="0.7"/>
              </g>
            </g>
            
            {/* Decorative Corner Elements */}
            <g opacity="0.5">
              <rect x="-18" y="-8" width="3" height="3" rx="1.5" fill="url(#accentGradient)"/>
              <rect x="15" y="-8" width="3" height="3" rx="1.5" fill="url(#accentGradient)"/>
              <rect x="-18" y="5" width="3" height="3" rx="1.5" fill="url(#accentGradient)"/>
              <rect x="15" y="5" width="3" height="3" rx="1.5" fill="url(#accentGradient)"/>
            </g>
            
            {/* Central Connection Dot */}
            <circle cx="0" cy="0" r="3" fill="url(#brandGradient)" opacity="0.3"/>
            <circle cx="0" cy="0" r="1.5" fill="url(#brandGradient)" opacity="0.8"/>
            
            {/* Outer Ring with Subtle Animation */}
            <polygon
              points="-22,-13 -11,-24 11,-24 22,-13 22,13 11,24 -11,24 -22,13"
              fill="none"
              stroke="url(#accentGradient)"
              strokeWidth="1"
              strokeDasharray="3,5"
              opacity="0.3"
            />
          </g>
          
          {/* Professional Tech Dots */}
          <g opacity="0.4">
            <circle cx="8" cy="8" r="1" fill="url(#brandGradient)"/>
            <circle cx="56" cy="8" r="1" fill="url(#brandGradient)"/>
            <circle cx="8" cy="56" r="1" fill="url(#brandGradient)"/>
            <circle cx="56" cy="56" r="1" fill="url(#brandGradient)"/>
          </g>
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold text-contrast ${textSizeClasses[size]} leading-tight`}>
            Yubraj Kurmi
          </span>
          <span className="text-xs text-readable-secondary font-medium">
            Full Stack Developer
          </span>
        </div>
      )}
    </div>
  );
}