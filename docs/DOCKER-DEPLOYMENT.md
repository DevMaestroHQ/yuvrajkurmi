# 🐳 Docker Deployment Guide

## Overview
Deploy your portfolio using Docker containers with complete environment isolation, scalability, and consistent deployments across any platform.

## Prerequisites
- Docker and Docker Compose installed
- Git repository
- PostgreSQL database (local or cloud)
- Basic Docker knowledge

## Step 1: Docker Setup

### 1.1 Install Docker
```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# macOS
brew install docker
# Or download Docker Desktop

# Windows
# Download Docker Desktop from docker.com

# Verify installation
docker --version
docker-compose --version
```

### 1.2 Docker Configuration
The project includes pre-configured Docker files:
- `Dockerfile` - Multi-stage build configuration
- `docker-compose.yml` - Full stack setup with PostgreSQL

## Step 2: Environment Configuration

### 2.1 Create Production Environment File
Create `.env.production`:
```env
# Database Configuration
DATABASE_URL=postgresql://portfolio:portfolio_password@postgres:5432/portfolio_db

# Server Configuration
NODE_ENV=production
PORT=5000
SESSION_SECRET=your-super-secure-session-secret-min-32-chars

# Security Configuration
CORS_ORIGIN=http://localhost:5000,https://yourdomain.com

# Optional: Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Database Credentials (for docker-compose)
POSTGRES_DB=portfolio_db
POSTGRES_USER=portfolio
POSTGRES_PASSWORD=portfolio_password
```

### 2.2 Verify Docker Files

**Dockerfile** (already configured):
```dockerfile
# Multi-stage build for production optimization
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS production

RUN apk add --no-cache dumb-init
RUN addgroup -g 1001 -S nodejs
RUN adduser -S portfolio -u 1001

WORKDIR /app

COPY --from=build --chown=portfolio:nodejs /app/dist ./dist
COPY --from=build --chown=portfolio:nodejs /app/node_modules ./node_modules
COPY --from=build --chown=portfolio:nodejs /app/package*.json ./

USER portfolio
EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/index.js"]
```

**docker-compose.yml** (already configured):
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://portfolio:portfolio_password@postgres:5432/portfolio_db
      - SESSION_SECRET=your-super-secure-session-secret
      - CORS_ORIGIN=http://localhost:5000
    depends_on:
      postgres:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "node", "-e", "require('http').get('http://localhost:5000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: portfolio_db
      POSTGRES_USER: portfolio
      POSTGRES_PASSWORD: portfolio_password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U portfolio -d portfolio_db"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
```

## Step 3: Build and Deploy

### 3.1 Build Docker Image
```bash
# Build application image
docker build -t portfolio-app .

# Or build with specific tag
docker build -t portfolio-app:v1.0.0 .

# Build with build arguments
docker build --build-arg NODE_ENV=production -t portfolio-app .
```

### 3.2 Run with Docker Compose
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Check service status
docker-compose ps
```

### 3.3 Run Standalone Container
```bash
# Run with external database
docker run -d \
  --name portfolio-app \
  -p 5000:5000 \
  -e DATABASE_URL="your-database-url" \
  -e SESSION_SECRET="your-session-secret" \
  -e NODE_ENV="production" \
  portfolio-app

# Check container status
docker ps
docker logs portfolio-app
```

## Step 4: Production Deployment Options

### 4.1 Deploy to Digital Ocean App Platform

**app.yaml**:
```yaml
name: portfolio-app
services:
- name: web
  source_dir: /
  github:
    repo: your-username/your-repo
    branch: main
  run_command: node dist/index.js
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  env:
  - key: NODE_ENV
    value: production
  - key: DATABASE_URL
    value: ${db.DATABASE_URL}
  - key: SESSION_SECRET
    value: ${SESSION_SECRET}

databases:
- name: db
  engine: PG
  version: "13"
```

### 4.2 Deploy to AWS ECS

**task-definition.json**:
```json
{
  "family": "portfolio-app",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "executionRoleArn": "arn:aws:iam::account:role/ecsTaskExecutionRole",
  "containerDefinitions": [
    {
      "name": "portfolio-app",
      "image": "your-ecr-repo/portfolio-app:latest",
      "portMappings": [
        {
          "containerPort": 5000,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "NODE_ENV",
          "value": "production"
        }
      ],
      "secrets": [
        {
          "name": "DATABASE_URL",
          "valueFrom": "arn:aws:secretsmanager:region:account:secret:name"
        }
      ]
    }
  ]
}
```

### 4.3 Deploy to Google Cloud Run

```bash
# Build and push to Google Container Registry
docker build -t gcr.io/your-project-id/portfolio-app .
docker push gcr.io/your-project-id/portfolio-app

# Deploy to Cloud Run
gcloud run deploy portfolio-app \
  --image gcr.io/your-project-id/portfolio-app \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars NODE_ENV=production \
  --set-env-vars DATABASE_URL="your-database-url"
```

## Step 5: Container Management

### 5.1 Docker Compose Commands
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Restart services
docker-compose restart

