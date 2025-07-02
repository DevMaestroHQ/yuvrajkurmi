# YUBRAJ KURMI - Full Stack Developer Portfolio

<div align="center">

![Portfolio Logo](https://img.shields.io/badge/YUBRAJ%20KURMI-Full%20Stack%20Developer-blue?style=for-the-badge&logo=react&logoColor=white)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Professional • Modern • Responsive • SEO Optimized**

[🌐 Live Demo](https://your-portfolio-url.vercel.app) • [📧 Contact](mailto:developerrajir@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/yuvrajkurmi03) • [🐙 GitHub](https://github.com/DevMaestroHQ)

</div>

---

## ✨ About This Portfolio

A professional full-stack developer portfolio showcasing expertise in React, Node.js, TypeScript, and modern web technologies. Built with performance, accessibility, and user experience in mind, featuring authentic projects, comprehensive resume integration, and optimized for hiring managers and recruiters.

### 🚀 Key Features

- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ High Performance** - Fast loading with optimized assets and caching
- **🔍 SEO Optimized** - Complete meta tags, structured data, and sitemap
- **🌙 Dark/Light Mode** - Adaptive theming with system preference detection
- **📊 Interactive Components** - Skills radar, pricing calculator, testimonials
- **🔒 Privacy Focused** - Contact information protected with appropriate masking
- **♿ Accessible** - WCAG compliant with keyboard navigation support

---

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript for type-safe development
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations and transitions
- **Radix UI** for accessible component primitives
- **TanStack Query** for efficient server state management
- **Wouter** for lightweight client-side routing

### Backend
- **Express.js** with TypeScript for robust API development
- **PostgreSQL** with Drizzle ORM for type-safe database operations
- **Session Management** with connect-pg-simple
- **Security** with Helmet.js, CORS, and rate limiting
- **Validation** with Zod and express-validator

### Development Tools
- **ESLint & Prettier** for code quality and formatting
- **Drizzle Kit** for database migrations
- **TSX** for running TypeScript in development
- **Hot Module Replacement** for instant development feedback

---

## 📋 Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn** (version 1.22.0 or higher)
- **PostgreSQL** (version 13.0 or higher) - for production database
- **Git** for version control

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)
- **RAM**: Minimum 4GB, recommended 8GB
- **Storage**: At least 1GB free space
- **Internet Connection**: Required for package installation and external services

---

## 🚀 Installation & Local Setup

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/DevMaestroHQ/portfolio.git

# Navigate to project directory
cd portfolio
```

### Step 2: Install Dependencies

Choose your preferred package manager:

#### Using npm (Recommended)
```bash
npm install
```

#### Using Yarn
```bash
yarn install
```

#### Using pnpm
```bash
pnpm install
```

### Step 3: Environment Configuration

1. **Copy the environment file**:
   ```bash
   cp .env .env.local
   ```

2. **Configure your environment variables** in `.env.local`:

   ```bash
   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/portfolio_db"
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Session Security
   SESSION_SECRET="your-super-secure-session-secret-change-this"
   
   # CORS Configuration
   CORS_ORIGIN="http://localhost:3000,http://localhost:5173"
   
   # Optional: Email Configuration (for contact form)
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT=587
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-app-password"
   ```

### Step 4: Database Setup

#### Option A: PostgreSQL (Recommended for Production)

1. **Install PostgreSQL**:
   - **Windows**: Download from [postgresql.org](https://www.postgresql.org/download/windows/)
   - **macOS**: `brew install postgresql`
   - **Linux**: `sudo apt-get install postgresql postgresql-contrib`

2. **Create database**:
   ```bash
   # Connect to PostgreSQL
   psql -U postgres
   
   # Create database
   CREATE DATABASE portfolio_db;
   
   # Create user (optional)
   CREATE USER portfolio_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
   
   # Exit PostgreSQL
   \q
   ```

3. **Run database migrations**:
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

#### Option B: SQLite (For Development Only)

If you prefer to use SQLite for development:

1. **Update `.env.local`**:
   ```bash
   DATABASE_URL="file:./dev.db"
   ```

2. **Run migrations**:
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

### Step 5: Start Development Server

```bash
# Start the development server
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

---

## 📜 Available Scripts

### Essential Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix
```

### Database Commands

```bash
# Generate new migration
npm run db:generate

# Apply migrations
npm run db:migrate

# Reset database
npm run db:reset

# View database in Drizzle Studio
npm run db:studio
```

### Testing Commands

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Configure `vercel.json`** (already included):
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server/index.ts",
         "use": "@vercel/node"
       },
       {
         "src": "client/dist/**",
         "use": "@vercel/static"
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "/server/index.ts"
       },
       {
         "src": "/(.*)",
         "dest": "/client/dist/$1"
       }
     ]
   }
   ```

4. **Deploy**:
   ```bash
   # Build the project
   npm run build
   
   # Deploy to Vercel
   vercel --prod
   ```

5. **Configure Environment Variables** in Vercel Dashboard:
   - Go to your project settings in Vercel
   - Add all environment variables from your `.env.local`
   - Set `NODE_ENV=production`

### Deploy to Railway

1. **Install Railway CLI**:
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and deploy**:
   ```bash
   railway login
   railway init
   railway up
   ```

### Deploy to Heroku

1. **Install Heroku CLI** and login:
   ```bash
   heroku login
   ```

2. **Create Heroku app**:
   ```bash
   heroku create your-portfolio-name
   ```

3. **Add PostgreSQL addon**:
   ```bash
   heroku addons:create heroku-postgresql:hobby-dev
   ```

4. **Configure environment variables**:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set SESSION_SECRET=your-secure-secret
   ```

5. **Deploy**:
   ```bash
   git push heroku main
   ```

### Deploy to Digital Ocean

1. **Create a Droplet** with Node.js pre-installed
2. **Connect via SSH** and clone your repository
3. **Install dependencies** and configure environment
4. **Use PM2** for process management:
   ```bash
   npm install -g pm2
   pm2 start ecosystem.config.js
   pm2 startup
   pm2 save
   ```

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Yes | `postgresql://user:pass@localhost:5432/db` |
| `SESSION_SECRET` | Session encryption key | Yes | `your-super-secure-secret` |
| `PORT` | Server port | No | `5000` |
| `NODE_ENV` | Environment mode | No | `development` |
| `CORS_ORIGIN` | Allowed CORS origins | No | `http://localhost:3000` |
| `SMTP_HOST` | Email server host | No | `smtp.gmail.com` |
| `SMTP_USER` | Email username | No | `your-email@gmail.com` |

### Custom Configuration

#### 1. Update Personal Information

Edit these files to customize with your information:

- `client/src/components/ui/logo.tsx` - Logo and name
- `client/src/pages/home.tsx` - Hero section and skills
- `client/src/pages/about.tsx` - Personal information
- `client/src/pages/projects.tsx` - Project portfolio
- `client/src/pages/experience.tsx` - Work experience
- `client/src/pages/resume.tsx` - Resume details

#### 2. Customize Styling

- `client/src/index.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind CSS configuration
- `client/src/lib/animations.ts` - Animation variants

#### 3. Add New Pages

1. Create new page component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation in `client/src/components/layout/navbar.tsx`

---

## 🚨 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>

# Or use different port
PORT=5001 npm run dev
```

#### 2. Database Connection Failed
- Verify PostgreSQL is running: `pg_ctl status`
- Check connection string in `.env.local`
- Ensure database exists and user has permissions

#### 3. Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist
npm run build
```

#### 4. TypeScript Errors
```bash
# Check TypeScript configuration
npm run type-check

# Update TypeScript definitions
npm install --save-dev @types/node @types/react @types/react-dom
```

#### 5. Styling Issues
```bash
# Rebuild Tailwind CSS
npm run build:css

# Clear browser cache and hard reload
# Chrome: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

### Performance Issues

#### 1. Slow Loading
- Enable gzip compression in production
- Optimize images and assets
- Use CDN for static assets
- Enable browser caching

#### 2. Large Bundle Size
```bash
# Analyze bundle size
npm run build -- --analyze

# Remove unused dependencies
npm run depcheck
```

---

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Make changes** and test thoroughly
4. **Commit changes**: `git commit -m 'Add amazing feature'`
5. **Push to branch**: `git push origin feature/amazing-feature`
6. **Open Pull Request**

### Code Standards

- **ESLint** for code quality
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Conventional Commits** for commit messages

### Testing

```bash
# Run tests before committing
npm run test
npm run type-check
npm run lint
```

---

## 📚 Documentation

### API Documentation

#### Contact Form Endpoint

```typescript
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project...",
  "projectType": "web-application",
  "budget": "10000-25000"
}
```

#### Health Check

```typescript
GET /health
Response: { "status": "ok", "timestamp": "2025-07-02T14:30:00Z" }
```

### Component Documentation

#### Logo Component
```typescript
import Logo from '@/components/ui/logo';

<Logo size="md" showText={true} />
```

#### Theme Toggle
```typescript
import { ThemeToggle } from '@/components/ui/theme-toggle';

<ThemeToggle />
```

---

## 📈 Performance Optimization

### Frontend Optimizations

- **Code Splitting** with React.lazy()
- **Image Optimization** with lazy loading
- **Bundle Analysis** with webpack-bundle-analyzer
- **Caching Strategy** with service workers
- **CSS Optimization** with PurgeCSS

### Backend Optimizations

- **Database Connection Pooling**
- **Response Compression** with gzip
- **API Rate Limiting**
- **Request Validation** and sanitization
- **Error Handling** and logging

### SEO Optimizations

- **Meta Tags** for all pages
- **Open Graph** and Twitter Card support
- **Structured Data** with JSON-LD
- **Sitemap.xml** generation
- **Robots.txt** configuration

---

## 🔒 Security

### Security Features

- **Helmet.js** for security headers
- **CORS** configuration
- **Rate Limiting** on API endpoints
- **Input Validation** and sanitization
- **Session Security** with secure cookies
- **SQL Injection** prevention with parameterized queries

### Security Checklist

- [ ] Environment variables are not committed to git
- [ ] Session secret is cryptographically strong
- [ ] HTTPS is enabled in production
- [ ] Database credentials are secure
- [ ] API endpoints are rate limited
- [ ] User input is validated and sanitized

---

## 📞 Support & Contact

### Get Help

- **📧 Email**: [developerrajir@gmail.com](mailto:developerrajir@gmail.com)
- **💼 LinkedIn**: [linkedin.com/in/yuvrajkurmi03](https://linkedin.com/in/yuvrajkurmi03)
- **🐙 GitHub**: [github.com/DevMaestroHQ](https://github.com/DevMaestroHQ)

### Issue Reporting

When reporting issues, please include:

1. **Environment details** (OS, Node.js version, npm version)
2. **Steps to reproduce** the issue
3. **Expected behavior** vs actual behavior
4. **Error messages** or logs
5. **Screenshots** if applicable

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vercel** for hosting and deployment platform
- **Tailwind CSS** for the utility-first CSS framework
- **Radix UI** for accessible component primitives
- **Framer Motion** for smooth animations
- **All contributors** who helped improve this project

---

<div align="center">

**Built with ❤️ by YUBRAJ KURMI**

[🌐 Portfolio](https://your-portfolio-url.vercel.app) • [📧 Email](mailto:developerrajir@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/yuvrajkurmi03) • [🐙 GitHub](https://github.com/DevMaestroHQ)

</div>