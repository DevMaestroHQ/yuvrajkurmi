import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, Globe, Smartphone, ShoppingCart, Database, Clock, Star, CheckCircle2 } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";

interface ProjectType {
  id: string;
  name: string;
  description: string;
  features: string[];
  baseRate: number;
  timeRange: string;
  icon: React.ComponentType<{ className?: string }>;
  popular?: boolean;
}

interface Feature {
  id: string;
  name: string;
  description: string;
  price: number;
  timeWeeks: number;
  category: string;
}

export default function PricingCalculator() {
  const [selectedType, setSelectedType] = useState<string>("webapp");
  const [urgency, setUrgency] = useState<string>("standard");
  const [features, setFeatures] = useState<string[]>([]);
  const [maintenance, setMaintenance] = useState<boolean>(false);

  const projectTypes: ProjectType[] = [
    {
      id: "webapp",
      name: "Web Application",
      description: "Professional business website with modern design",
      features: ["Responsive Design", "Contact Forms", "Basic SEO", "Fast Loading"],
      baseRate: 35,
      timeRange: "2-4 weeks",
      icon: Globe
    },
    {
      id: "ecommerce",
      name: "E-commerce Store",
      description: "Complete online shopping platform",
      features: ["Product Catalog", "Shopping Cart", "Order Management", "Payment Ready"],
      baseRate: 65,
      timeRange: "4-6 weeks",
      icon: ShoppingCart,
      popular: true
    },
    {
      id: "webapp-advanced",
      name: "Advanced Web App",
      description: "Custom web application with database",
      features: ["User Dashboard", "Database Integration", "Admin Panel", "Custom Features"],
      baseRate: 85,
      timeRange: "6-8 weeks",
      icon: Database
    },
    {
      id: "mobile",
      name: "Mobile App",
      description: "Cross-platform mobile application",
      features: ["iOS & Android", "Native Performance", "App Store Ready", "Push Notifications"],
      baseRate: 95,
      timeRange: "8-12 weeks",
      icon: Smartphone
    }
  ];

  const additionalFeatures: Feature[] = [
    // Essential Features
    { id: "auth", name: "User Login System", description: "Secure user registration and authentication", price: 15, timeWeeks: 1, category: "Essential" },
    { id: "payments", name: "Payment Integration", description: "Secure payment processing with local gateways", price: 25, timeWeeks: 2, category: "Essential" },
    { id: "admin", name: "Admin Dashboard", description: "Complete admin control panel", price: 20, timeWeeks: 1.5, category: "Essential" },
    
    // Advanced Features
    { id: "analytics", name: "Analytics & Reports", description: "Detailed business analytics and reports", price: 18, timeWeeks: 1, category: "Advanced" },
    { id: "api", name: "API Integration", description: "Connect with third-party services", price: 12, timeWeeks: 1, category: "Advanced" },
    { id: "real-time", name: "Real-time Features", description: "Live chat, notifications, updates", price: 22, timeWeeks: 2, category: "Advanced" },
    
    // Performance & SEO
    { id: "seo", name: "Advanced SEO", description: "Complete SEO optimization package", price: 8, timeWeeks: 0.5, category: "Marketing" },
    { id: "performance", name: "Performance Optimization", description: "Speed optimization and caching", price: 10, timeWeeks: 0.5, category: "Marketing" },
    { id: "social", name: "Social Media Integration", description: "Social login and sharing features", price: 6, timeWeeks: 0.5, category: "Marketing" }
  ];

  const urgencyOptions = [
    { id: "relaxed", name: "Flexible Timeline", multiplier: 0.85, description: "No rush, standard delivery" },
    { id: "standard", name: "Standard Delivery", multiplier: 1, description: "Normal project timeline" },
    { id: "urgent", name: "Priority Delivery", multiplier: 1.3, description: "Faster delivery, priority support" },
    { id: "express", name: "Express Delivery", multiplier: 1.6, description: "Rush delivery in half time" }
  ];

  const selectedProject = projectTypes.find(p => p.id === selectedType);
  const selectedUrgency = urgencyOptions.find(u => u.id === urgency);
  
  const selectedFeatures = features.map(fId => additionalFeatures.find(f => f.id === fId)).filter(Boolean) as Feature[];
  const featuresCost = selectedFeatures.reduce((total, feature) => total + feature.price, 0);
  const maintenanceCost = maintenance ? Math.round((selectedProject?.baseRate || 0) * 0.15) : 0;
  
  const basePrice = selectedProject?.baseRate || 0;
  const urgencyMultiplier = selectedUrgency?.multiplier || 1;
  const subtotal = basePrice + featuresCost;
  const totalPrice = Math.round(subtotal * urgencyMultiplier) + maintenanceCost;
  
  const estimatedWeeks = Math.max(2, Math.round(
    (parseInt(selectedProject?.timeRange.split('-')[0] || '2') + 
    selectedFeatures.reduce((total, feature) => total + feature.timeWeeks, 0))
    / urgencyMultiplier
  ));

  const formatNPR = (amount: number) => `NPR ${amount.toLocaleString()}`;

  const toggleFeature = (featureId: string) => {
    setFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const groupedFeatures = additionalFeatures.reduce((groups, feature) => {
    const category = feature.category;
    if (!groups[category]) groups[category] = [];
    groups[category].push(feature);
    return groups;
  }, {} as Record<string, Feature[]>);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-10">
        <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Project Cost Calculator
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Get an accurate estimate for your project with detailed breakdown
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Project Type Selection */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Select Project Type
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {projectTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedType === type.id
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedType(type.id)}
                    >
                      {type.popular && (
                        <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          <Star className="w-3 h-3 inline mr-1" />
                          Popular
                        </div>
                      )}
                      
                      <div className="flex items-start space-x-3">
                        <Icon className={`w-8 h-8 ${selectedType === type.id ? 'text-blue-600' : 'text-gray-500'}`} />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {type.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                            {type.description}
                          </p>
                          <div className="space-y-1">
                            {type.features.map((feature, index) => (
                              <div key={index} className="flex items-center text-xs text-gray-500">
                                <CheckCircle2 className="w-3 h-3 mr-1 text-green-500" />
                                {feature}
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 flex justify-between items-center">
                            <span className="text-lg font-bold text-blue-600">
                              {formatNPR(type.baseRate * 1000)}
                            </span>
                            <span className="text-xs text-gray-500">
                              <Clock className="w-3 h-3 inline mr-1" />
                              {type.timeRange}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>

          {/* Timeline & Urgency */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Timeline & Urgency
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {urgencyOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    urgency === option.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setUrgency(option.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {option.name}
                    </h4>
                    <span className={`text-sm font-medium ${
                      option.multiplier > 1 ? 'text-orange-600' : 
                      option.multiplier < 1 ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {option.multiplier > 1 ? '+' : option.multiplier < 1 ? '-' : ''}
                      {Math.round((Math.abs(option.multiplier - 1)) * 100)}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Additional Features */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Additional Features
            </h3>
            
            {Object.entries(groupedFeatures).map(([category, categoryFeatures]) => (
              <div key={category} className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                  {category}
                </h4>
                <div className="space-y-3">
                  {categoryFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      className={`p-4 rounded-lg border transition-all cursor-pointer ${
                        features.includes(feature.id)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                      onClick={() => toggleFeature(feature.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <h5 className="font-medium text-gray-900 dark:text-white">
                              {feature.name}
                            </h5>
                            <span className="ml-2 text-sm text-gray-500">
                              (+{feature.timeWeeks}w)
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {feature.description}
                          </p>
                        </div>
                        <div className="ml-4 text-right">
                          <div className="text-lg font-semibold text-blue-600">
                            +{formatNPR(feature.price * 1000)}
                          </div>
                          <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                            features.includes(feature.id)
                              ? 'bg-blue-500 border-blue-500'
                              : 'border-gray-300'
                          }`}>
                            {features.includes(feature.id) && (
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Maintenance Option */}
            <div className="border-t pt-6">
              <div
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  maintenance
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setMaintenance(!maintenance)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      3-Month Maintenance & Support
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Bug fixes, minor updates, and technical support
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-600">
                      +{formatNPR(maintenanceCost * 1000)}
                    </div>
                    <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                      maintenance
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300'
                    }`}>
                      {maintenance && (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Price Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Price Breakdown
            </h3>
            
            <div className="space-y-4">
              {/* Base Project */}
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-300">
                  {selectedProject?.name}
                </span>
                <span className="font-medium">
                  {formatNPR(basePrice * 1000)}
                </span>
              </div>

              {/* Selected Features */}
              {selectedFeatures.map((feature) => (
                <div key={feature.id} className="flex justify-between py-1 text-sm">
                  <span className="text-gray-600 dark:text-gray-300">
                    + {feature.name}
                  </span>
                  <span>+{formatNPR(feature.price * 1000)}</span>
                </div>
              ))}

              {/* Maintenance */}
              {maintenance && (
                <div className="flex justify-between py-1 text-sm">
                  <span className="text-gray-600 dark:text-gray-300">
                    + 3-Month Support
                  </span>
                  <span>+{formatNPR(maintenanceCost * 1000)}</span>
                </div>
              )}

              {/* Urgency Multiplier */}
              {selectedUrgency && selectedUrgency.multiplier !== 1 && (
                <div className="flex justify-between py-2 text-sm">
                  <span className="text-gray-600 dark:text-gray-300">
                    {selectedUrgency.name} ({selectedUrgency.multiplier > 1 ? '+' : ''}{Math.round((selectedUrgency.multiplier - 1) * 100)}%)
                  </span>
                  <span className={selectedUrgency.multiplier > 1 ? 'text-orange-600' : 'text-green-600'}>
                    {selectedUrgency.multiplier > 1 ? '+' : ''}
                    {formatNPR((subtotal * selectedUrgency.multiplier - subtotal) * 1000)}
                  </span>
                </div>
              )}

              {/* Total */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Total Cost
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    {formatNPR(totalPrice * 1000)}
                  </span>
                </div>
                
                <div className="mt-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Estimated: {estimatedWeeks} weeks
                </div>
              </div>

              {/* Action Button */}
              <Button 
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                Get Quote
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                * Final price may vary based on specific requirements
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}