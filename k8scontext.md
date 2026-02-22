# 🚀 Deploying Your Containerized Apps to Kakariko

This guide explains how to take a container from another repo and deploy it to your Kakariko Kubernetes cluster using the infrastructure you've set up.

## 📋 Prerequisites

Before you start, make sure you have:

1. ✅ Docker image built and pushed to a registry (Docker Hub, GitHub Container Registry, etc.)
2. ✅ kubectl configured to access the Kakariko cluster
3. ✅ Your application's domain name decided (e.g., `myapp.chrisalvis.me`)

## 🌐 Network Architecture Overview

```
Public Internet (173.88.71.72)
    ↓
Cloudflare (DNS + SSL + Proxy)
    ↓
Your Router (Port Forward 80/443 → 10.0.10.100)
    ↓
Kakariko Gateway (10.0.10.100) - MetalLB LoadBalancer
    ↓
Envoy Gateway (Routes based on hostname)
    ↓
Your Application Pods (10.42.x.x pod network)
```

## 🎯 Quick Start: Deploy Your App in 5 Steps

### Step 1: Create Your App Directory

```bash
cd /Users/chrisalvis/IdeaProjects/kakariko-infra/infra/helm
mkdir my-app-name
cd my-app-name
```

### Step 2: Create Your Kubernetes Manifests

Create `deployment.yaml`:

```yaml
---
# Namespace (optional but recommended)
apiVersion: v1
kind: Namespace
metadata:
  name: my-app-name
---
# Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-name
  namespace: my-app-name
spec:
  replicas: 2  # Start with 2 for high availability
  selector:
    matchLabels:
      app: my-app-name
  template:
    metadata:
      labels:
        app: my-app-name
    spec:
      containers:
        - name: my-app-name
          image: ghcr.io/yourusername/my-app:v1.0.0  # YOUR DOCKER IMAGE
          ports:
            - containerPort: 8080  # YOUR APP PORT
          env:
            - name: NODE_ENV
              value: "production"
            - name: PORT
              value: "8080"
          resources:
            requests:
              cpu: 100m      # Minimum CPU
              memory: 128Mi  # Minimum RAM
            limits:
              cpu: 1000m     # Maximum CPU
              memory: 512Mi  # Maximum RAM
          # Health checks (optional but recommended)
          livenessProbe:
            httpGet:
              path: /health  # YOUR HEALTH ENDPOINT
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 5
---
# Service
apiVersion: v1
kind: Service
metadata:
  name: my-app-name
  namespace: my-app-name
spec:
  selector:
    app: my-app-name
  ports:
    - protocol: TCP
      port: 80          # Service port
      targetPort: 8080  # Container port
  type: ClusterIP
---
# HTTPRoute - Exposes your app to the internet
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: my-app-name
  namespace: my-app-name
spec:
  parentRefs:
    - name: kakariko-gateway
      namespace: default
  hostnames:
    - "myapp.chrisalvis.me"  # YOUR DOMAIN
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /
      backendRefs:
        - name: my-app-name
          port: 80
```

### Step 3: Deploy to Kubernetes

```bash
kubectl apply -f deployment.yaml
```

### Step 4: Verify Deployment

```bash
# Check if pods are running
kubectl get pods -n my-app-name

# Check if service is created
kubectl get svc -n my-app-name

# Check if HTTPRoute is accepted
kubectl get httproute -n my-app-name

# View logs
kubectl logs -n my-app-name -l app=my-app-name --tail=50 -f
```

### Step 5: Access Your App

Within 1-2 minutes, external-dns will automatically:
1. Create an A record: `myapp.chrisalvis.me → 173.88.71.72` (your public IP)
2. Cloudflare will proxy and add SSL automatically

Visit: `https://myapp.chrisalvis.me`

## 🗄️ Adding Persistent Storage

If your app needs storage (database, file uploads, etc.):

