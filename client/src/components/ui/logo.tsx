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
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.6 }}
        className={`${sizeClasses[size]} relative`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Clean circular border */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#00ff7f"
            strokeWidth="3"
            fill="none"
          />
          
          {/* Y letter - clean design */}
          <path
            d="M30 25 L50 45 L70 25 M50 45 L50 75"
            stroke="#00ff7f"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Clean accent dot */}
          <circle
            cx="75"
            cy="25"
            r="3"
            fill="#00bcd4"
          />
        </svg>
      </motion.div>

      {/* Clear Logo Text */}
      {showText && (
        <div className="font-orbitron font-bold">
          <span className={`${textSizeClasses[size]} text-white`}>
            YUBRAJ KURMI
          </span>
          <div className="text-sm text-gray-300 font-mono font-normal">
            Full Stack Developer
          </div>
        </div>
      )}
    </motion.div>
  );
}