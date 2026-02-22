#!/bin/bash
set -e

echo "🚀 Deploying chrisalvis.me to Kubernetes"
echo ""

# Get the latest image tag
LATEST_TAG=$(git rev-parse --short HEAD)
IMAGE="ghcr.io/alvisleet/chrisalvis.me:main-${LATEST_TAG}"

echo "Image: $IMAGE"
echo ""

# Deploy with Helm
helm upgrade --install chrisalvis-me ./helm/chrisalvis-me \
  --namespace chrisalvis-me \
  --create-namespace \
  --set image.tag="main-${LATEST_TAG}" \
  --wait

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