```yaml
---
# PersistentVolumeClaim
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-app-data
  namespace: my-app-name
spec:
  accessModes:
    - ReadWriteOnce  # Use for single-pod apps (databases)
    # - ReadWriteMany  # Use for multi-pod shared storage
  storageClassName: kakariko-block  # For RWO (block storage)
  # storageClassName: kakariko-files  # For RWX (file storage)
  resources:
    requests:
      storage: 10Gi
```

Then mount it in your deployment:

```yaml
spec:
  template:
    spec:
      containers:
        - name: my-app-name
          # ...existing config...
          volumeMounts:
            - name: data
              mountPath: /app/data  # Where to mount in container
      volumes:
        - name: data
          persistentVolumeClaim:
            claimName: my-app-data
```

## 🔐 Managing Secrets

Never commit secrets! Use Kubernetes secrets:

```bash
# Create a secret
kubectl create secret generic my-app-secrets \
  --namespace=my-app-name \
  --from-literal=DATABASE_URL='postgresql://user:pass@host:5432/db' \
  --from-literal=API_KEY='your-secret-key'
```

Reference in deployment:

```yaml
spec:
  template:
    spec:
      containers:
        - name: my-app-name
          env:
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: my-app-secrets
                  key: DATABASE_URL
            - name: API_KEY
              valueFrom:
                secretKeyRef:
                  name: my-app-secrets
                  key: API_KEY
```

## 🔄 Updating Your App

### Update the image version:

```bash
kubectl set image deployment/my-app-name \
  my-app-name=ghcr.io/yourusername/my-app:v1.1.0 \
  -n my-app-name
```

Or edit the YAML and reapply:

```bash
kubectl apply -f deployment.yaml
```

### Check rollout status:

```bash
kubectl rollout status deployment/my-app-name -n my-app-name
```

### Rollback if needed:

```bash
kubectl rollout undo deployment/my-app-name -n my-app-name
```

## 📊 Monitoring & Debugging

### View logs:

```bash
# All pods
kubectl logs -n my-app-name -l app=my-app-name --tail=100 -f

# Specific pod
kubectl logs -n my-app-name my-app-name-xxx-yyy --tail=100 -f
```

### Get shell access:

```bash
kubectl exec -it -n my-app-name my-app-name-xxx-yyy -- /bin/sh
```

### Check events:

```bash
kubectl get events -n my-app-name --sort-by='.lastTimestamp'
```

### Check HTTPRoute status:

```bash
kubectl describe httproute -n my-app-name my-app-name
```

## 🌟 Storage Classes Available

Your cluster has these storage options:

| Storage Class    | Access Mode | Use Case                                    |
|------------------|-------------|---------------------------------------------|
| `kakariko-block` | RWO         | Databases, single-pod apps, fast block storage |
| `kakariko-files` | RWX         | Shared storage, multi-pod file access      |

Both are backed by Longhorn with 3-way replication for high availability.

## 🔗 Gateway Configuration

Your cluster has these gateways configured:

- **Primary Gateway**: `kakariko-gateway` (default namespace)
    - IP: `10.0.10.100` (MetalLB LoadBalancer)
    - Listens on: ports 80 and 443
    - All HTTPRoutes reference this gateway

## 🌐 DNS & External Access

- **external-dns** automatically manages Cloudflare DNS records
- When you create an HTTPRoute with a hostname, it will:
    1. Create an A record pointing to your public IP (173.88.71.72)
    2. Cloudflare proxies traffic (adds SSL, DDoS protection, caching)
    3. Traffic hits your router → port forward → Gateway → Your app

## 🎨 Example: Full-Stack App with Database

Here's a complete example deploying a Node.js app with PostgreSQL:

