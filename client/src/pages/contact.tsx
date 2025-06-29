import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { fadeInUp, slideInLeft, slideInRight, staggerChildren } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "developerrajir@gmail.com",
      color: "text-neon-green",
      bgColor: "bg-green-500/20"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977-9824423560",
      color: "text-cyber-blue",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Devdaha, Rupandehi",
      color: "text-neon-purple",
      bgColor: "bg-purple-500/20"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/DevMaestroHQ",
      color: "hover:text-neon-green hover:bg-green-500/10",
      borderColor: "hover:border-neon-green"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yuvrajkurmi03",
      color: "hover:text-cyber-blue hover:bg-blue-500/10",
      borderColor: "hover:border-cyber-blue"
    },
    {
      icon: Globe,
      href: "https://www.yuvrajkurmi.github.com",
      color: "hover:text-neon-purple hover:bg-purple-500/10",
      borderColor: "hover:border-neon-purple"
    }
  ];

  return (
    <section className="py-20 bg-dark-bg pt-32">
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
              className="font-orbitron text-4xl font-bold text-neon-green glow-text mb-4"
            >
              ./contact
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-neon-green to-cyber-blue mx-auto"
            />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <Card className="bg-dark-card/50 backdrop-blur-sm border-cyber">
                <CardContent className="p-8">
                  <h3 className="font-orbitron text-xl text-cyber-blue mb-6">Send Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-mono text-slate-300">Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-dark-surface/50 border-cyber focus:border-neon-green"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-mono text-slate-300">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-dark-surface/50 border-cyber focus:border-neon-green"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-mono text-slate-300">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-dark-surface/50 border-cyber focus:border-neon-green resize-none"
                        placeholder="Your message here..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cyber-border bg-gradient-to-r from-green-500/10 to-blue-500/10 hover-glow font-mono text-neon-green"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-neon-green border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          ./send_message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
              className="space-y-6"
            >
              <Card className="bg-dark-card/50 backdrop-blur-sm border-cyber">
                <CardContent className="p-6">
                  <h3 className="font-orbitron text-xl text-cyber-blue mb-4">Get In Touch</h3>
                  <p className="text-readable-lg leading-relaxed mb-6">
                    I'm always interested in hearing about new opportunities and exciting projects. Let's connect and build something amazing together!
                  </p>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center`}>
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div>
                          <div className="font-mono text-sm text-slate-400">{info.label}</div>
                          <div className="text-slate-200">{info.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Links */}
              <Card className="bg-dark-card/50 backdrop-blur-sm border-cyber">
                <CardContent className="p-6">
                  <h3 className="font-orbitron text-xl text-cyber-blue mb-4">Connect Online</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 bg-dark-surface rounded-lg flex items-center justify-center border border-cyber ${social.color} ${social.borderColor} transition-all`}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Resume Download */}
              <Card className="bg-dark-card/50 backdrop-blur-sm border-cyber">
                <CardContent className="p-6">
                  <h3 className="font-orbitron text-xl text-cyber-blue mb-4">Resume</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Download my complete resume for detailed information about my skills and experience.
                  </p>
                  <Button
                    asChild
                    className="cyber-border bg-gradient-to-r from-green-500/10 to-blue-500/10 hover-glow font-mono text-neon-green"
                  >
                    <a href="/resume.pdf" target="_blank">
                      <Download className="w-4 h-4 mr-2" />
                      ./download_resume
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
