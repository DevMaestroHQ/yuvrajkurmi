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
          {/* Black circular border */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#000000"
            strokeWidth="4"
            fill="#ffffff"
          />
          
          {/* Y letter - black design */}
          <path
            d="M30 25 L50 45 L70 25 M50 45 L50 75"
            stroke="#000000"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* K letter design */}
          <path
            d="M20 20 L20 80 M20 50 L35 35 M20 50 L35 65"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Professional accent */}
          <rect
            x="75"
            y="75"
            width="8"
            height="8"
            fill="#000000"
          />
        </svg>
      </motion.div>

      {/* Clear Logo Text */}
      {showText && (
        <div className="font-orbitron font-bold">
          <span className={`${textSizeClasses[size]} text-black font-bold`}>
            YUBRAJ KURMI
          </span>
          <div className="text-sm text-gray-700 font-mono font-medium">
            Full Stack Developer
          </div>
        </div>
      )}
    </motion.div>
  );
}