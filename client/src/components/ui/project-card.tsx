import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Array<{ name: string; color: string }>;
  demoUrl?: string;
  githubUrl?: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  icon: Icon,
  gradient,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-dark-card/50 backdrop-blur-sm rounded-lg border border-cyber overflow-hidden hover-glow transition-all duration-300 group"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-orbitron text-xl text-cyber-blue">{title}</h3>
          <div className="flex space-x-2">
            {demoUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-surface rounded-lg border border-cyber hover:border-neon-green transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-neon-green" />
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-surface rounded-lg border border-cyber hover:border-neon-green transition-colors"
              >
                <Github className="w-4 h-4 text-neon-green" />
              </motion.a>
            )}
          </div>
        </div>
        
        <div className={`h-48 ${gradient} rounded-lg mb-4 flex items-center justify-center border border-cyber/20 group-hover:border-neon-green/30 transition-colors`}>
          <Icon className="w-16 h-16 text-neon-green opacity-50 group-hover:opacity-75 transition-opacity" />
        </div>
        
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className={`px-3 py-1 ${tech.color} rounded-full text-xs font-mono border`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
