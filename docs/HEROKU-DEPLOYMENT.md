# ⚡ Heroku Deployment Guide

## Overview
Deploy your portfolio to Heroku with managed PostgreSQL database, automatic builds, and easy scaling.

## Prerequisites
- Node.js 20+ installed
- Git repository
- Heroku account
- Heroku CLI installed

## Step 1: Heroku Setup

### 1.1 Install Heroku CLI
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Windows
# Download from https://devcenter.heroku.com/articles/heroku-cli

# Linux
curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
```

### 1.2 Login to Heroku
```bash
heroku login
```

### 1.3 Create Heroku App
```bash
# Create new app
heroku create your-portfolio-app

# Or with specific region
heroku create your-portfolio-app --region eu
```

## Step 2: Database Setup

### 2.1 Add PostgreSQL Database
```bash
# Add Heroku Postgres (free tier)
heroku addons:create heroku-postgresql:hobby-dev

# For production (paid)
heroku addons:create heroku-postgresql:hobby-basic
```

### 2.2 Get Database URL
```bash
# View database info
heroku config:get DATABASE_URL

# Alternative: View all config
heroku config
```

## Step 3: Environment Configuration

### 3.1 Set Environment Variables
```bash
# Required variables
heroku config:set NODE_ENV=production
heroku config:set SESSION_SECRET=$(openssl rand -base64 32)

# CORS origin (replace with your app name)
heroku config:set CORS_ORIGIN=https://your-portfolio-app.herokuapp.com

# Optional: Email configuration
heroku config:set SMTP_HOST=smtp.gmail.com
heroku config:set SMTP_PORT=587
heroku config:set SMTP_USER=your-email@gmail.com
heroku config:set SMTP_PASS=your-app-password
```

### 3.2 Verify Configuration
```bash
# Check all environment variables
heroku config

# Should show:
# DATABASE_URL: postgres://...
# NODE_ENV: production
# SESSION_SECRET: ...
# CORS_ORIGIN: https://...
```

## Step 4: Prepare Application

### 4.1 Verify Procfile
Ensure `Procfile` exists in root directory:
```
web: node dist/index.js
```

### 4.2 Update Package.json Scripts
Add Heroku-specific scripts:
```json
{
  "scripts": {
    "heroku-prebuild": "npm install --only=dev",
    "heroku-postbuild": "npm run build",
    "start": "NODE_ENV=production node dist/index.js"
  },
  "engines": {
    "node": "20.x",
    "npm": "10.x"
  }
}
```

### 4.3 Configure Build Process
Create `.buildpacks` file (optional):
```
https://github.com/heroku/heroku-buildpack-nodejs
```

## Step 5: Deploy Application

### 5.1 Initialize Git Repository
```bash
# If not already initialized
git init
git add .
git commit -m "Initial commit"
```

### 5.2 Add Heroku Remote
```bash
# Add Heroku remote
heroku git:remote -a your-portfolio-app

# Verify remotes
git remote -v
```

### 5.3 Deploy to Heroku
```bash
# Deploy to Heroku
git push heroku main

# Or if using master branch
git push heroku master
```

### 5.4 Monitor Deployment
```bash
# View build logs
heroku logs --tail

# Check app status
heroku ps
```

## Step 6: Database Migration

### 6.1 Run Database Setup
```bash
# Connect to Heroku Postgres
heroku pg:psql

# Or run migrations if using Drizzle
heroku run npm run db:push
```

### 6.2 Verify Database Connection
```bash
# Check database info
heroku pg:info

# Test connection
heroku run node -e "console.log(process.env.DATABASE_URL)"
```

## Step 7: Custom Domain Setup

### 7.1 Add Custom Domain
```bash
# Add your domain
heroku domains:add www.yourdomain.com
heroku domains:add yourdomain.com
```

### 7.2 Configure DNS
Set up DNS records with your domain provider:
```
Type: CNAME
Name: www
Value: your-portfolio-app.herokuapp.com

Type: CNAME  
Name: @
Value: your-portfolio-app.herokuapp.com
```

### 7.3 SSL Certificate
```bash
# Enable automatic SSL
heroku certs:auto:enable

# Check SSL status
heroku certs:auto
```

## Step 8: Scaling and Performance

### 8.1 Scale Dynos
```bash
# Check current dyno usage
heroku ps

# Scale web dynos
heroku ps:scale web=1

