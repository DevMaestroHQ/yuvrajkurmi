# Multi-stage build for production optimization
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:20-alpine AS production

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S portfolio -u 1001

# Set working directory
WORKDIR /app

# Copy built application from build stage
COPY --from=build --chown=portfolio:nodejs /app/dist ./dist
COPY --from=build --chown=portfolio:nodejs /app/node_modules ./node_modules
COPY --from=build --chown=portfolio:nodejs /app/package*.json ./

# Switch to non-root user
USER portfolio

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start application with dumb-init
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/index.js"]