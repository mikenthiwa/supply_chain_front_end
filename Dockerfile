# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if using npm) or yarn.lock (if using Yarn)
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the port the app will run on
EXPOSE 3001

# Start the application
CMD ["yarn", "start"]
