import { motion } from "framer-motion";
import TimelineItem from "@/components/ui/timeline";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      period: "2023 - Present",
      color: "bg-neon-green",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      bullets: [
        "Developed and maintained multiple client projects using MERN stack",
        "Built responsive e-commerce website with payment integration using Stripe API",
        "Created portfolio websites for local businesses improving their online presence",
        "Implemented user authentication and authorization systems for web applications"
      ]
    },
    {
      title: "Frontend Developer (Freelance)",
      period: "2022 - 2023",
      color: "bg-cyber-blue",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Bootstrap"],
      bullets: [
        "Developed responsive frontend applications for various clients",
        "Converted design mockups into functional React components",
        "Optimized web performance achieving 90+ Google PageSpeed scores",
        "Collaborated with designers to ensure pixel-perfect implementations"
      ]
    },
    {
      title: "Computer Science Student",
      period: "2021 - Present",
      color: "bg-neon-purple",
      technologies: ["Java", "Python", "Data Structures", "Algorithms", "Database Design"],
      bullets: [
        "Pursuing Bachelor's degree in Computer Science",
        "Completed coursework in Data Structures, Algorithms, and Database Systems",
        "Built academic projects including library management system and student portal",
        "Maintained strong academic performance while working on practical projects"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-surface to-dark-bg pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-orbitron text-4xl font-bold text-white mb-4"
            >
              Professional Experience
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-neon-green to-cyber-blue mx-auto"
            />
          </motion.div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green to-cyber-blue"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <TimelineItem
                  key={experience.title}
                  title={experience.title}
                  period={experience.period}
                  color={experience.color}
                  technologies={experience.technologies}
                  index={index}
                >
                  <ul className="space-y-2">
                    {experience.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start space-x-2">
                        <span className="text-neon-green mt-1">•</span>
                        <span className="text-readable">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
