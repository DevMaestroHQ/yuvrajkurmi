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
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full flex items-center justify-center border border-border group-hover:border-brand-primary transition-all duration-300">
        <Icon className="w-8 h-8 text-brand-primary" />
      </div>
      <motion.div
        className="text-3xl font-bold text-contrast mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.3 }}
      >
        {value}
      </motion.div>
      <div className="text-readable text-base">{label}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: Code,
      value: "15+",
      label: "Projects Completed",
      color: "neon-green",
      delay: 0
    },
    {
      icon: Users,
      value: "10+",
      label: "Happy Clients",
      color: "cyber-blue", 
      delay: 0.1
    },
    {
      icon: Award,
      value: "2+",
      label: "Years Experience",
      color: "neon-purple",
      delay: 0.2
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Available",
      color: "yellow-400",
      delay: 0.3
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="heading-md text-contrast mb-4">Professional Metrics</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto"></div>
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