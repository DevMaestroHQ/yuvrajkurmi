import { motion } from "framer-motion";
import TimelineItem from "@/components/ui/timeline";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Experience() {
  const experiences = [
    {
      title: "Mobile and Web Development",
      period: "2023 - Present",
      color: "bg-neon-green",
      technologies: ["React", "Next.js", "React Native"],
      bullets: [
        "Build and maintain front-end features for web applications, such as an air ticketing platform, using React and Next.js",
        "Contribute to the development of the E-Grow - Easy Farming mobile app using React Native",
        "Work under senior developers to adopt modern development workflows and best practices"
      ]
    },
    {
      title: "Python Development",
      period: "2022 - Present",
      color: "bg-cyber-blue",
      technologies: ["Python", "Tkinter", "Streamlit"],
      bullets: [
        "Developed and maintained front-end components for web applications using modern technologies",
        "Collaborated with senior developers to implement new features and improve existing codebase",
        "Gained hands-on experience with modern web development workflows and best practices"
      ]
    },
    {
      title: "React Development",
      period: "2022 - Present",
      color: "bg-neon-purple",
      technologies: ["React", "JavaScript", "Data Analysis"],
      bullets: [
        "Annotated diverse datasets to support AI and machine learning projects, ensuring high-quality data labeling",
        "Worked in remote setting with focus on data quality and accuracy"
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
