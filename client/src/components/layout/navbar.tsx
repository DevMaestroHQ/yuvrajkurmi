import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-40 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/80 backdrop-blur-sm"
      } border-b border-border`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Logo size="sm" showText={true} className="cursor-pointer" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={`relative px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 cursor-pointer ${
                    location === item.href 
                      ? "text-brand-primary bg-brand-primary/10" 
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                  {location === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-brand-primary p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-background/95 backdrop-blur-md border-t border-border overflow-hidden"
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`text-lg font-medium transition-all duration-300 cursor-pointer px-4 py-2 rounded-md ${
                  location === item.href 
                    ? "text-brand-primary bg-brand-primary/10" 
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
