# Making Your Container Image Public

Your GitHub Container Registry images are private by default. To allow your cluster to pull them:

## Option 1: Make the Package Public (Recommended)

1. Go to: https://github.com/users/Alvis1337/packages/container/chrisalvis.me/settings
2. Scroll to "Danger Zone"
3. Click "Change visibility"
4. Select "Public"
5. Type the repository name to confirm

## Option 2: Use Image Pull Secret (More Secure)

If you prefer to keep the image private:

### 1. Create a GitHub Personal Access Token (PAT)
- Go to: https://github.com/settings/tokens
- Click "Generate new token (classic)"
- Select scopes: `read:packages`
- Copy the token

### 2. Create the secret in your cluster
```bash
kubectl create namespace chrisalvis-me

kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username=YOUR_GITHUB_USERNAME \
  --docker-password=YOUR_GITHUB_PAT \
  --namespace=chrisalvis-me
```

### 3. Update values.yaml
```yaml
imagePullSecrets:
  - name: ghcr-secret
```

### 4. Deploy
```bash
./deploy.sh
```

## Current Status

After the first GitHub Actions build completes, the package will appear at:
https://github.com/Alvis1337?tab=packages&repo_name=chrisalvis.me

Make it public there, then run `./deploy.sh`
