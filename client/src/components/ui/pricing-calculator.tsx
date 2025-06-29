import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, DollarSign, Clock, Users, Zap } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";

interface ProjectType {
  id: string;
  name: string;
  description: string;
  baseRate: number;
  complexity: number;
  icon: React.ComponentType<{ className?: string }>;
}

export default function PricingCalculator() {
  const [selectedType, setSelectedType] = useState<string>("webapp");
  const [timeline, setTimeline] = useState<number>(4);
  const [features, setFeatures] = useState<string[]>([]);

  const projectTypes: ProjectType[] = [
    {
      id: "webapp",
      name: "Web Application",
      description: "Full-stack web app with modern UI",
      baseRate: 332500, // NPR equivalent of $2500
      complexity: 1,
      icon: DollarSign
    },
    {
      id: "mobile",
      name: "Mobile App",
      description: "React Native mobile application",
      baseRate: 465500, // NPR equivalent of $3500
      complexity: 1.3,
      icon: Users
    },
    {
      id: "ecommerce",
      name: "E-commerce Platform",
      description: "Complete online store solution",
      baseRate: 598500, // NPR equivalent of $4500
      complexity: 1.5,
      icon: Zap
    },
    {
      id: "api",
      name: "API Development",
      description: "Backend API with documentation",
      baseRate: 266000, // NPR equivalent of $2000
      complexity: 0.8,
      icon: Clock
    }
  ];

  const additionalFeatures = [
    { id: "auth", name: "User Authentication", price: 500 },
    { id: "payments", name: "Payment Integration", price: 800 },
    { id: "analytics", name: "Analytics Dashboard", price: 1200 },
    { id: "admin", name: "Admin Panel", price: 1500 },
    { id: "api-integration", name: "3rd Party API Integration", price: 600 },
    { id: "real-time", name: "Real-time Features", price: 1000 },
    { id: "mobile-responsive", name: "Mobile Optimization", price: 400 },
    { id: "seo", name: "SEO Optimization", price: 300 }
  ];

  const selectedProject = projectTypes.find(p => p.id === selectedType);
  const featuresCost = features.reduce((total, featureId) => {
    const feature = additionalFeatures.find(f => f.id === featureId);
    return total + (feature?.price || 0);
  }, 0);

  const basePrice = selectedProject ? selectedProject.baseRate * selectedProject.complexity : 0;
  const timelineMultiplier = timeline <= 2 ? 1.5 : timeline <= 4 ? 1 : 0.8;
  const totalPrice = Math.round((basePrice + featuresCost) * timelineMultiplier);

  const toggleFeature = (featureId: string) => {
    setFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <div className="glass-card p-8">
      <div className="text-center mb-8">
        <Calculator className="w-12 h-12 text-neon-green mx-auto mb-4" />
        <h3 className="font-orbitron text-2xl text-neon-green glow-text mb-2">
          Project Cost Calculator
        </h3>
        <p className="text-readable">Get an instant estimate for your project</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Configuration */}
        <div className="space-y-6">
          {/* Project Type */}
          <div>
            <h4 className="font-mono text-cyber-blue mb-4">Project Type</h4>
            <div className="grid grid-cols-2 gap-3">
              {projectTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                      selectedType === type.id
                        ? 'border-neon-green bg-green-500/10'
                        : 'border-cyber/30 bg-dark-surface/30 hover:border-cyber-blue'
                    }`}
                    onClick={() => setSelectedType(type.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-6 h-6 text-neon-green mb-2" />
                    <h5 className="font-mono text-sm font-semibold mb-1">{type.name}</h5>
                    <p className="text-xs text-readable">{type.description}</p>
                    <p className="text-xs text-neon-green mt-2">From NPR {type.baseRate.toLocaleString()}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h4 className="font-mono text-cyber-blue mb-4">Timeline (weeks)</h4>
            <div className="space-y-2">
              <input
                type="range"
                min="2"
                max="12"
                value={timeline}
                onChange={(e) => setTimeline(Number(e.target.value))}
                className="w-full h-2 bg-dark-surface rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-readable">
                <span>2 weeks</span>
                <span className="text-neon-green font-bold">{timeline} weeks</span>
                <span>12 weeks</span>
              </div>
              <p className="text-xs text-readable">
                {timeline <= 2 && "Rush delivery (+50% cost)"}
                {timeline > 2 && timeline <= 4 && "Standard timeline"}
                {timeline > 4 && "Extended timeline (-20% cost)"}
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div>
            <h4 className="font-mono text-cyber-blue mb-4">Additional Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {additionalFeatures.map((feature) => (
                <motion.div
                  key={feature.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                    features.includes(feature.id)
                      ? 'border-neon-green bg-green-500/10'
                      : 'border-cyber/30 bg-dark-surface/30 hover:border-cyber-blue'
                  }`}
                  onClick={() => toggleFeature(feature.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h6 className="font-mono text-xs font-semibold mb-1">{feature.name}</h6>
                  <p className="text-xs text-neon-green">+${feature.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-6">
          <Card className="bg-dark-surface/50 border-cyber">
            <CardContent className="p-6">
              <h4 className="font-mono text-cyber-blue mb-4">Price Breakdown</h4>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-readable">Base Project</span>
                  <span className="text-neon-green">NPR {basePrice.toLocaleString()}</span>
                </div>
                
                {features.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-readable">Additional Features</span>
                    <span className="text-neon-green">+NPR {featuresCost.toLocaleString()}</span>
                  </div>
                )}
                
                {timelineMultiplier !== 1 && (
                  <div className="flex justify-between">
                    <span className="text-readable">Timeline Adjustment</span>
                    <span className={timelineMultiplier > 1 ? "text-neon-pink" : "text-neon-green"}>
                      {timelineMultiplier > 1 ? '+' : ''}{((timelineMultiplier - 1) * 100).toFixed(0)}%
                    </span>
                  </div>
                )}
                
                <div className="border-t border-cyber/30 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-lg text-cyber-blue">Total Estimate</span>
                    <span className="font-orbitron text-2xl text-neon-green glow-text">
                      NPR {totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full btn-primary"
                onClick={() => {
                  const subject = encodeURIComponent(`Project Inquiry - ${selectedProject?.name}`);
                  const body = encodeURIComponent(
                    `Hi Yubraj,\n\nI'm interested in discussing a ${selectedProject?.name} project.\n\nProject Details:\n- Timeline: ${timeline} weeks\n- Features: ${features.map(f => additionalFeatures.find(af => af.id === f)?.name).join(', ')}\n- Estimated Budget: NPR ${totalPrice.toLocaleString()}\n\nLet's discuss the details!\n\nBest regards`
                  );
                  window.location.href = `mailto:developerrajir@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                Get Started - Contact Me
              </Button>
              
              <p className="text-xs text-readable text-center mt-3">
                * This is an estimate. Final pricing may vary based on specific requirements.
              </p>
            </CardContent>
          </Card>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-lg border border-neon-green/30">
            <h5 className="font-mono text-neon-green font-semibold mb-3">What You Get:</h5>
            <ul className="space-y-2 text-sm text-readable">
              <li>✓ Clean, maintainable code</li>
              <li>✓ Responsive design for all devices</li>
              <li>✓ Performance optimization</li>
              <li>✓ Documentation & deployment</li>
              <li>✓ 30 days post-launch support</li>
              <li>✓ Source code & full ownership</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}