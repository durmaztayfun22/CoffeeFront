# Base Node.js image for building the app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the app for production
RUN npm run build

# Base Nginx image for serving the built app
FROM nginx:alpine

# Copy the built app from the previous build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration (you'll need to create this file)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose HTTP and HTTPS ports
EXPOSE 80 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
