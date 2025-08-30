# Use Playwright's official image (comes with Node + Browsers preinstalled)
FROM mcr.microsoft.com/playwright:v1.47.0-jammy

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Run Playwright install (in case dependencies are missing)
RUN npx playwright install --with-deps

# Default command (can be overridden in docker run)
CMD ["npx", "playwright", "test"]
