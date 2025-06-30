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
          viewBox="0 0 64 64"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(221.2, 83.2%, 53.3%)" />
              <stop offset="100%" stopColor="hsl(262.1, 83.3%, 57.8%)" />
            </linearGradient>
          </defs>
          
          {/* Modern circular background */}
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="hsl(var(--background))"
            stroke="url(#logoGradient)"
            strokeWidth="2"
          />
          
          {/* YK Monogram - Clean and Professional */}
          <g>
            {/* Y letter */}
            <path
              d="M20 22 L26 30 L32 22 M26 30 L26 42"
              stroke="url(#logoGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* K letter */}
            <path
              d="M38 22 L38 42 M38 32 L46 22 M38 32 L46 42"
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