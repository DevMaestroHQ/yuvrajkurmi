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
      className="professional-card overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-xl font-bold text-contrast">{title}</h3>
          <div className="flex space-x-2">
            {demoUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-lg border border-border hover:border-brand-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-brand-primary" />
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-lg border border-border hover:border-brand-primary transition-colors"
              >
                <Github className="w-4 h-4 text-brand-primary" />
              </motion.a>
            )}
          </div>
        </div>
        
        <div className={`h-48 ${gradient} rounded-lg mb-4 flex items-center justify-center border border-border/20 group-hover:border-brand-primary/30 transition-colors`}>
          <Icon className="w-16 h-16 text-brand-primary opacity-60 group-hover:opacity-90 transition-opacity" />
        </div>
        
        <p className="text-readable text-base mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className={`px-3 py-1 ${tech.color} rounded-full text-sm font-mono font-medium border text-visible`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
