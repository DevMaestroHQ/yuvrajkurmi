# 🌐 Netlify Deployment Guide

## Overview
Deploy your portfolio to Netlify with static site hosting, edge functions, and continuous deployment from Git.

## Prerequisites
- Node.js 20+ installed
- Git repository
- PostgreSQL database (external service required)
- Netlify account

## Step 1: Prepare Your Project

### 1.1 Environment Variables
Create a `.env.production` file:
```env
DATABASE_URL="postgresql://username:password@host:port/database"
SESSION_SECRET="your-super-secure-session-secret"
NODE_ENV="production"
CORS_ORIGIN="https://your-site.netlify.app"
```

### 1.2 Verify Configuration
Ensure your `netlify.toml` is properly set up:
```toml
[build]
  command = "npm run build"
  publish = "dist/public"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "20"
  NPM_VERSION = "10"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Step 2: Database Setup

### 2.1 External Database Required
Netlify doesn't provide database hosting, use external services:

**Option A: Neon (Recommended)**
```bash
# Sign up at https://neon.tech
# Create new project
# Get connection string
DATABASE_URL="postgresql://username:password@host.neon.tech/database?sslmode=require"
```

**Option B: Supabase**
```bash
# Sign up at https://supabase.com
# Create project and get database URL
DATABASE_URL="postgresql://postgres:password@host.supabase.co:5432/postgres"
```

**Option C: Railway**
```bash
# Sign up at https://railway.app
# Add PostgreSQL service
# Copy connection string
DATABASE_URL="postgresql://postgres:password@host.railway.app:port/railway"
```

## Step 3: Create Netlify Functions

### 3.1 Create Functions Directory
```bash
mkdir -p netlify/functions
```

### 3.2 Create API Handler Function
Create `netlify/functions/api.js`:
```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

exports.handler = async (event, context) => {
  const url = parse(event.path, true);
  
  return new Promise((resolve, reject) => {
    app.prepare().then(() => {
      const server = createServer((req, res) => {
        req.url = event.path;
        req.method = event.httpMethod;
        req.headers = event.headers;
        
        if (event.body) {
          req.body = event.isBase64Encoded 
            ? Buffer.from(event.body, 'base64').toString()
            : event.body;
        }

        handle(req, res);
        
        res.on('finish', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.getHeaders(),
            body: res.body
          });
        });
      });
    });
  });
};
```

## Step 4: Deploy via Netlify CLI

### 4.1 Install Netlify CLI
```bash
npm install -g netlify-cli
```

### 4.2 Login to Netlify
```bash
netlify login
```

### 4.3 Initialize Site
```bash
netlify init
```

### 4.4 Deploy
```bash
# Build and deploy
npm run build
netlify deploy --prod --dir=dist/public
```

## Step 5: Deploy via Netlify Dashboard

### 5.1 Connect Repository
1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Choose your Git provider (GitHub, GitLab, Bitbucket)
4. Select your repository

### 5.2 Build Settings
Configure deployment settings:
- **Build command**: `npm run build`
- **Publish directory**: `dist/public`
- **Functions directory**: `netlify/functions`

### 5.3 Environment Variables
Add in Site Settings > Environment Variables:
```
DATABASE_URL = your_database_connection_string
SESSION_SECRET = your_session_secret
NODE_ENV = production
CORS_ORIGIN = https://your-site.netlify.app
```

### 5.4 Deploy
Click "Deploy site" and monitor build logs.

## Step 6: Configure Custom Domain

### 6.1 Add Custom Domain
1. Go to Site Settings > Domain Management
2. Click "Add custom domain"
3. Enter your domain name

### 6.2 DNS Configuration
Configure your DNS provider:
```
Type: CNAME
Name: www
Value: your-site.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

### 6.3 SSL Certificate
Netlify automatically provisions Let's Encrypt SSL certificates.

## Step 7: Advanced Configuration

### 7.1 Form Handling
For contact forms, use Netlify Forms:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- form fields -->
</form>
```

### 7.2 Redirects and Rewrites
Add to `netlify.toml`:
```toml
[[redirects]]
  from = "/old-page"
  to = "/new-page"
  status = 301

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200
```

### 7.3 Headers Configuration
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
```

## Step 8: Verification

### 8.1 Test Deployment
- [ ] Homepage loads correctly
- [ ] Static assets serve properly
- [ ] Contact form submits (if using Netlify Forms)
- [ ] Functions execute correctly
- [ ] Custom domain resolves

### 8.2 Performance Testing
```bash
# Test site performance
curl -I https://your-site.netlify.app
lighthouse https://your-site.netlify.app
```

## Step 9: Monitoring and Analytics

### 9.1 Netlify Analytics
Enable in Site Settings > Analytics:
- Page views
- Unique visitors
- Referrers
- Popular pages

### 9.2 Function Logs
Monitor function execution in Functions tab:
- Invocations
- Execution time
- Error rates
- Bandwidth usage

## Troubleshooting

### Build Failures
```bash
# Common issues:
# - Node version mismatch
# - Missing environment variables
# - Build timeout (default 15 minutes)
# - Memory limits exceeded
```

### Function Errors
```bash
# Check function logs
netlify functions:log

# Local function testing
netlify dev
```

### Database Connection Issues
```bash
# Verify external database accessibility
# Check connection string format
# Ensure database allows external connections
```

## Limitations

### 9.1 Function Constraints
- **Execution time**: 10 seconds (free), 15 minutes (pro)
- **Memory**: 1008 MB
- **Bundle size**: 50 MB zipped

### 9.2 Build Limits
- **Build time**: 15 minutes (free), 30 minutes (pro)
- **Concurrent builds**: 1 (free), 3 (pro)
- **Build minutes**: 300/month (free)

## Cost Structure

### 10.1 Starter (Free)
- 100GB bandwidth/month
- 125K function requests/month
- 300 build minutes/month

### 10.2 Pro ($19/month)
- 1TB bandwidth/month
- 2M function requests/month
- 25,000 build minutes/month

## Best Practices

### 11.1 Performance Optimization
- Use Netlify's CDN for asset delivery
- Optimize images with Netlify Image CDN
- Implement proper caching headers

### 11.2 Security
- Use environment variables for secrets
- Configure proper CORS headers
- Implement Content Security Policy

### 11.3 SEO
- Use Netlify's built-in sitemap generation
- Configure proper meta tags
- Implement structured data

## Support Resources

- **Documentation**: https://docs.netlify.com
- **Community**: https://community.netlify.com
- **Support**: support@netlify.com

## Alternative Approaches

### 12.1 Static Site Only
For portfolio without dynamic features:
```bash
# Build static version
npm run build:static
netlify deploy --prod --dir=dist
```

### 12.2 Jamstack Architecture
Combine with headless CMS:
- Contentful
- Strapi
- Sanity

---

**Deployment Status**: ✅ Ready for Netlify
**Estimated Setup Time**: 20-40 minutes
**Difficulty**: Intermediate