import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Preloader from "@/components/ui/preloader";

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
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
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
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground antialiased">
          <Preloader />
          <Navbar />
          <main className="relative">
            <Router />
          </main>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
