# Build stage
FROM node:18.20.0-alpine3.18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --audit=false

COPY . .
RUN npm run build

# Production stage
FROM nginx:1.24.0-alpine
## Copy custom nginx config so /api is proxied to the backend service
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]