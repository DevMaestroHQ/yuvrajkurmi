# Portfolio Application

## Overview

This is a professional developer portfolio built as a full-stack web application featuring a modern sci-fi aesthetic. The application showcases a developer's skills, projects, experience, and provides contact functionality through a responsive, animated interface.

## System Architecture

The application follows a full-stack monorepo structure with clear separation between frontend and backend concerns:

- **Frontend**: React-based SPA with TypeScript, using modern UI libraries and animations
- **Backend**: Express.js server with PostgreSQL database integration
- **Shared**: Common schema definitions and types shared between frontend and backend

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom sci-fi themed variables
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactive effects
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **API**: RESTful endpoints for contact form submissions

### UI/UX Design System
- **Theme**: Futuristic sci-fi with terminal-style aesthetics
- **Typography**: Orbitron (display), JetBrains Mono (code), Inter (body)
- **Color Palette**: Dark backgrounds with neon accents (green, blue, purple, cyan)
- **Components**: Consistent cyber-styled borders, glow effects, and hover animations
- **Responsive**: Mobile-first design with adaptive layouts

### Page Structure
1. **Home** (`/`): Hero section with typewriter terminal animation
2. **About** (`/about`): Personal bio with animated tech stack visualization
3. **Projects** (`/projects`): Grid showcase of portfolio projects with hover effects
4. **Experience** (`/experience`): Timeline-based work history presentation
5. **Contact** (`/contact`): Functional contact form with backend integration
6. **Resume** (`/resume`): Skills overview and resume display

## Data Flow

### Client-Side Navigation
- Wouter handles client-side routing with smooth page transitions
- Framer Motion provides consistent page-level animations
- Components use React hooks for local state management

### Server Communication
- TanStack Query manages API calls and caching
- Contact form submissions are handled via POST `/api/contact`
- Form validation occurs both client and server-side

### Animation System
- Centralized animation variants in `lib/animations.ts`
- Scroll-triggered animations using Framer Motion viewport detection
- Custom typewriter effect for terminal-style text display

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, TypeScript)
- Express.js with CORS and security middleware
- PostgreSQL with Drizzle ORM and Neon serverless driver

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- Framer Motion for animations and transitions
- Lucide React for consistent iconography

### Development Tools
- Vite for build tooling and HMR
- ESBuild for server bundling
- Replit-specific plugins for development environment

### Database and Storage
- Drizzle ORM for type-safe database operations
- Connect-pg-simple for session storage
- Zod for runtime schema validation

## Deployment Strategy

The application is configured for deployment in a Replit environment with:

### Development Mode
- Vite dev server for frontend with HMR
- TSX for running TypeScript server files
- Database migrations handled via Drizzle Kit

### Production Build
- Frontend assets built to `dist/public`
- Server bundled to `dist/index.js`
- Static file serving configured for production

### Database Setup
- PostgreSQL database configured via `DATABASE_URL` environment variable
- Schema managed through Drizzle migrations
- Session storage persisted to database

### Environment Configuration
- Development and production environment detection
- Replit-specific tooling integration
- Automatic error overlay in development

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### June 29, 2025 - Major Portfolio Enhancement & Security Upgrade
**Security & Performance Improvements:**
- **Enhanced Security**: Added Helmet.js for security headers, CORS configuration, and rate limiting
- **Input Validation**: Implemented comprehensive form validation with express-validator and spam detection
- **Performance Optimization**: Added compression middleware and request logging for better monitoring
- **Error Handling**: Enhanced error responses with detailed validation feedback and security monitoring

**Advanced UI/UX Features:**
- **Skills Radar Chart**: Interactive technical proficiency matrix with real project experience data
- **Code Showcase**: Live code samples from production projects with copy functionality and GitHub links
- **Pricing Calculator**: Dynamic project cost estimator with timeline adjustments and feature selection
- **Availability Indicator**: Real-time status showing immediate availability for hire
- **Enhanced Animations**: Added glassmorphism effects, particle backgrounds, and improved hover states

**Professional Hiring Features:**
- **Client Testimonials**: Added testimonial section with 5-star client reviews and project types
- **SEO Optimization**: Comprehensive meta tags, Open Graph, Twitter cards, and JSON-LD structured data
- **Contact Enhancement**: Professional contact form with enhanced validation and pricing integration
- **Readability Improvements**: Better typography, color contrast, and text hierarchy for accessibility

**Technical Architecture Updates:**
- **Type Safety**: Added proper TypeScript types for all server endpoints and validation
- **API Enhancement**: New endpoints for health checks and dynamic portfolio stats
- **Font Integration**: Added Google Fonts (Orbitron, JetBrains Mono, Inter) for professional typography
- **CSS Framework**: Enhanced custom CSS classes for consistent styling and effects

## Changelog

### June 29, 2025 - Final Professional Polish & Comprehensive Documentation
**Major UI/UX Improvements:**
- **Slower Typing Animation**: Reduced typing speed from 30ms to 100ms for better readability
- **Black Logo Design**: Complete logo redesign with professional black and white theme
- **NPR Currency Integration**: All pricing converted to Nepali Rupees for local market
- **Enhanced Responsiveness**: Added comprehensive mobile-first responsive design
- **Text Visibility**: Removed all glow effects for maximum readability and professional appearance

**Complete Documentation:**
- **Comprehensive README.md**: Created detailed user and developer manual
- **API Documentation**: Complete endpoint documentation with examples
- **Deployment Guide**: Step-by-step deployment instructions for multiple platforms
- **Developer Workflow**: Detailed contribution guidelines and development practices
- **User Guide**: Complete navigation and feature usage instructions

**Technical Infrastructure:**
- **Full Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Currency Localization**: Complete NPR integration in pricing calculator and all cost displays
- **Professional Styling**: Clean, corporate-style design without distracting effects
- **Performance Optimization**: Enhanced loading speeds and smooth animations

Changelog:
- June 29, 2025. Initial setup, major enhancements, and comprehensive documentation