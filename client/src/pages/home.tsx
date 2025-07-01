import { ArrowRight, Code2, Mail, Github, Linkedin, Download, Star, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/ui/seo-head";

export default function Home() {
  const skills = [
    { name: "React/Next.js", level: "Expert", icon: "⚛️" },
    { name: "Node.js/Express", level: "Advanced", icon: "🟢" },
    { name: "TypeScript", level: "Advanced", icon: "🔷" },
    { name: "MongoDB/PostgreSQL", level: "Advanced", icon: "🗄️" },
    { name: "AWS/Cloud", level: "Intermediate", icon: "☁️" },
    { name: "Docker/DevOps", level: "Intermediate", icon: "🐳" }
  ];

  const achievements = [
    { metric: "25+", label: "Projects Completed", description: "Delivered successfully" },
    { metric: "15+", label: "Happy Clients", description: "Across various industries" },
    { metric: "2+", label: "Years Experience", description: "In full-stack development" },
    { metric: "99%", label: "Success Rate", description: "Client satisfaction" }
  ];

  return (
    <>
      <SEOHead 
        title="✓ Verified Developer | Professional Portfolio | Quality Web Solutions"
        description="Verified Full Stack Developer from Nepal with 3+ years experience in React, Node.js, and modern web technologies. Specialized in quality web solutions and responsive design."
        keywords="verified developer nepal, full stack developer, react developer nepal, node.js developer, typescript, web development nepal, freelance developer kathmandu, portfolio"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-container pt-24 pb-16">
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                <span className="text-adaptive-primary font-medium">Available for new opportunities</span>
              </div>
              
              <h1 className="heading-xl font-display text-contrast">
                Verified Full Stack
                <span className="block text-brand-primary font-bold">Developer</span>
              </h1>
              
              <p className="text-xl text-readable font-body max-w-xl">
                I build exceptional digital experiences with modern technologies. 
                Specialized in React, Node.js, and cloud-native solutions that scale.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-medium text-contrast">4.9/5 Client Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span className="font-medium text-contrast">Top Rated Developer</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <button className="btn-professional btn-primary">
                  <Code2 className="w-5 h-5" />
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              
              <Link href="/contact">
                <button className="btn-professional btn-outline">
                  <Mail className="w-5 h-5" />
                  Let's Talk
                </button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/yubrajkurmi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Github className="w-5 h-5 text-adaptive" />
              </a>
              <a
                href="https://linkedin.com/in/yuvrajkurmi03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-adaptive" />
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-container py-16">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="heading-lg font-display text-contrast mb-4">Technical Expertise</h2>
              <p className="text-readable max-w-2xl mx-auto">
                Proficient in modern technologies and frameworks with hands-on experience in full-stack development
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="card-professional p-4 text-center hover:scale-105 transition-transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <h3 className="font-semibold text-contrast text-sm mb-1">{skill.name}</h3>
                  <span className="text-xs text-brand-primary font-medium">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section-container py-16 bg-muted/30">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="heading-lg font-display text-contrast mb-4">Professional Achievements</h2>
              <p className="text-readable max-w-2xl mx-auto">
                Track record of delivering high-quality solutions and exceeding client expectations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className="text-center space-y-2"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-brand-primary font-display">
                    {achievement.metric}
                  </div>
                  <div className="text-sm font-semibold text-contrast">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-readable-secondary">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="section-container py-16">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="heading-lg font-display text-contrast mb-4">Client Success Stories</h2>
              <p className="text-readable max-w-2xl mx-auto">
                Real feedback from satisfied clients who trusted me with their projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Thapa",
                  role: "Business Owner",
                  company: "Local Restaurant Chain",
                  testimonial: "Yubraj built our online ordering system that increased our sales by 40%. His understanding of local business needs and technical skills made him perfect for our project.",
                  rating: 5,
                  project: "E-commerce Platform",
                  location: "Kathmandu, Nepal"
                },
                {
                  name: "Priya Sharma",
                  role: "Marketing Director", 
                  company: "Digital Agency",
                  testimonial: "Working with Yubraj was fantastic. He delivered our portfolio website ahead of schedule and helped us attract 60% more clients. Highly professional!",
                  rating: 5,
                  project: "Business Website",
                  location: "Pokhara, Nepal"
                },
                {
                  name: "David Wilson",
                  role: "Startup Founder",
                  company: "Remote Tech Company",
                  testimonial: "Yubraj's full-stack skills helped us launch our MVP in just 2 months. His code quality and communication throughout the project were exceptional.",
                  rating: 5,
                  project: "SaaS Application",
                  location: "Remote, International"
                }
              ].map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="card-professional p-6 space-y-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-brand-primary font-medium">{testimonial.project}</span>
                  </div>
                  
                  <p className="text-readable-secondary text-sm italic">
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-medium text-contrast text-sm">{testimonial.name}</div>
                    <div className="text-xs text-readable-secondary">
                      {testimonial.role} at {testimonial.company}
                    </div>
                    <div className="text-xs text-brand-primary">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-container py-16">
          <div className="text-center space-y-6">
            <h2 className="heading-lg font-display text-contrast">Ready to Start Your Project?</h2>
            <p className="text-readable max-w-2xl mx-auto">
              Join satisfied clients who have achieved their goals with my development expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-professional btn-primary">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              
              <a href="/resume.pdf" download className="btn-professional btn-outline">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}