import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { ThemeProvider } from "@/hooks/use-theme";
import { useState, useEffect } from "react";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Preloader from "@/components/ui/preloader";
import ErrorBoundary from "@/components/ui/error-boundary";
import PerformanceMonitor from "@/components/ui/performance-monitor";

import Home from "@/pages/home";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Experience from "@/pages/experience";
import Contact from "@/pages/contact";
import Resume from "@/pages/resume";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ willChange: "opacity, transform" }}
      >
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/experience" component={Experience} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization under 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          <TooltipProvider>
            <div className="min-h-screen bg-background text-foreground antialiased">
              {isLoading ? (
                <Preloader />
              ) : (
                <>
                  <Navbar />
                  <main className="relative">
                    <Router />
                  </main>
                  <Footer />
                </>
              )}
              <Toaster />
              <PerformanceMonitor />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
