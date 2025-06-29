import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
  description: string;
}

interface SkillsRadarProps {
  skills: Skill[];
}

export default function SkillsRadar({ skills }: SkillsRadarProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  const maxLevel = 100;

  return (
    <div className="glass-card p-8 relative overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="font-orbitron text-2xl text-white mb-2">
          Technical Proficiency Matrix
        </h3>
        <p className="text-readable">Interactive skill assessment based on real project experience</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Radar Chart */}
        <div className="relative h-80 flex items-center justify-center">
          <svg width="300" height="300" className="transform -rotate-90">
            {/* Grid circles */}
            {[20, 40, 60, 80, 100].map((radius) => (
              <circle
                key={radius}
                cx="150"
                cy="150"
                r={radius * 1.2}
                fill="none"
                stroke="rgba(0, 255, 127, 0.1)"
                strokeWidth="1"
              />
            ))}
            
            {/* Grid lines */}
            {skills.map((_, index) => {
              const angle = (index * 360) / skills.length;
              const x = 150 + Math.cos((angle * Math.PI) / 180) * 120;
              const y = 150 + Math.sin((angle * Math.PI) / 180) * 120;
              return (
                <line
                  key={index}
                  x1="150"
                  y1="150"
                  x2={x}
                  y2={y}
                  stroke="rgba(0, 255, 127, 0.1)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Skill points */}
            {skills.map((skill, index) => {
              const angle = (index * 360) / skills.length;
              const radius = (skill.level / maxLevel) * 120;
              const x = 150 + Math.cos((angle * Math.PI) / 180) * radius;
              const y = 150 + Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <g key={skill.name}>
                  <circle
                    cx={x}
                    cy={y}
                    r={hoveredSkill === skill.name ? 8 : 6}
                    fill={skill.color}
                    stroke={skill.color}
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  />
                  
                  <text
                    x={150 + Math.cos((angle * Math.PI) / 180) * 140}
                    y={150 + Math.sin((angle * Math.PI) / 180) * 140}
                    fill="white"
                    fontSize="12"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-mono"
                  >
                    {skill.name}
                  </text>
                </g>
              );
            })}

            {/* Connecting lines */}
            <polygon
              points={skills.map((skill, index) => {
                const angle = (index * 360) / skills.length;
                const radius = (skill.level / maxLevel) * 120;
                const x = 150 + Math.cos((angle * Math.PI) / 180) * radius;
                const y = 150 + Math.sin((angle * Math.PI) / 180) * radius;
                return `${x},${y}`;
              }).join(' ')}
              fill="rgba(0, 255, 127, 0.1)"
              stroke="var(--neon-green)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Skill Details */}
        <div className="space-y-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                hoveredSkill === skill.name 
                  ? 'border-neon-green bg-green-500/10 scale-105' 
                  : 'border-cyber/30 bg-dark-surface/30'
              }`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ y: -2 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-mono text-neon-green font-semibold">{skill.name}</h4>
                <span className="text-sm text-cyber-blue">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-dark-bg rounded-full h-2 mb-2">
                <motion.div
                  className="h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              
              <p className="text-sm text-readable">{skill.description}</p>
              <span className="text-xs text-cyber-cyan">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}