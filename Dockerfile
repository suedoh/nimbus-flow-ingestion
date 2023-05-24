# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy project files
COPY . .

# Expose port
EXPOSE 3000

# Start Kafka and the application
CMD ["npm", "run", "start-kafka"]