# View logs
docker-compose logs -f app
docker-compose logs postgres

# Update and restart
docker-compose up -d --build

# Scale services
docker-compose up -d --scale app=3
```

### 5.2 Container Maintenance
```bash
# Update containers
docker-compose pull
docker-compose up -d

# Clean up
docker system prune -f
docker volume prune -f

# Backup database
docker-compose exec postgres pg_dump -U portfolio portfolio_db > backup.sql

# Restore database
docker-compose exec -T postgres psql -U portfolio portfolio_db < backup.sql
```

## Step 6: Monitoring and Logging

### 6.1 Container Health Monitoring
```bash
# Check container health
docker ps
docker inspect portfolio-app | grep Health

# Monitor resource usage
docker stats

# Container logs
docker logs -f portfolio-app
```

### 6.2 Application Monitoring
```bash
# Health check endpoint
curl http://localhost:5000/health

# Monitor with Docker Compose
docker-compose logs -f app | grep -E "(error|warn|health)"
```

### 6.3 Database Monitoring
```bash
# PostgreSQL logs
docker-compose logs postgres

# Database stats
docker-compose exec postgres psql -U portfolio -d portfolio_db -c "SELECT * FROM pg_stat_activity;"
```

## Step 7: Security Configuration

### 7.1 Container Security
```bash
# Run as non-root user (already configured)
# Use official base images
# Regular security updates
docker scan portfolio-app
```

### 7.2 Network Security
```yaml
# docker-compose.yml with network isolation
networks:
  internal:
    driver: bridge
    internal: true
  external:
    driver: bridge

services:
  app:
    networks:
      - internal
      - external
  postgres:
    networks:
      - internal
```

### 7.3 Secrets Management
```bash
# Use Docker secrets
echo "your-session-secret" | docker secret create session_secret -

# Use external secret management
# - AWS Secrets Manager
# - Azure Key Vault
# - HashiCorp Vault
```

## Step 8: Performance Optimization

### 8.1 Multi-stage Build Optimization
Already implemented in Dockerfile:
- Separate build and runtime stages
- Minimal production image size
- Optimized dependencies

### 8.2 Resource Limits
```yaml
# docker-compose.yml with resource limits
services:
  app:
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 1G
        reservations:
          cpus: '0.5'
          memory: 512M
```

### 8.3 Caching Strategy
```bash
# Use BuildKit for better caching
export DOCKER_BUILDKIT=1
docker build --cache-from portfolio-app:latest -t portfolio-app .
```

## Step 9: Backup and Recovery

### 9.1 Data Backup
```bash
# Database backup
docker-compose exec postgres pg_dump -U portfolio portfolio_db | gzip > backup_$(date +%Y%m%d_%H%M%S).sql.gz

# Volume backup
docker run --rm -v portfolio_postgres_data:/data -v $(pwd):/backup alpine tar czf /backup/data_backup.tar.gz /data
```

### 9.2 Disaster Recovery
```bash
# Restore database
gunzip -c backup_20240703_120000.sql.gz | docker-compose exec -T postgres psql -U portfolio portfolio_db

# Restore volumes
docker run --rm -v portfolio_postgres_data:/data -v $(pwd):/backup alpine tar xzf /backup/data_backup.tar.gz -C /
```

## Step 10: CI/CD Integration

### 10.1 GitHub Actions
```yaml
# .github/workflows/docker.yml
name: Docker Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Build Docker image
      run: docker build -t portfolio-app .
    
    - name: Run security scan
      run: docker scan portfolio-app
    
    - name: Push to registry
      run: |
        echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
        docker push your-username/portfolio-app:latest
```

### 10.2 Automated Deployment
```bash
# Deploy script
#!/bin/bash
docker-compose pull
docker-compose up -d --remove-orphans
docker system prune -f
```

## Troubleshooting

### Build Issues
```bash
# Clear build cache
docker builder prune -a

# Build with no cache
docker build --no-cache -t portfolio-app .

# Check build logs
docker build -t portfolio-app . 2>&1 | tee build.log
```

### Runtime Issues
```bash
# Container won't start
docker logs portfolio-app
docker inspect portfolio-app

# Database connection issues
docker-compose exec app node -e "console.log(process.env.DATABASE_URL)"
docker-compose exec postgres psql -U portfolio -d portfolio_db -c "SELECT 1;"
```

### Performance Issues
```bash
# Monitor resource usage
docker stats
docker system df

# Optimize image size
docker images
dive portfolio-app
```

## Best Practices

### 11.1 Development Workflow
1. Develop with `docker-compose.dev.yml`
2. Test with production build
3. Deploy to staging environment
4. Production deployment

### 11.2 Image Management
- Use semantic versioning for tags
- Regular base image updates
- Security scanning
- Multi-architecture builds

### 11.3 Environment Management
- Separate configurations per environment
- Use environment-specific compose files
- Secure secret management
- Regular backup procedures

---

**Deployment Status**: ✅ Ready for Docker
**Estimated Setup Time**: 20-40 minutes
**Difficulty**: Intermediate to Advanced