```yaml
---
apiVersion: v1
kind: Namespace
metadata:
  name: fullstack-app
---
# PostgreSQL Database
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres
  namespace: fullstack-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
        - name: postgres
          image: postgres:15-alpine
          env:
            - name: POSTGRES_PASSWORD
              value: "changeme"  # Use secrets in production!
            - name: POSTGRES_DB
              value: "appdb"
          ports:
            - containerPort: 5432
          volumeMounts:
            - name: data
              mountPath: /var/lib/postgresql/data
      volumes:
        - name: data
          persistentVolumeClaim:
            claimName: postgres-data
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-data
  namespace: fullstack-app
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: kakariko-block
  resources:
    requests:
      storage: 20Gi
---
apiVersion: v1
kind: Service
metadata:
  name: postgres
  namespace: fullstack-app
spec:
  selector:
    app: postgres
  ports:
    - port: 5432
---
# Your Node.js App
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  namespace: fullstack-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
        - name: web
          image: ghcr.io/yourusername/web-app:latest
          env:
            - name: DATABASE_URL
              value: "postgresql://postgres:changeme@postgres:5432/appdb"
            - name: PORT
              value: "3000"
          ports:
            - containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: web-app
  namespace: fullstack-app
spec:
  selector:
    app: web-app
  ports:
    - port: 80
      targetPort: 3000
---
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: web-app
  namespace: fullstack-app
spec:
  parentRefs:
    - name: kakariko-gateway
      namespace: default
  hostnames:
    - "app.chrisalvis.me"
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /
      backendRefs:
        - name: web-app
          port: 80
```

## 🚨 Troubleshooting

### App not accessible from internet

```bash
# 1. Check pod is running
kubectl get pods -n my-app-name

# 2. Check service has endpoints
kubectl get endpoints -n my-app-name

# 3. Check HTTPRoute is accepted
kubectl get httproute -n my-app-name -o yaml

# 4. Check DNS was created (wait 1-2 minutes)
dig myapp.chrisalvis.me +short  # Should return 173.88.71.72

# 5. Check Gateway logs
kubectl logs -n envoy-gateway-system -l gateway.envoyproxy.io/owning-gateway-name=kakariko-gateway
```

### Pod keeps restarting

```bash
# Check logs
kubectl logs -n my-app-name my-app-name-xxx-yyy --previous

# Check events
kubectl describe pod -n my-app-name my-app-name-xxx-yyy

# Common issues:
# - Image pull errors (check image name/tag)
# - Health check failing (adjust initialDelaySeconds)
# - Resource limits too low (increase limits)
# - Missing environment variables
```

### Storage issues

```bash
# Check PVC status
kubectl get pvc -n my-app-name

# Check PV
kubectl get pv

# Check Longhorn UI (if accessible)
kubectl port-forward -n longhorn-system svc/longhorn-frontend 8080:80
# Visit http://localhost:8080
```

## 📚 Quick Reference Commands

```bash
# Deploy
kubectl apply -f deployment.yaml

# Update image
kubectl set image deployment/my-app my-app=image:newtag -n my-namespace

# Scale
kubectl scale deployment/my-app --replicas=5 -n my-namespace

# Delete
kubectl delete -f deployment.yaml

# Port forward (for testing)
kubectl port-forward -n my-namespace svc/my-app 8080:80

# Get everything in namespace
kubectl get all -n my-namespace

# Delete namespace (removes everything)
kubectl delete namespace my-namespace
```

## 🎓 Best Practices

1. **Use namespaces**: Isolate each app
2. **Set resource limits**: Prevent one app from consuming all resources
3. **Use health checks**: Enable auto-recovery
4. **Run multiple replicas**: High availability (2-3 replicas minimum)
5. **Use secrets**: Never hardcode sensitive data
6. **Tag images**: Use specific versions, not `:latest`
7. **Monitor logs**: Check for errors regularly
8. **Use persistent storage**: For stateful apps
9. **Document your deployment**: Add a README in your app folder

## 🔗 Related Files

- Network config: `/infra/networking/`
- Storage config: `/infra/storage/`
- Example apps: `/infra/helm/example-app/`
- Gateway config: `/infra/networking/gateway-api/`

## 🆘 Need Help?

Check these resources:
- Gateway API docs: https://gateway-api.sigs.k8s.io/
- Longhorn docs: https://longhorn.io/docs/
- Kubernetes docs: https://kubernetes.io/docs/
- External-DNS: https://github.com/kubernetes-sigs/external-dns

---

**Pro Tip**: Copy the `example-app` directory as a starting template for your apps!
