# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's files into the working directory
COPY . .

# Expose port 4343 for the application
EXPOSE 3000

# Run the app using "npm run start"
RUN npm run build

# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "start"]

# docker run --name "overseer-web-app" --rm -it --network nginx_proxy_manager_net overseer