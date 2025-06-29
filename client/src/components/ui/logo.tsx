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
          viewBox="0 0 60 60"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ff7f" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
          
          {/* Simple circular background */}
          <circle
            cx="30"
            cy="30"
            r="28"
            fill="#1a1a2e"
            stroke="url(#logoGradient)"
            strokeWidth="2"
          />
          
          {/* YK Monogram */}
          <g>
            {/* Y letter */}
            <path
              d="M20 20 L25 25 L30 20 M25 25 L25 40"
              stroke="url(#logoGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* K letter */}
            <path
              d="M35 20 L35 40 M35 30 L42 23 M35 30 L42 37"
              stroke="url(#logoGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}