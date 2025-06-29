import { motion } from "framer-motion";
import { Code, Users, Award, Clock } from "lucide-react";

interface StatItemProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  color: string;
  delay: number;
}

function StatItem({ icon: Icon, value, label, color, delay }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center group"
    >
      <div className={`w-16 h-16 mx-auto mb-4 bg-${color}/20 rounded-full flex items-center justify-center border border-${color}/30 group-hover:border-${color} transition-all duration-300`}>
        <Icon className={`w-8 h-8 text-${color}`} />
      </div>
      <motion.div
        className={`text-3xl font-orbitron font-bold text-${color} mb-2`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.3 }}
      >
        {value}
      </motion.div>
      <div className="text-muted-readable font-mono text-base">{label}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: Code,
      value: "25+",
      label: "Enterprise Projects",
      color: "neon-green",
      delay: 0
    },
    {
      icon: Users,
      value: "5+",
      label: "Years Experience",
      color: "cyber-blue", 
      delay: 0.1
    },
    {
      icon: Award,
      value: "100%",
      label: "Client Satisfaction",
      color: "neon-purple",
      delay: 0.2
    },
    {
      icon: Clock,
      value: "99.9%",
      label: "Uptime Achieved",
      color: "yellow-400",
      delay: 0.3
    }
  ];

  return (
    <section className="py-16 bg-dark-surface/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-orbitron text-2xl text-cyber-blue mb-4">./portfolio_stats</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-green to-cyber-blue mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}