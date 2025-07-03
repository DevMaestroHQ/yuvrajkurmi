# 🚂 Railway Deployment Guide

## Overview
Deploy your portfolio to Railway with integrated PostgreSQL database, automatic deployments, and simple configuration.

## Prerequisites
- Node.js 20+ installed
- Git repository
- Railway account
- Railway CLI installed

## Step 1: Railway Setup

### 1.1 Install Railway CLI
```bash
# Install via NPM
npm install -g @railway/cli

# Or using curl
curl -fsSL https://railway.app/install.sh | sh

# Or via Homebrew (macOS)
brew install railway/cli/railway
```

### 1.2 Login to Railway
```bash
railway login
```

### 1.3 Initialize Project
```bash
# Initialize Railway project
railway init

# Choose "Empty Project" and enter project name
```

## Step 2: Database Setup

### 2.1 Add PostgreSQL Database
```bash
# Add PostgreSQL service
railway add postgresql

# Or via dashboard: Add Service > Database > PostgreSQL
```

### 2.2 Get Database Connection
```bash
# View database variables
railway variables

# Get specific database URL
railway variables get DATABASE_URL
```

## Step 3: Environment Configuration

### 3.1 Set Environment Variables
```bash
# Set production environment
railway variables set NODE_ENV=production

# Set session secret
railway variables set SESSION_SECRET=$(openssl rand -base64 32)

# Set CORS origin (will be updated after deployment)
railway variables set CORS_ORIGIN=https://your-app.railway.app

# Optional: Email configuration
railway variables set SMTP_HOST=smtp.gmail.com
railway variables set SMTP_PORT=587
railway variables set SMTP_USER=your-email@gmail.com
railway variables set SMTP_PASS=your-app-password
```

### 3.2 Verify Configuration
```bash
# List all variables
railway variables
```

## Step 4: Prepare Application

### 4.1 Create railway.json (Optional)
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/health",
    "healthcheckTimeout": 100,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### 4.2 Update Package.json
Ensure proper scripts and engine specifications:
```json
{
  "scripts": {
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "railway:build": "npm run build",
    "railway:start": "npm start"
  },
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=10.0.0"
  }
}
```

## Step 5: Deploy Application

### 5.1 Deploy via CLI
```bash
# Deploy current directory
railway up

# Or deploy specific service
railway up --service=web
```

### 5.2 Deploy via GitHub Integration

#### Connect Repository
1. Go to Railway Dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Configure build settings

#### Auto-Deploy Setup
Railway automatically deploys on:
- Push to main/master branch
- Pull request merges
- Manual triggers

### 5.3 Monitor Deployment
```bash
# View deployment logs
railway logs

# Follow logs in real-time
railway logs --follow

# View specific service logs
railway logs --service=web
```

## Step 6: Domain Configuration

### 6.1 Generate Railway Domain
```bash
# Generate public domain
railway domain

# View current domains
railway status
```

### 6.2 Custom Domain Setup
```bash
# Add custom domain
railway domain add yourdomain.com

# Add subdomain
railway domain add www.yourdomain.com
```

### 6.3 DNS Configuration
Configure your DNS provider:
```
Type: CNAME
Name: www
Value: your-app.railway.app

Type: CNAME
Name: @
Value: your-app.railway.app
```

### 6.4 Update CORS Origin
```bash
# Update CORS with your domain
railway variables set CORS_ORIGIN=https://yourdomain.com
```

## Step 7: Database Management

### 7.1 Access Database
```bash
# Connect to PostgreSQL
railway connect postgresql

# Or get connection details
railway variables get DATABASE_URL
```

### 7.2 Run Migrations
```bash
# Run database migrations
railway run npm run db:push

# Or connect and run commands
railway shell
npm run db:push
```

### 7.3 Database Backups
```bash
# Create backup (via PostgreSQL tools)
railway connect postgresql
pg_dump $DATABASE_URL > backup.sql

# Restore backup
psql $DATABASE_URL < backup.sql
```

## Step 8: Advanced Configuration

### 8.1 Environment Variables Management
```bash
# Set multiple variables from file
railway variables set --from-file .env.production

# Delete variable
railway variables delete VARIABLE_NAME

# Copy variables between environments
railway variables copy --from=production --to=staging
```

### 8.2 Multiple Services
```bash
# Add additional services
railway add redis
railway add mongodb

# Deploy specific service
railway up --service=api
```

### 8.3 Scaling Configuration
Railway automatically scales based on usage:
- CPU: Auto-scaling based on load
- Memory: Up to plan limits
- Storage: Persistent volumes

## Step 9: Monitoring and Observability

### 9.1 View Metrics
```bash
# Service metrics
railway status

# Resource usage
railway logs --service=web | grep -i "memory\|cpu"
```

