FROM node:18.20.0-alpine3.18

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production --audit=false

# Copy source code
COPY src/ ./src/

# Create a .env file from build args (optional - for development)
# For production, use docker-compose env_file instead
ARG MONGODB_URI
ENV MONGODB_URI=${MONGODB_URI}

EXPOSE 5000

CMD ["node", "src/index.js"]