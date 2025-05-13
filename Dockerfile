# Use a lightweight web server as the base image
FROM nginx:alpine

# Copy the application files to the nginx html directory
COPY . /usr/share/nginx/html

# Remove unnecessary files
RUN rm -rf /usr/share/nginx/html/.git /usr/share/nginx/html/.idea

# Expose port 80
EXPOSE 80

# Default command to start the nginx server
CMD ["nginx", "-g", "daemon off;"]
