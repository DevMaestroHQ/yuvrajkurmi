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
                className="heading-lg text-contrast mb-4"
              >
                Get In Touch
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-readable max-w-2xl mx-auto"
              >
                Ready to discuss your project or explore opportunities? Let's connect and build something amazing together.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto"
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
                  <h3 className="heading-md text-contrast mb-2">Send Message</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto"></div>
                </div>

                {/* Clean Form Card */}
                <motion.div 
                  className="card-professional p-8"
                  whileHover={{ y: -2 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div 
                        className="space-y-2"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-readable">Full Name</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="bg-input border-border focus:border-brand-primary text-contrast placeholder:text-muted-foreground rounded-lg h-12 px-4 transition-all duration-200"
                          required
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-2"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-readable">Email Address</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="bg-input border-border focus:border-brand-primary text-contrast placeholder:text-muted-foreground rounded-lg h-12 px-4 transition-all duration-200"
                          required
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-readable">Subject</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Discussion"
                        className="bg-input border-border focus:border-brand-primary text-contrast placeholder:text-muted-foreground rounded-lg h-12 px-4 transition-all duration-200"
                        required
                      />
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-readable">Project Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-input border-border focus:border-brand-primary text-contrast rounded-lg h-12 px-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                        required
                      >
                        <option value="">Choose project type</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile Application</option>
                        <option value="api-development">API Development</option>
                        <option value="consulting">Technical Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-readable">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-input border-border focus:border-brand-primary text-contrast placeholder:text-muted-foreground rounded-lg p-4 resize-none transition-all duration-200"
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
                        className="w-full btn-professional btn-primary h-12"
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
                <div className="card-professional p-8">
                  <h3 className="heading-md text-contrast mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center space-x-4 p-4 rounded-lg border border-border"
                      >
                        <div className={`p-3 rounded-full ${info.bgColor}`}>
                          <info.icon className={`w-5 h-5 ${info.color}`} />
                        </div>
                        <div>
                          <div className="text-sm text-readable">{info.label}</div>
                          <div className="text-contrast font-medium">{info.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="card-professional p-8">
                  <h3 className="heading-md text-contrast mb-6">Connect</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={fadeInUp}
                        className={`p-4 rounded-lg border border-border transition-all duration-300 ${social.color} ${social.borderColor}`}
                      >
                        <social.icon className="w-6 h-6 text-contrast" />
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