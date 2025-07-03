# 🚀 Vercel Deployment Guide

## Overview
Deploy your portfolio to Vercel with automatic builds, serverless functions, and global CDN distribution.

## Prerequisites
- Node.js 20+ installed
- Git repository
- PostgreSQL database (Neon, Supabase, or other cloud provider)
- Vercel account

## Step 1: Prepare Your Project

### 1.1 Environment Variables
Create a `.env.local` file with production values:
```env
DATABASE_URL="postgresql://username:password@host:port/database"
SESSION_SECRET="your-super-secure-session-secret"
NODE_ENV="production"
CORS_ORIGIN="https://your-domain.vercel.app"
```

### 1.2 Verify Build Configuration
Ensure your `vercel.json` is properly configured:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "client/src/main.tsx",
      "use": "@vercel/static-build",
      "config": {
        "buildCommand": "npm run build",
        "outputDirectory": "dist/public"
      }
    },
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/public/$1"
    }
  ]
}
```

## Step 2: Database Setup

### 2.1 Neon Database (Recommended)
```bash
# Create account at https://neon.tech
# Create new project
# Copy connection string
DATABASE_URL="postgresql://username:password@host.neon.tech/database?sslmode=require"
```

### 2.2 Supabase Alternative
```bash
# Create account at https://supabase.com
# Create new project
# Get connection string from Settings > Database
DATABASE_URL="postgresql://postgres:password@host.supabase.co:5432/postgres"
```

## Step 3: Deploy via Vercel CLI

### 3.1 Install Vercel CLI
```bash
npm install -g vercel
```

### 3.2 Login to Vercel
```bash
vercel login
```

### 3.3 Deploy Project
```bash
# Initialize project
vercel

# Deploy to production
vercel --prod
```

## Step 4: Deploy via Vercel Dashboard

### 4.1 Import Project
1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import your Git repository
4. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

### 4.2 Environment Variables
Add these in Project Settings > Environment Variables:
```
DATABASE_URL = your_database_connection_string
SESSION_SECRET = your_session_secret
NODE_ENV = production
CORS_ORIGIN = https://your-domain.vercel.app
```

### 4.3 Deploy
Click "Deploy" and wait for build completion.

## Step 5: Configure Custom Domain (Optional)

### 5.1 Add Domain
1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

### 5.2 Update Environment Variables
```env
CORS_ORIGIN="https://your-custom-domain.com"
```

## Step 6: Verification

### 6.1 Test Deployment
Visit your deployed URL and verify:
- [ ] Homepage loads correctly
- [ ] All pages navigate properly
- [ ] Contact form submits successfully
- [ ] API endpoints respond
- [ ] Database connection works

### 6.2 Performance Check
```bash
# Test with curl
curl -I https://your-domain.vercel.app
curl https://your-domain.vercel.app/health
curl https://your-domain.vercel.app/api/stats
```

## Step 7: Continuous Deployment

### 7.1 Automatic Deployments
Vercel automatically deploys on:
- Push to main branch (production)
- Push to other branches (preview)
- Pull requests (preview)

### 7.2 Build Hooks
Configure build hooks in Project Settings for manual deployments:
```bash
curl -X POST https://api.vercel.com/v1/integrations/deploy/your-hook-id
```

## Troubleshooting

### Build Errors
```bash
# Check build logs in Vercel dashboard
# Common issues:
# - Missing environment variables
# - TypeScript errors
# - Missing dependencies
```

### Database Connection Issues
```bash
# Verify connection string format
# Check database accessibility
# Ensure SSL mode is enabled
```

### API Route Problems
```bash
# Verify vercel.json routing
# Check serverless function limits
# Monitor function logs
```

## Advanced Configuration

### 7.1 Custom Build Command
```json
{
  "scripts": {
    "vercel-build": "npm run build && npm run db:push"
  }
}
```

### 7.2 Serverless Function Configuration
```json
{
  "functions": {
    "server/index.ts": {
      "maxDuration": 30,
      "memory": 1024
    }
  }
}
```

### 7.3 Security Headers
Already configured in `vercel.json`:
- Content Security Policy
- HSTS
- XSS Protection
- Frame Options

## Monitoring and Analytics

### 8.1 Vercel Analytics
```bash
npm install @vercel/analytics
```

### 8.2 Performance Monitoring
- Check Core Web Vitals in Vercel dashboard
- Monitor function execution time
- Track deployment frequency

## Cost Optimization

### 9.1 Hobby Plan Limits
- 100GB bandwidth/month
- 100 serverless function executions/day
- 10 domains

### 9.2 Pro Plan Benefits
- Unlimited bandwidth
- Advanced analytics
- Team collaboration
- Priority support

## Support and Resources

- **Documentation**: https://vercel.com/docs
- **Community**: https://github.com/vercel/vercel/discussions
- **Support**: help@vercel.com

## Next Steps

1. Set up monitoring and alerts
2. Configure error tracking
3. Implement analytics
4. Set up backup strategy
5. Plan scaling approach

---

**Deployment Status**: ✅ Ready for Vercel
**Estimated Setup Time**: 15-30 minutes
**Difficulty**: Beginner Friendly