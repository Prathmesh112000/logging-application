# Use Node official image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json + package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all backend code
COPY . .

# Expose port
EXPOSE 4000

# Start
CMD ["node", "app.js"]
