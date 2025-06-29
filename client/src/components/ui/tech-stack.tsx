import { motion } from "framer-motion";

interface TechStackProps {
  skills: Array<{
    name: string;
    level: number;
    color: string;
    category: string;
  }>;
}

export default function TechStack({ skills }: TechStackProps) {
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="space-y-8">
      {Object.entries(categories).map(([category, categorySkills], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: categoryIndex * 0.2 }}
          className="space-y-4"
        >
          <h4 className="font-mono text-neon-green text-sm uppercase tracking-wider">
            {category}
          </h4>
          <div className="space-y-3">
            {categorySkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-mono text-slate-300">{skill.name}</span>
                  <span className="text-xs text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-dark-surface rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1, 
                      delay: (categoryIndex * 0.2) + (index * 0.1) + 0.3,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
