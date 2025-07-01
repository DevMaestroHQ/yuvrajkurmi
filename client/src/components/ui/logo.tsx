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
          viewBox="0 0 48 48"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Simple Clean Gradient */}
            <linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
          
          {/* Simple Clean Container */}
          <g transform="translate(24, 24)">
            {/* Clean Background Circle */}
            <circle 
              cx="0" 
              cy="0" 
              r="20" 
              fill="url(#simpleGradient)" 
              opacity="0.1"
            />
            
            {/* Simple Y Letter */}
            <g>
              {/* Y Main Structure - Clean Lines */}
              <path
                d="M-8 -10 L0 -2 L8 -10"
                stroke="url(#simpleGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M0 -2 L0 10"
                stroke="url(#simpleGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              
              {/* Simple Accent Dot */}
              <circle 
                cx="0" 
                cy="6" 
                r="1.5" 
                fill="url(#simpleGradient)" 
                opacity="0.8"
              />
            </g>
            
            {/* Minimal Border */}
            <circle 
              cx="0" 
              cy="0" 
              r="18" 
              fill="none" 
              stroke="url(#simpleGradient)" 
              strokeWidth="1.5" 
              opacity="0.4"
            />
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