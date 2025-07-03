# 🚀 Professional Portfolio - Yubraj Kurmi

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YourUsername/portfolio)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YourUsername/portfolio)
[![Deploy to Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/YourUsername/portfolio)

A modern, responsive full-stack portfolio application built with React, TypeScript, and Node.js. Features a professional design with comprehensive SEO optimization, performance monitoring, and multi-platform deployment support.

## ✨ Key Features

- **🎨 Modern Design**: Clean, professional interface with dark/light mode support
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Fast loading with lazy loading and code splitting
- **🔍 SEO Optimized**: Comprehensive SEO with structured data and meta tags
- **🛡️ Security Focused**: Helmet.js security headers and rate limiting
- **📊 Analytics Ready**: Google Analytics and performance monitoring
- **🚀 Multi-Platform Deployment**: Deploy to Vercel, Netlify, Heroku, or Railway
- **💼 Professional Features**: Contact form, pricing calculator, testimonials
- **🔄 Progressive Web App**: PWA features with service worker

## 🏗️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: Radix UI primitives + shadcn/ui
- **Animations**: Framer Motion for smooth interactions
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state

### Backend
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schemas with express-validator
- **Security**: Helmet.js, CORS, rate limiting
- **Session**: Connect-pg-simple for session storage

### DevOps & Deployment
- **Build Tool**: Vite for fast development and optimized builds
- **Type Checking**: TypeScript with strict mode
- **Code Quality**: ESLint and Prettier
- **Deployment**: Multi-platform support (Vercel, Netlify, Heroku, Railway)
- **Containerization**: Docker and Docker Compose ready

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ and npm 10+
- PostgreSQL 14+ (for production)
- Git for version control

### Local Development

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
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5000
   ```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment Options

### 🔷 Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

3. **Environment Variables**
   Set in Vercel dashboard:
   ```
   DATABASE_URL=your-postgres-url
   SESSION_SECRET=your-secret-key
   NODE_ENV=production
   ```

### 🔷 Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy to Netlify**
   ```bash
   netlify deploy --prod
   ```

3. **Environment Variables**
   Set in Netlify dashboard or `netlify.toml`

### 🔷 Railway

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Deploy to Railway**
   ```bash
   railway login
   railway link
   railway up
   ```

3. **Database Setup**
   ```bash
   railway add postgresql
   ```

### 🔷 Heroku

1. **Install Heroku CLI**
   ```bash
   # macOS
   brew install heroku/brew/heroku
   
   # Ubuntu
   sudo snap install --classic heroku
   ```

2. **Deploy to Heroku**
   ```bash
   heroku create your-app-name
   heroku addons:create heroku-postgresql:hobby-dev
   git push heroku main
   ```

3. **Configure Environment**
   ```bash
   heroku config:set SESSION_SECRET=your-secret-key
   heroku config:set NODE_ENV=production
   ```

### 🔷 Docker Deployment

1. **Build Docker image**
   ```bash
   docker build -t portfolio .
   ```

2. **Run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

3. **Environment Configuration**
   ```bash
   # Create .env file with production values
   cp .env.example .env
   ```

### 🔷 VPS/Self-Hosted

1. **Server Setup**
   ```bash
   # Install Node.js, PostgreSQL, and PM2
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs postgresql pm2
   ```

2. **Application Setup**
   ```bash
   # Clone and build
   git clone https://github.com/YourUsername/portfolio.git
   cd portfolio
   npm install
   npm run build
   ```

3. **Process Management**
   ```bash
   # Start with PM2
   pm2 start dist/index.js --name portfolio
   pm2 startup
   pm2 save
   ```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ | - |
| `SESSION_SECRET` | Session encryption key | ✅ | - |
| `NODE_ENV` | Environment mode | ✅ | development |
| `PORT` | Server port | ❌ | 5000 |
| `CORS_ORIGIN` | Allowed origins | ❌ | localhost |

### Database Setup

1. **PostgreSQL Setup**
   ```sql
   CREATE DATABASE portfolio_db;
   CREATE USER portfolio_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
   ```

2. **Run Migrations**
   ```bash
   npm run db:push
   ```

### SEO Configuration

Update SEO settings in `client/src/components/ui/seo-head.tsx`:
- Site title and description
- Social media handles
- Contact information
- Geographic location
- Structured data

## 📊 Performance Optimization

### Frontend Optimizations
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components load on demand
- **Asset Optimization**: Compressed images and fonts
- **Caching**: Service worker with caching strategies

### Backend Optimizations
- **Compression**: Gzip compression for all responses
- **Rate Limiting**: Prevent abuse and improve stability
- **Security Headers**: Comprehensive security configuration
- **Database Indexing**: Optimized database queries

### Monitoring
- **Performance Metrics**: Core Web Vitals tracking
- **Error Monitoring**: Comprehensive error logging
- **Health Checks**: Application health monitoring
- **Analytics**: User behavior tracking

## 🛡️ Security Features

### Security Headers
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Strict-Transport-Security
- Referrer-Policy

### Input Validation
- Server-side validation with Zod
- Client-side validation with React Hook Form
- SQL injection prevention
- XSS protection

### Rate Limiting
- Global rate limiting: 100 requests per 15 minutes
- Contact form: 5 submissions per 15 minutes
- API endpoints: Custom limits per endpoint

## 📱 Progressive Web App (PWA)

### Features
- **Offline Support**: Service worker with caching
- **App-like Experience**: Native app feel
- **Push Notifications**: Contact form notifications
- **Background Sync**: Offline form submissions

### Installation
The app can be installed on mobile devices and desktop browsers as a PWA.

## 🔍 SEO Optimization

### Technical SEO
- **Structured Data**: JSON-LD for rich snippets
- **Meta Tags**: Comprehensive meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling directives

### Content SEO
- **Semantic HTML**: Proper HTML structure
- **Alt Text**: Image accessibility and SEO
- **Schema Markup**: Person, Organization, and FAQ schemas
- **Local SEO**: Geographic targeting for Nepal market

## 📈 Analytics & Monitoring

### Google Analytics
```javascript
// Add to environment variables
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Performance Monitoring
- Core Web Vitals tracking
- Load time measurements
- Error rate monitoring
- User interaction tracking

## 🧪 Testing

### Manual Testing
```bash
# Type checking
npm run check

# Build verification
npm run build
```

### Automated Testing
```bash
# Run tests (when implemented)
npm test

# Coverage report
npm run test:coverage
```

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Database Connection Issues
```bash
# Check connection string
echo $DATABASE_URL

# Test connection
npm run db:push
```

#### Port Conflicts
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=3000 npm run dev
```

#### Performance Issues
- Check network tab in browser DevTools
- Verify image optimization
- Monitor Core Web Vitals
- Check for memory leaks

## 📚 API Documentation

### Endpoints

#### Health Check
```http
GET /health
```
Returns application health status and metrics.

#### Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

#### Portfolio Stats
```http
GET /api/stats
```
Returns dynamic portfolio statistics.

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Code Standards
- Follow TypeScript best practices
- Use meaningful variable names
- Add comments for complex logic
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Radix UI** for accessible component primitives
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Replit** for development environment
- **Vercel** for deployment platform

## 📞 Support

### Get Help
- **Documentation**: Check this README and code comments
- **Issues**: Create a GitHub issue for bugs
- **Email**: Contact developerrajir@gmail.com for support

### Professional Services
Available for freelance projects and consultations:
- Web application development
- API development and integration
- Performance optimization
- SEO and analytics setup
- Deployment and DevOps

---

**Built with ❤️ by [Yubraj Kurmi](https://github.com/DevMaestroHQ)**

*Professional Full Stack Developer | Building the future, one line at a time*