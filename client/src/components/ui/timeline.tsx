import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  period: string;
  children: ReactNode;
  technologies: string[];
  color: string;
  index: number;
}

export default function TimelineItem({
  title,
  period,
  children,
  technologies,
  color,
  index
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-start space-x-8"
    >
      <div className={`flex-shrink-0 w-4 h-4 ${color} rounded-full border-4 border-dark-bg shadow-lg`}></div>
      <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-cyber flex-1 hover:border-neon-green/50 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="font-orbitron text-xl text-cyber-blue">{title}</h3>
          <span className={`font-mono text-sm ${color.replace('bg-', 'text-')}`}>{period}</span>
        </div>
        <div className="text-slate-300 space-y-2 text-sm leading-relaxed mb-4">
          {children}
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-mono border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
