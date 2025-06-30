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
      baseRate: 333, // NPR 333k (333,000)
      complexity: 1,
      icon: DollarSign
    },
    {
      id: "mobile",
      name: "Mobile App",
      description: "React Native mobile application",
      baseRate: 466, // NPR 466k (466,000)
      complexity: 1.3,
      icon: Users
    },
    {
      id: "ecommerce",
      name: "E-commerce Platform",
      description: "Complete online store solution",
      baseRate: 599, // NPR 599k (599,000)
      complexity: 1.5,
      icon: Zap
    },
    {
      id: "api",
      name: "API Development",
      description: "Backend API with documentation",
      baseRate: 266, // NPR 266k (266,000)
      complexity: 0.8,
      icon: Clock
    }
  ];

  const additionalFeatures = [
    { id: "auth", name: "User Authentication", price: 67 }, // NPR 67k
    { id: "payments", name: "Payment Integration", price: 106 }, // NPR 106k
    { id: "analytics", name: "Analytics Dashboard", price: 159 }, // NPR 159k
    { id: "admin", name: "Admin Panel", price: 199 }, // NPR 199k
    { id: "api-integration", name: "3rd Party API Integration", price: 80 }, // NPR 80k
    { id: "real-time", name: "Real-time Features", price: 133 }, // NPR 133k
    { id: "mobile-responsive", name: "Mobile Optimization", price: 53 }, // NPR 53k
    { id: "seo", name: "SEO Optimization", price: 40 } // NPR 40k
  ];

  const selectedProject = projectTypes.find(p => p.id === selectedType);
  const featuresCost = features.reduce((total, featureId) => {
    const feature = additionalFeatures.find(f => f.id === featureId);
    return total + (feature?.price || 0);
  }, 0);

  const basePrice = selectedProject ? selectedProject.baseRate * selectedProject.complexity : 0;
  const timelineMultiplier = timeline <= 2 ? 1.5 : timeline <= 4 ? 1 : 0.8;
  const totalPrice = Math.round((basePrice + featuresCost) * timelineMultiplier);

  // Format currency in NPR thousands
  const formatNPR = (amount: number) => `NPR ${amount}K`;

  const toggleFeature = (featureId: string) => {
    setFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <div className="card-professional p-8">
      <div className="text-center mb-8">
        <Calculator className="w-12 h-12 text-brand-primary mx-auto mb-4" />
        <h3 className="heading-md text-contrast mb-2">
          Project Cost Calculator
        </h3>
        <p className="text-readable">Get an instant estimate for your project</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Configuration */}
        <div className="space-y-6">
          {/* Project Type */}
          <div>
            <h4 className="heading-sm text-contrast mb-4">Project Type</h4>
            <div className="grid grid-cols-2 gap-3">
              {projectTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                      selectedType === type.id
                        ? 'border-brand-primary bg-brand-primary/10'
                        : 'border-border bg-card hover:border-brand-primary hover:shadow-md'
                    }`}
                    onClick={() => setSelectedType(type.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-6 h-6 text-brand-primary mb-2" />
                    <h5 className="text-sm font-semibold mb-1 text-contrast">{type.name}</h5>
                    <p className="text-xs text-readable">{type.description}</p>
                    <p className="text-xs text-brand-primary mt-2 font-semibold">From {formatNPR(type.baseRate)}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h4 className="heading-sm text-contrast mb-4">Timeline (weeks)</h4>
            <div className="space-y-2">
              <input
                type="range"
                min="2"
                max="12"
                value={timeline}
                onChange={(e) => setTimeline(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, hsl(var(--brand-primary)) 0%, hsl(var(--brand-primary)) ${(timeline - 2) / 10 * 100}%, hsl(var(--muted)) ${(timeline - 2) / 10 * 100}%, hsl(var(--muted)) 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-readable">
                <span>2 weeks</span>
                <span className="text-brand-primary font-bold">{timeline} weeks</span>
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
            <h4 className="heading-sm text-contrast mb-4">Additional Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {additionalFeatures.map((feature) => (
                <motion.div
                  key={feature.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                    features.includes(feature.id)
                      ? 'border-brand-primary bg-brand-primary/10'
                      : 'border-border bg-card hover:border-brand-primary hover:shadow-md'
                  }`}
                  onClick={() => toggleFeature(feature.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h6 className="text-xs font-semibold mb-1 text-contrast">{feature.name}</h6>
                  <p className="text-xs text-brand-primary font-semibold">+{formatNPR(feature.price)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h4 className="heading-sm text-contrast mb-4">Price Breakdown</h4>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-readable">Base Project</span>
                  <span className="text-brand-primary font-semibold">{formatNPR(basePrice)}</span>
                </div>
                
                {features.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-readable">Additional Features</span>
                    <span className="text-brand-primary font-semibold">+{formatNPR(featuresCost)}</span>
                  </div>
                )}
                
                {timelineMultiplier !== 1 && (
                  <div className="flex justify-between">
                    <span className="text-readable">Timeline Adjustment</span>
                    <span className={timelineMultiplier > 1 ? "text-destructive" : "text-brand-accent"}>
                      {timelineMultiplier > 1 ? '+' : ''}{((timelineMultiplier - 1) * 100).toFixed(0)}%
                    </span>
                  </div>
                )}
                
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-contrast font-semibold">Total Estimate</span>
                    <span className="text-2xl text-brand-primary font-bold">
                      {formatNPR(totalPrice)}
                    </span>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full btn-professional btn-primary"
                onClick={() => {
                  const subject = encodeURIComponent(`Project Inquiry - ${selectedProject?.name}`);
                  const body = encodeURIComponent(
                    `Hi Yubraj,\n\nI'm interested in discussing a ${selectedProject?.name} project.\n\nProject Details:\n- Timeline: ${timeline} weeks\n- Features: ${features.map(f => additionalFeatures.find(af => af.id === f)?.name).join(', ')}\n- Estimated Budget: ${formatNPR(totalPrice)}\n\nLet's discuss the details!\n\nBest regards`
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
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 p-6 rounded-lg border border-brand-primary/30">
            <h5 className="text-contrast font-semibold mb-3">What You Get:</h5>
            <ul className="space-y-2 text-sm text-readable">
              <li>✓ Enterprise-grade architecture</li>
              <li>✓ Scalable & maintainable codebase</li>
              <li>✓ 99.9% uptime guarantee</li>
              <li>✓ Full documentation & handover</li>
              <li>✓ 60 days post-launch support</li>
              <li>✓ Performance optimization included</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}