import { motion } from "framer-motion";
import logoImage from "@assets/logo_1751382562428.jpg";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = "md", showText = false, className = "" }: LogoProps) {
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
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Blue Checkmark Logo */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <img
          src={logoImage}
          alt="Logo"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold text-contrast ${textSizeClasses[size]} leading-tight`}>
            Verified Developer
          </span>
          <span className="text-xs text-readable-secondary font-medium">
            Professional Portfolio
          </span>
        </div>
      )}
    </motion.div>
  );
}