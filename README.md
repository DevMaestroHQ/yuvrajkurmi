# Yubraj Kurmi - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing full-stack development skills with a professional sci-fi aesthetic. Built with React, TypeScript, and Express.js.

## 🚀 Live Demo

Visit the live portfolio: [https://yubrajkurmi.dev](https://yubrajkurmi.dev)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [User Guide](#user-guide)
- [Developer Guide](#developer-guide)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

## 🌟 Overview

This portfolio website demonstrates modern web development practices while showcasing professional skills and experience. It features a clean, responsive design with subtle animations and interactive elements that create an engaging user experience.

### Key Highlights
- **2+ years** of full-stack development experience
- **4+ projects** completed with 100% client satisfaction
- Immediate availability for new projects
- Competitive pricing in **Nepali Rupees (NPR)**

## ✨ Features

### User Features
- **Interactive Portfolio**: Browse projects, skills, and experience
- **Dynamic Pricing Calculator**: Get instant project cost estimates in NPR
- **Contact Form**: Direct communication with form validation
- **Resume Download**: Access PDF resume with one click
- **Testimonials**: Read client reviews and project case studies
- **Skills Radar**: Interactive technical proficiency visualization
- **Code Showcase**: Live code samples from real projects

### Technical Features
- **Fully Responsive**: Optimized for all device sizes (mobile-first)
- **SEO Optimized**: Complete meta tags, structured data, and social sharing
- **Performance**: Fast loading with optimized assets and lazy loading
- **Security**: Rate limiting, input validation, and CORS protection
- **Type Safety**: Full TypeScript implementation
- **Accessibility**: WCAG compliant with proper contrast and navigation

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and context
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Wouter** - Lightweight client-side routing
- **TanStack Query** - Server state management
- **Radix UI** - Accessible component primitives

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Server-side type safety
- **PostgreSQL** - Relational database with Drizzle ORM
- **Express Validator** - Input validation and sanitization
- **Helmet.js** - Security headers and protection
- **Morgan** - HTTP request logging

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting
- **Drizzle Kit** - Database migrations and management
- **Replit** - Development environment and hosting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (or use Replit's built-in database)
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YourUsername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/portfolio
   NODE_ENV=development
   PORT=5000
   ```

4. **Set up the database**
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5000`

### Quick Start with Replit

1. Fork this Replit project
2. Environment variables are automatically configured
3. Click the "Run" button to start the application
4. Your portfolio is ready to customize!

## 📁 Project Structure

```
portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── layout/     # Navigation and footer
│   │   │   └── ui/         # Design system components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and configurations
│   │   ├── pages/          # Page components
│   │   └── App.tsx         # Main application component
│   └── index.html          # HTML template with SEO tags
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes definition
│   ├── storage.ts         # Database interface
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database and validation schemas
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 👥 User Guide

### Navigation
- **Home**: Introduction and quick overview
- **About**: Personal background and skills radar
- **Projects**: Portfolio showcase with live demos
- **Experience**: Professional timeline and achievements
- **Contact**: Get in touch and pricing calculator
- **Resume**: Skills overview and PDF download

### Getting a Quote
1. Navigate to the **Contact** page
2. Use the **Pricing Calculator** to estimate project costs
3. Select your project type (Web App, Mobile App, etc.)
4. Adjust timeline and add features
5. Review the cost breakdown in **NPR**
6. Click **"Get Your Quote Today"** to send an email inquiry

### Viewing Projects
- Browse the **Projects** section for detailed case studies
- Click project cards to view live demos or GitHub repositories
- Check the **Code Showcase** for actual code samples
- Review client testimonials for project outcomes

## 💻 Developer Guide

### Development Workflow

1. **Create a new branch** for your feature
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the code style
   - Use TypeScript for all new code
   - Follow existing component patterns
   - Add proper error handling
   - Include responsive design considerations

3. **Test your changes**
   ```bash
   npm run build    # Check for build errors
   npm run dev      # Test in development
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

### Adding New Components

1. **Create component file** in `client/src/components/ui/`
2. **Use TypeScript interfaces** for props
3. **Include responsive design** with Tailwind classes
4. **Add animations** with Framer Motion if needed
5. **Export from index** for easy importing

Example component structure:
```typescript
import { motion } from "framer-motion";

interface YourComponentProps {
  title: string;
  description: string;
}

export default function YourComponent({ title, description }: YourComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="glass-card p-6 hover-glow"
    >
      <h3 className="font-orbitron text-xl text-white mb-4">{title}</h3>
      <p className="text-readable">{description}</p>
    </motion.div>
  );
}
```

### Database Schema Updates

1. **Modify schema** in `shared/schema.ts`
2. **Generate migration**
   ```bash
   npm run db:generate
   ```
3. **Apply migration**
   ```bash
   npm run db:migrate
   ```
4. **Update TypeScript types** accordingly

### Styling Guidelines

- **Use Tailwind CSS** for all styling
- **Follow responsive-first** approach (mobile-first)
- **Use custom CSS variables** defined in `index.css`
- **Maintain consistent spacing** with Tailwind's scale
- **Test on multiple screen sizes** during development

### Performance Optimization

- **Lazy load images** and heavy components
- **Use React.memo** for expensive re-renders
- **Optimize bundle size** with dynamic imports
- **Compress images** before adding to assets
- **Monitor Core Web Vitals** in production

## 🔌 API Documentation

### Contact Form Endpoint

**POST** `/api/contact`

Submit a contact form with validation.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a web application project...",
  "budget": "NPR 500,000",
  "timeline": "8 weeks"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Validation Rules:**
- `name`: 2-50 characters, required
- `email`: Valid email format, required
- `subject`: 5-100 characters, required
- `message`: 10-2000 characters, required
- `budget`: Optional, NPR currency format
- `timeline`: Optional, string

**Error Response:**
```json
{
  "success": false,
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

### Health Check Endpoint

**GET** `/api/health`

Check application health status.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-06-29T09:00:00Z",
  "uptime": "2h 30m 45s"
}
```

## 🚀 Deployment

### Replit Deployment (Recommended)

1. **Fork the project** in Replit
2. **Configure environment variables** in Secrets
3. **Click Deploy** in the Replit interface
4. **Custom domain** can be configured in deployment settings

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set production environment variables**
   ```env
   NODE_ENV=production
   DATABASE_URL=your_production_database_url
   PORT=5000
   ```

3. **Start the production server**
   ```bash
   npm start
   ```

### Docker Deployment

1. **Create Dockerfile** (if needed)
2. **Build image**
   ```bash
   docker build -t portfolio .
   ```
3. **Run container**
   ```bash
   docker run -p 5000:5000 portfolio
   ```

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Contact form submits successfully
- [ ] Pricing calculator works accurately
- [ ] Responsive design on mobile/tablet/desktop
- [ ] All links and buttons function properly
- [ ] SEO meta tags are present
- [ ] Performance metrics are acceptable

### Automated Testing (Future Enhancement)

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Performance tests
npm run test:performance
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Add tests if applicable**
5. **Update documentation**
6. **Submit a pull request**

### Code Style

- Use **TypeScript** for all new code
- Follow **ESLint** configuration
- Use **Prettier** for code formatting
- Write **descriptive commit messages**
- Add **JSDoc comments** for complex functions

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

### Get in Touch
- **Email**: [developerrajir@gmail.com](mailto:developerrajir@gmail.com)
- **Phone**: +977-9824423560
- **LinkedIn**: [yuvrajkurmi03](https://linkedin.com/in/yuvrajkurmi03)
- **GitHub**: [DevMaestroHQ](https://github.com/DevMaestroHQ)

### Project Inquiries
Use the pricing calculator on the website for instant quotes, or send an email with your project requirements:

**Typical Response Time**: Within 24 hours
**Available**: Monday-Saturday, 9 AM - 6 PM (Nepal Time)
**Languages**: English, Hindi, Nepali

### Technical Support
For technical issues with this portfolio:
1. Check the [Issues](https://github.com/YourUsername/portfolio/issues) section
2. Search existing solutions
3. Create a new issue with detailed description
4. Include browser/device information

---

**Built with ❤️ by Yubraj Kurmi | Full Stack Developer**

*Ready to bring your ideas to life? Let's build something amazing together!*