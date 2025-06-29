import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";
import { fadeInUp, slideInLeft, slideInRight, staggerChildren } from "@/lib/animations";
import PricingCalculator from "@/components/ui/pricing-calculator";
import AvailabilityIndicator from "@/components/ui/availability-indicator";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
    budget: ""
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
        setFormData({ name: "", email: "", subject: "", message: "", projectType: "", budget: "" });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <>
      <section className="py-20 bg-dark-bg pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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
                <div className="professional-card p-8">
                  <div className="terminal-window">
                    <div className="terminal-header">
                      <div className="terminal-dots">
                        <span className="dot bg-red-500"></span>
                        <span className="dot bg-yellow-500"></span>
                        <span className="dot bg-green-500"></span>
                      </div>
                      <div className="terminal-title">contact@yubraj-dev:~</div>
                    </div>
                    <div className="terminal-content">
                      <div className="font-mono text-neon-green mb-4">
                        <span className="text-cyan-400">$</span> ./send-message --interactive
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="block text-sm font-mono text-neon-green">--name</label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              className="terminal-input bg-dark-surface/50 border-cyber focus:border-neon-green"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-mono text-neon-green">--email</label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your.email@domain.com"
                              className="terminal-input bg-dark-surface/50 border-cyber focus:border-neon-green"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="block text-sm font-mono text-neon-green">--subject</label>
                            <Input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Project inquiry"
                              className="terminal-input bg-dark-surface/50 border-cyber focus:border-neon-green"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-mono text-neon-green">--project-type</label>
                            <select
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleChange}
                              className="terminal-input bg-dark-surface/50 border-cyber focus:border-neon-green w-full p-3 rounded text-white"
                              required
                            >
                              <option value="">Select project type</option>
                              <option value="web-development">Web Development</option>
                              <option value="mobile-app">Mobile App</option>
                              <option value="api-development">API Development</option>
                              <option value="consulting">Technical Consulting</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-mono text-neon-green">--message</label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="terminal-input bg-dark-surface/50 border-cyber focus:border-neon-green resize-none"
                            placeholder="Tell me about your project..."
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
                              ./send_message --execute
                            </>
                          )}
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Info & Social Links */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideInRight}
                className="space-y-8"
              >
                {/* Contact Info */}
                <div className="professional-card p-8">
                  <h3 className="font-orbitron text-xl text-cyber-blue mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center space-x-4 p-4 rounded-lg cyber-border"
                      >
                        <div className={`p-3 rounded-full ${info.bgColor}`}>
                          <info.icon className={`w-5 h-5 ${info.color}`} />
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">{info.label}</div>
                          <div className="text-white font-mono">{info.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="professional-card p-8">
                  <h3 className="font-orbitron text-xl text-cyber-blue mb-6">Connect</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={fadeInUp}
                        className={`p-4 rounded-lg cyber-border transition-all duration-300 ${social.color} ${social.borderColor}`}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <AvailabilityIndicator />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Calculator Section */}
        <div className="container mx-auto px-4 mt-20">
          <PricingCalculator />
        </div>
      </section>
    </>
  );
}