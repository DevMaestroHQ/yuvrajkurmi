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
      value: "yubrajkurmi2081@gmail.com",
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977-98XXXXXXXX",
      color: "text-brand-secondary",
      bgColor: "bg-brand-secondary/10"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Devdaha, Rupandehi, Nepal",
      color: "text-brand-accent",
      bgColor: "bg-brand-accent/10"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/DevMaestroHQ",
      color: "hover:text-brand-primary hover:bg-brand-primary/10",
      borderColor: "hover:border-brand-primary"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yubraj-kurmi",
      color: "hover:text-brand-secondary hover:bg-brand-secondary/10",
      borderColor: "hover:border-brand-secondary"
    },
    {
      icon: Globe,
      href: "https://portfolio.yubrajkurmi.dev",
      color: "hover:text-brand-accent hover:bg-brand-accent/10",
      borderColor: "hover:border-brand-accent"
    }
  ];

  return (
    <>
      <section className="py-20 bg-background pt-32">
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
                Get In Touch
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-readable-lg max-w-2xl mx-auto"
              >
                Ready to discuss your project or explore opportunities? Let's connect and build something amazing together.
              </motion.p>
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
                className="space-y-8"
              >
                {/* Simple Header */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </div>

                {/* Clean Form Card */}
                <motion.div 
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
                  whileHover={{ y: -2, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.1)" }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div 
                        className="space-y-2"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-slate-300">Full Name</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="bg-slate-800/50 border-slate-600 focus:border-blue-500 text-white placeholder:text-slate-400 rounded-lg h-12 px-4 transition-all duration-200 hover:bg-slate-800/70"
                          required
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-2"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-slate-300">Email Address</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="bg-slate-800/50 border-slate-600 focus:border-blue-500 text-white placeholder:text-slate-400 rounded-lg h-12 px-4 transition-all duration-200 hover:bg-slate-800/70"
                          required
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-slate-300">Subject</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Discussion"
                        className="bg-slate-800/50 border-slate-600 focus:border-blue-500 text-white placeholder:text-slate-400 rounded-lg h-12 px-4 transition-all duration-200 hover:bg-slate-800/70"
                        required
                      />
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-slate-300">Project Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-600 focus:border-blue-500 text-white rounded-lg h-12 px-4 transition-all duration-200 hover:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        required
                      >
                        <option value="" className="bg-slate-800">Choose project type</option>
                        <option value="web-development" className="bg-slate-800">Web Development</option>
                        <option value="mobile-app" className="bg-slate-800">Mobile Application</option>
                        <option value="api-development" className="bg-slate-800">API Development</option>
                        <option value="consulting" className="bg-slate-800">Technical Consulting</option>
                        <option value="other" className="bg-slate-800">Other</option>
                      </select>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-slate-300">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-slate-800/50 border-slate-600 focus:border-blue-500 text-white placeholder:text-slate-400 rounded-lg p-4 resize-none transition-all duration-200 hover:bg-slate-800/70"
                        placeholder="Tell me about your project requirements..."
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 border-0 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed h-12"
                      >
                        {isSubmitting ? (
                          <motion.div className="flex items-center justify-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            <span>Sending Message...</span>
                          </motion.div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="w-5 h-5 mr-2" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>
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