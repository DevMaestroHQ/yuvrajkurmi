import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { body, validationResult } from "express-validator";
import compression from "compression";
import morgan from "morgan";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add compression middleware
  app.use(compression());
  
  // Add logging middleware
  app.use(morgan('combined'));

  // Enhanced input validation middleware for contact form
  const contactValidation = [
    body('name')
      .trim()
      .isLength({ min: 2, max: 100 })
      .withMessage('Name must be between 2 and 100 characters')
      .matches(/^[a-zA-Z\s'-]+$/)
      .withMessage('Name can only contain letters, spaces, hyphens, and apostrophes'),
    body('email')
      .trim()
      .isEmail()
      .normalizeEmail()
      .withMessage('Please provide a valid email address')
      .isLength({ max: 254 })
      .withMessage('Email address is too long'),
    body('subject')
      .optional()
      .trim()
      .isLength({ min: 3, max: 200 })
      .withMessage('Subject must be between 3 and 200 characters')
      .escape(),
    body('projectType')
      .optional()
      .trim()
      .isIn(['web-development', 'mobile-app', 'ecommerce', 'custom-software', 'consultation', 'other'])
      .withMessage('Please select a valid project type'),
    body('budget')
      .optional()
      .trim()
      .isIn(['under-50k', '50k-100k', '100k-200k', '200k-500k', 'above-500k', 'discuss'])
      .withMessage('Please select a valid budget range'),
    body('message')
      .trim()
      .isLength({ min: 10, max: 2000 })
      .withMessage('Message must be between 10 and 2000 characters')
      .escape() // Prevent XSS attacks
  ];

  // Contact form endpoint with enhanced validation and security
  app.post("/api/contact", contactValidation, async (req: Request, res: Response) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Validation failed",
          errors: errors.array()
        });
      }

      const { name, email, subject, projectType, budget, message } = req.body;
      
      // Additional security: Check for spam patterns
      const spamPatterns = [
        /https?:\/\/[^\s]+/gi, // URLs
        /\b(?:click here|buy now|free money|lottery|winner)\b/gi, // Spam keywords
        /(.)\1{10,}/gi // Repeated characters (potential spam)
      ];
      
      const messageContent = `${name} ${email} ${message}`.toLowerCase();
      const isSpam = spamPatterns.some(pattern => pattern.test(messageContent));
      
      if (isSpam) {
        return res.status(400).json({
          message: "Message appears to be spam and was rejected"
        });
      }

      // Log submission with IP for security monitoring
      const submissionData = {
        name,
        email,
        subject: subject || 'No subject',
        projectType: projectType || 'Not specified',
        budget: budget || 'Not specified',
        message,
        timestamp: new Date().toISOString(),
        ip: req.ip || req.connection.remoteAddress,
        userAgent: req.get('User-Agent')
      };
      
      console.log("Contact form submission:", submissionData);

      // In production, implement:
      // 1. Email service integration (SendGrid, Nodemailer, etc.)
      // 2. Database storage with proper encryption
      // 3. Email confirmation to user
      // 4. Admin notification system
      // 5. Follow-up tracking system

      res.json({ 
        message: "Message sent successfully! Thank you for reaching out. I'll respond within 24 hours.",
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  // Comprehensive health check endpoint
  app.get("/health", (req, res) => {
    const healthData = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      version: process.version,
      memory: process.memoryUsage(),
      platform: process.platform,
      pid: process.pid
    };
    
    res.status(200).json(healthData);
  });

  // Legacy health check endpoint for backward compatibility
  app.get("/api/health", (req, res) => {
    res.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
  });

  // Portfolio stats endpoint (for dynamic stats)
  app.get("/api/stats", (req, res) => {
    res.json({
      projects: 15,
      yearsExperience: 2,
      technologies: 12,
      availableForHire: true,
      responseTime: "< 24h",
      lastUpdated: new Date().toISOString()
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