### 9.2 Health Checks
Railway monitors your app via:
- Health check endpoint (`/health`)
- Process monitoring
- Automatic restarts on failure

### 9.3 Alerts and Notifications
Configure in Railway Dashboard:
- Deployment notifications
- Error alerts
- Resource usage warnings

## Step 10: Scaling and Performance

### 10.1 Vertical Scaling
Railway automatically allocates resources:
- **Starter**: 512 MB RAM, 1 vCPU
- **Developer**: 1 GB RAM, 2 vCPU  
- **Team**: 2 GB RAM, 4 vCPU

### 10.2 Horizontal Scaling
```bash
# Railway handles load balancing automatically
# No manual configuration required
```

### 10.3 Performance Optimization
```bash
# Enable compression in your app
# Use Railway's CDN for static assets
# Optimize database queries
# Monitor resource usage
```

## Troubleshooting

### Build Issues
```bash
# View build logs
railway logs --service=web

# Common issues:
# - Node version mismatch
# - Missing dependencies
# - Build timeouts
# - Environment variable missing
```

### Runtime Errors
```bash
# Check application logs
railway logs --follow

# Restart service
railway restart

# Check service status
railway status
```

### Database Connection Issues
```bash
# Verify database status
railway variables get DATABASE_URL

# Test connection
railway run node -e "console.log(process.env.DATABASE_URL)"

# Check database logs
railway logs --service=postgresql
```

## Cost Management

### 11.1 Free Tier
- **Usage**: $5 credit per month
- **Execution time**: Generous limits
- **Resources**: Shared infrastructure

### 11.2 Developer Plan ($5/month)
- **Usage**: $5 included + usage-based billing
- **Resources**: Dedicated resources
- **Support**: Email support

### 11.3 Team Plan ($20/month)
- **Usage**: $20 included + usage-based billing
- **Collaboration**: Team features
- **Support**: Priority support

### 11.4 Cost Optimization
```bash
# Monitor usage
railway usage

# Optimize resource consumption:
# - Use efficient algorithms
# - Implement proper caching
# - Optimize database queries
# - Use appropriate data types
```

## Security Best Practices

### 12.1 Environment Variables
```bash
# Never commit secrets to Git
# Use Railway variables for sensitive data
# Rotate secrets regularly
railway variables set API_KEY=new-secret-key
```

### 12.2 Database Security
- Use strong passwords
- Enable SSL connections
- Limit database access
- Regular security updates

### 12.3 Application Security
- Implement proper authentication
- Use HTTPS for all connections
- Configure security headers
- Regular dependency updates

## Backup and Recovery

### 12.1 Application Backups
```bash
# Code is backed up in Git
# Database backups via PostgreSQL tools
railway connect postgresql
```

### 12.2 Disaster Recovery
```bash
# Deploy to new Railway project
railway init disaster-recovery
railway up

# Restore database from backup
psql $DATABASE_URL < backup.sql
```

## Migration Guide

### 13.1 From Heroku
```bash
# Export Heroku config
heroku config --shell > .env

# Import to Railway
railway variables set --from-file .env

# Deploy application
railway up
```

### 13.2 From Vercel
```bash
# Export environment variables
# Update serverless functions to API routes
# Deploy to Railway
railway up
```

## CLI Commands Reference

### 14.1 Essential Commands
```bash
# Project management
railway init           # Initialize project
railway up             # Deploy application
railway status         # Check project status

# Logs and debugging
railway logs           # View logs
railway logs --follow  # Follow logs real-time
railway shell          # Access shell

# Variables
railway variables      # List variables
railway variables set  # Set variable
railway variables get  # Get variable

# Services
railway add            # Add service
railway connect        # Connect to service
railway domain         # Manage domains
```

### 14.2 Advanced Commands
```bash
# Environment management
railway environment    # Manage environments
railway link           # Link to existing project
railway unlink         # Unlink project

# Collaboration
railway invite         # Invite team members
railway leave          # Leave project

# Utilities
railway open           # Open in browser
railway docs           # Open documentation
railway feedback       # Send feedback
```

## Support Resources

- **Documentation**: https://docs.railway.app
- **Community**: https://discord.gg/railway
- **Support**: help@railway.app
- **Status**: https://status.railway.app

## Best Practices

### 15.1 Development Workflow
1. Develop locally with Railway CLI
2. Test with staging environment
3. Deploy to production
4. Monitor and maintain

### 15.2 Project Organization
```bash
# Use multiple environments
railway environment create staging
railway environment create production

# Organize services logically
railway add postgresql  # Database
railway add redis      # Cache
```

### 15.3 Monitoring Strategy
- Set up health checks
- Monitor resource usage
- Configure alerts
- Regular performance reviews

---

**Deployment Status**: ✅ Ready for Railway
**Estimated Setup Time**: 15-25 minutes
**Difficulty**: Beginner Friendly