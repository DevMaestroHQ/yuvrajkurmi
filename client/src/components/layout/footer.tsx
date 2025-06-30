import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/DevMaestroHQ",
      icon: Github,
      color: "hover:text-brand-primary"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yubraj-kurmi",
      icon: Linkedin,
      color: "hover:text-brand-primary"
    },
    {
      name: "Email",
      href: "mailto:yubrajkurmi2081@gmail.com",
      icon: Mail,
      color: "hover:text-brand-accent"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo size="sm" showText={false} />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Yubraj Kurmi</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Senior Full Stack Developer crafting exceptional digital experiences 
                with modern technologies and user-centered design.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Me", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Experience", href: "/experience" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-brand-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Let's discuss your next project
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 rounded-lg bg-background hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center space-x-2 text-muted-foreground text-sm mb-4 md:mb-0">
            <span>© {currentYear} Yubraj Kurmi. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of ☕</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-muted-foreground hover:text-brand-primary transition-colors text-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}