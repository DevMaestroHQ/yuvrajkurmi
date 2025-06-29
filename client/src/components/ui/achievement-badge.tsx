import { motion } from "framer-motion";
import { Award, Star, Target, Trophy, Code, Users } from "lucide-react";

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: "award" | "star" | "target" | "trophy" | "code" | "users";
  color: string;
  delay?: number;
}

export default function AchievementBadge({ title, description, icon, color, delay = 0 }: AchievementBadgeProps) {
  const icons = {
    award: Award,
    star: Star,
    target: Target,
    trophy: Trophy,
    code: Code,
    users: Users
  };

  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className={`bg-dark-card/50 backdrop-blur-sm p-4 rounded-lg border border-cyber hover:border-${color} transition-all duration-300 group`}
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className={`w-10 h-10 bg-${color}/20 rounded-lg flex items-center justify-center group-hover:bg-${color}/30 transition-colors`}>
          <Icon className={`w-5 h-5 text-${color}`} />
        </div>
        <h4 className="font-mono text-base text-readable font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-muted-readable leading-relaxed">{description}</p>
    </motion.div>
  );
}