# For production, scale up
heroku ps:scale web=2
```

### 8.2 Monitor Performance
```bash
# View metrics
heroku logs --tail

# Monitor dyno metrics
heroku logs --dyno=web.1

# Check memory usage
heroku logs --source=app --dyno=web.1
```

## Step 9: Continuous Deployment

### 9.1 Connect to GitHub
1. Go to Heroku Dashboard
2. Select your app
3. Go to Deploy tab
4. Connect to GitHub
5. Enable automatic deploys

### 9.2 Pipeline Setup (Optional)
```bash
# Create pipeline
heroku pipelines:create your-portfolio-pipeline

# Add app to pipeline
heroku pipelines:add your-portfolio-pipeline --app your-portfolio-app --stage production
```

## Step 10: Monitoring and Logging

### 10.1 View Logs
```bash
# Real-time logs
heroku logs --tail

# Filter logs
heroku logs --source=app
heroku logs --dyno=web.1

# Download logs
heroku logs --num=1000 > app_logs.txt
```

### 10.2 Add-ons for Monitoring
```bash
# Error tracking
heroku addons:create sentry:f1

# Performance monitoring
heroku addons:create newrelic:wayne

# Log management  
heroku addons:create papertrail:choklad
```

## Troubleshooting

### Build Failures
```bash
# Common issues and solutions:

# 1. Node version mismatch
# Fix: Update engines in package.json

# 2. Build timeout
# Fix: Optimize build process, remove unnecessary dependencies

# 3. Memory issues during build
# Check: heroku logs --tail during build
```

### Runtime Errors
```bash
# Application crashes
heroku logs --tail

# Database connection issues
heroku pg:info
heroku config:get DATABASE_URL

# Memory leaks
heroku ps:restart
```

### Performance Issues
```bash
# High response times
# Enable compression
# Optimize database queries
# Use CDN for static assets

# Memory usage
heroku ps:exec
# Monitor memory usage in real-time
```

## Cost Management

### 11.1 Free Tier Limits
- **Dyno hours**: 550/month (verified account: 1000)
- **PostgreSQL**: 10,000 rows
- **Sleeping**: Apps sleep after 30 minutes of inactivity

### 11.2 Hobby Tier ($7/month)
- **No sleeping**: Apps stay awake 24/7
- **Custom domains**: SSL included
- **Metrics**: Basic metrics dashboard

### 11.3 Production Tier ($25+/month)
- **Horizontal scaling**: Multiple dynos
- **High availability**: 99.95% SLA
- **Advanced metrics**: Detailed monitoring

## Backup and Recovery

### 12.1 Database Backups
```bash
# Manual backup
heroku pg:backups:capture

# Schedule automatic backups
heroku pg:backups:schedule DATABASE_URL --at "04:00 UTC"

# List backups
heroku pg:backups

# Restore from backup
heroku pg:backups:restore <backup-id> DATABASE_URL
```

### 12.2 Code Rollbacks
```bash
# View releases
heroku releases

# Rollback to previous release
heroku rollback v123
```

## Security Best Practices

### 13.1 Environment Variables
- Never commit secrets to Git
- Use Heroku config vars for all sensitive data
- Rotate secrets regularly

### 13.2 Database Security
```bash
# View database credentials
heroku pg:credentials:url

# Rotate database credentials
heroku pg:credentials:rotate
```

### 13.3 SSL/TLS
- Always use HTTPS in production
- Enable automatic SSL certificates
- Configure proper security headers

## Migration from Other Platforms

### 14.1 From Vercel
```bash
# Export environment variables
# Update build configuration
# Deploy to Heroku
```

### 14.2 From Netlify
```bash
# Migrate functions to API routes
# Update deployment configuration
# Test thoroughly
```

## Support Resources

- **Documentation**: https://devcenter.heroku.com
- **Support**: https://help.heroku.com
- **Status**: https://status.heroku.com
- **Community**: https://stackoverflow.com/questions/tagged/heroku

## Advanced Features

### 15.1 Review Apps
Automatic deployment for pull requests:
```bash
heroku features:enable review-apps
```

### 15.2 Heroku Connect
Sync with Salesforce:
```bash
heroku addons:create herokuconnect
```

### 15.3 Heroku Redis
Add caching layer:
```bash
heroku addons:create heroku-redis:hobby-dev
```

---

**Deployment Status**: ✅ Ready for Heroku
**Estimated Setup Time**: 30-45 minutes
**Difficulty**: Beginner to Intermediate