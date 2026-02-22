#!/bin/bash
set -e

echo "🚀 Deploying chrisalvis.me to Kubernetes"
echo ""

# Get the latest image tag
LATEST_TAG=$(git rev-parse --short HEAD)
IMAGE_TAG="main-${LATEST_TAG}"

echo "Updating values.yaml with image tag: $IMAGE_TAG"
sed -i.bak "s|tag: main-.*|tag: $IMAGE_TAG|g" values.yaml && rm values.yaml.bak

echo "Deploying with helmfile..."
helmfile sync

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Checking status..."
kubectl get pods -n chrisalvis-me
echo ""
kubectl get httproute -n chrisalvis-me
echo ""
echo "🌐 Your site will be available at: https://chrisalvis.me"
echo "   (DNS updates in 1-2 minutes)"
