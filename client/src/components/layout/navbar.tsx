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
    { href: "/", label: "~/home" },
    { href: "/about", label: "~/about" },
    { href: "/projects", label: "~/projects" },
    { href: "/experience", label: "~/experience" },
    { href: "/contact", label: "~/contact" },
    { href: "/resume", label: "~/resume" },
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
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-dark-bg/95 backdrop-blur-md" : "bg-dark-bg/80 backdrop-blur-sm"
      } border-b border-cyber`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo size="md" showText={true} className="cursor-pointer" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`nav-glow px-4 py-2 rounded-md font-mono text-sm transition-colors cursor-pointer ${
                    location === item.href ? "text-neon-green" : "hover:text-neon-green"
                  }`}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neon-green"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        className={`md:hidden bg-dark-bg/95 backdrop-blur-md border-t border-cyber overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center py-8 space-y-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`text-2xl font-mono transition-colors cursor-pointer ${
                  location === item.href ? "text-neon-green glow-text" : "hover:text-neon-green"
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
