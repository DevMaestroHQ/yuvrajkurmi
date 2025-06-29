import { motion } from "framer-motion";
import TimelineItem from "@/components/ui/timeline";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      period: "2022 - Present",
      color: "bg-neon-green",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
      bullets: [
        "Led development of enterprise healthcare platform serving 50,000+ users with 99.9% uptime",
        "Architected scalable microservices reducing API response times by 65%",
        "Mentored 3 junior developers and established CI/CD pipelines reducing deployment time by 70%",
        "Built real-time trading dashboard processing $2M+ daily transactions with zero downtime"
      ]
    },
    {
      title: "Full Stack Developer",
      period: "2020 - 2022",
      color: "bg-cyber-blue",
      technologies: ["React", "Next.js", "Python", "MongoDB", "Docker"],
      bullets: [
        "Developed e-commerce platform handling $500K+ monthly transactions with 45% conversion rate increase",
        "Implemented advanced search and recommendation algorithms improving user engagement by 40%",
        "Optimized database queries reducing page load times from 3s to 800ms",
        "Built automated testing suite achieving 95% code coverage"
      ]
    },
    {
      title: "Frontend Developer",
      period: "2019 - 2020",
      color: "bg-neon-purple",
      technologies: ["React", "JavaScript", "Redux", "Jest", "Webpack"],
      bullets: [
        "Built responsive web applications for fintech startup serving 10,000+ active users",
        "Implemented complex data visualizations using D3.js and Chart.js",
        "Collaborated with UX team to improve user satisfaction scores by 35%",
        "Maintained high code quality with comprehensive unit and integration testing"
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
              ./experience
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
