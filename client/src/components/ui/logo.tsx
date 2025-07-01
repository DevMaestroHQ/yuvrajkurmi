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
            {/* Creative Gradient */}
            <linearGradient id="creativeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="25%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="75%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            
            {/* Code Gradient */}
            <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            
            {/* Glow Effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Creative Container */}
          <g transform="translate(32, 32)">
            {/* Creative Background Shape */}
            <path
              d="M-28 -8 Q-28 -20 -16 -20 L16 -20 Q28 -20 28 -8 L28 8 Q28 20 16 20 L-16 20 Q-28 20 -28 8 Z"
              fill="url(#creativeGradient)"
              opacity="0.08"
            />
            
            {/* Main Y Letter - Illustrated Style */}
            <g>
              {/* Y Base Structure */}
              <path
                d="M-12 -16 L0 -6 L12 -16"
                stroke="url(#creativeGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#glow)"
              />
              <path
                d="M0 -6 L0 16"
                stroke="url(#creativeGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                filter="url(#glow)"
              />
              
              {/* Creative Code Brackets */}
              <g opacity="0.8">
                <path d="M-20 -10 L-22 -8 L-22 8 L-20 10" stroke="url(#codeGradient)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <path d="M20 -10 L22 -8 L22 8 L20 10" stroke="url(#codeGradient)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </g>
              
              {/* Developer Icons */}
              <g opacity="0.7">
                {/* Terminal Window */}
                <rect x="-26" y="-12" width="8" height="6" rx="1" fill="none" stroke="url(#codeGradient)" strokeWidth="1"/>
                <circle cx="-24" cy="-10" r="0.5" fill="url(#codeGradient)"/>
                <circle cx="-22" cy="-10" r="0.5" fill="url(#codeGradient)"/>
                <circle cx="-20" cy="-10" r="0.5" fill="url(#codeGradient)"/>
                
                {/* Code Symbol */}
                <text x="20" y="-8" fontSize="8" fill="url(#codeGradient)" fontFamily="monospace" opacity="0.8">&lt;/&gt;</text>
              </g>
              
              {/* Creative Floating Elements */}
              <g opacity="0.6">
                {/* Pixel-style dots */}
                <rect x="-14" y="-22" width="2" height="2" fill="url(#creativeGradient)"/>
                <rect x="12" y="-22" width="2" height="2" fill="url(#creativeGradient)"/>
                <rect x="-26" y="0" width="2" height="2" fill="url(#creativeGradient)"/>
                <rect x="24" y="0" width="2" height="2" fill="url(#creativeGradient)"/>
                
                {/* Design Elements */}
                <circle cx="-16" cy="14" r="1.5" fill="url(#codeGradient)" opacity="0.8"/>
                <circle cx="16" cy="14" r="1.5" fill="url(#codeGradient)" opacity="0.8"/>
              </g>
              
              {/* Central Creative Hub */}
              <circle cx="0" cy="0" r="3" fill="url(#creativeGradient)" opacity="0.3"/>
              <circle cx="0" cy="4" r="2" fill="url(#codeGradient)" opacity="0.9"/>
              
              {/* Lightning Bolt for Creativity */}
              <path
                d="M-2 -2 L2 -8 L0 -8 L2 -12 L-2 -6 L0 -6 Z"
                fill="url(#creativeGradient)"
                opacity="0.8"
              />
            </g>
            
            {/* Orbiting Creative Elements */}
            <g>
              <circle cx="-24" cy="0" r="1" fill="url(#codeGradient)" opacity="0.7">
                <animateTransform 
                  attributeName="transform" 
                  type="rotate" 
                  values="0 0 0;360 0 0" 
                  dur="15s" 
                  repeatCount="indefinite"/>
              </circle>
              <circle cx="24" cy="0" r="1" fill="url(#codeGradient)" opacity="0.7">
                <animateTransform 
                  attributeName="transform" 
                  type="rotate" 
                  values="180 0 0;540 0 0" 
                  dur="15s" 
                  repeatCount="indefinite"/>
              </circle>
            </g>
            
            {/* Corner Creative Accents */}
            <g opacity="0.5">
              <path d="M-24 -16 L-26 -14 L-22 -14 Z" fill="url(#creativeGradient)"/>
              <path d="M24 -16 L22 -14 L26 -14 Z" fill="url(#creativeGradient)"/>
              <path d="M-24 16 L-26 14 L-22 14 Z" fill="url(#creativeGradient)"/>
              <path d="M24 16 L22 14 L26 14 Z" fill="url(#creativeGradient)"/>
            </g>
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