#!/bin/bash

echo "Deployment completed successfully."

# Restart NGINX
sudo systemctl restart nginx

echo "NGINX restarted successfully."
