# GitHub Actions Setup

GitHub Actions will automatically build and deploy your website to AWS S3 whenever you push changes to your repository. This means you can update your CV from anywhere - just commit and push!

## What is GitHub Actions?

Think of it as a robot that watches your GitHub repository. When you push new code, the robot:
1. Downloads your code
2. Builds your website
3. Uploads it to AWS S3

All automatically, without you doing anything!

## Prerequisites

Before starting, make sure you have:
- Your code in a GitHub repository
- An AWS S3 bucket set up ([see AWS deployment guide](AWS_DEPLOYMENT.md))
- AWS access keys created ([Step 6 of AWS guide](AWS_DEPLOYMENT.md#step-6-create-an-iam-user-for-deployments))

## Step 1: Add secrets to GitHub

GitHub needs your AWS credentials to deploy. We'll store them as "secrets" so they're encrypted and hidden.

### 1.1: Navigate to repository settings

1. Go to your GitHub repository
2. Click "Settings" (top menu)
3. In the left sidebar, click "Secrets and variables"
4. Click "Actions"
5. Click "New repository secret"

### 1.2: Add each secret

You need to add 5 secrets. For each one, click "New repository secret", enter the name and value, then click "Add secret".

**Secret 1: AWS_ACCESS_KEY_ID**
- Name: `AWS_ACCESS_KEY_ID`
- Value: Your AWS access key (starts with `AKIA...`)

**Secret 2: AWS_SECRET_ACCESS_KEY**
- Name: `AWS_SECRET_ACCESS_KEY`
- Value: Your AWS secret access key (the long random string)

**Secret 3: AWS_BUCKET_NAME**
- Name: `AWS_BUCKET_NAME`
- Value: Your S3 bucket name (e.g., `yourname-cv-website`)

**Secret 4: AWS_REGION**
- Name: `AWS_REGION`
- Value: Your AWS region (e.g., `us-east-1`)

**Secret 5: S3_SOURCE_DIR**
- Name: `S3_SOURCE_DIR`
- Value: `dist`
- This tells it which folder to upload

### 1.3: Verify your secrets

You should now see 5 secrets listed. You won't be able to see their values again (that's the point - they're secret!), but you can update or delete them if needed.

## Step 2: Understand the workflow file

The workflow file is already in your project at `.github/workflows/deploy-s3.yaml`. Let's break down what it does:

```yaml
name: Build and Deploy to AWS S3

on:
  push:
    branches:
      - main
```
This section says: "Run this workflow when code is pushed to the main branch"

```yaml
    paths-ignore:
      - 'README.md'
      - '.github/workflows/deploy-s3.yaml'
```
This says: "But don't run if only the README or workflow file changed" (saves time and costs)

```yaml
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
```
This creates a virtual Ubuntu computer to run the deployment

```yaml
    steps:
    - uses: actions/checkout@v2
```
Downloads your code

```yaml
    - name: Set up Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '21'
```
Installs Node.js version 21

```yaml
    - name: Install Dependencies
      run: npm install
```
Installs all your project dependencies

```yaml
    - name: Build
      run: npm run build
```
Builds your production website

```yaml
    - name: Deploy to S3
      uses: jakejarvis/s3-sync-action@v0.5.1
      with:
        args: --acl public-read --follow-symlinks --delete
      env:
        AWS_S3_BUCKET: ${{ secrets.AWS_BUCKET_NAME }}
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        AWS_REGION: ${{ secrets.AWS_REGION }}
        SOURCE_DIR: ${{ secrets.S3_SOURCE_DIR }}
```
Uploads your built website to S3, using the secrets you configured

## Step 3: Verify the workflow exists

The workflow file should already be in your project. Let's make sure:

1. In your project folder, check if this file exists:
   ```
   .github/workflows/deploy-s3.yaml
   ```

2. If it's not there, something went wrong with the clone. You can create it manually (see Step 4).

## Step 4: Create the workflow file (if needed)

If the workflow file is missing, create it:

### 4.1: Create the folders

```bash
mkdir -p .github/workflows
```

### 4.2: Create the workflow file

Create a file at `.github/workflows/deploy-s3.yaml` with this content:

```yaml
name: Build and Deploy to AWS S3

on:
  push:
    branches:
      - main
    paths-ignore:
      - 'README.md'
      - '.github/workflows/deploy-s3.yaml'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '21'

    - name: Install Dependencies
      run: npm install

    - name: Build
      run: npm run build

    - name: Deploy to S3
      uses: jakejarvis/s3-sync-action@v0.5.1
      with:
        args: --acl public-read --follow-symlinks --delete
      env:
        AWS_S3_BUCKET: ${{ secrets.AWS_BUCKET_NAME }}
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        AWS_REGION: ${{ secrets.AWS_REGION }}
        SOURCE_DIR: ${{ secrets.S3_SOURCE_DIR }}
```

## Step 5: Test the deployment

### 5.1: Make a small change

Edit something in your code, like your greeting:

```bash
code src/assets/greeting.tsx
```

Change something small, then save.

### 5.2: Commit and push

```bash
git add .
git commit -m "Test GitHub Actions deployment"
git push origin main
```

### 5.3: Watch it work

1. Go to your GitHub repository
2. Click the "Actions" tab
3. You should see a workflow running (yellow dot)
4. Click on it to see the progress
5. Watch each step complete

**Timeline:**
- Checkout: 5 seconds
- Set up Node.js: 10 seconds
- Install Dependencies: 30-60 seconds
- Build: 10-20 seconds
- Deploy to S3: 10-20 seconds

**Total time:** About 1-2 minutes

### 5.4: Check your live site

Once the workflow completes (green checkmark), visit your website URL. Your changes should be live!

## Understanding the workflow status

**Green checkmark ✓** - Success! Your site is deployed.

**Yellow dot ●** - Running right now.

**Red X ✗** - Failed. Click on it to see what went wrong.

## Common issues and fixes

### Workflow fails at "Deploy to S3"

**Possible causes:**

**Wrong AWS credentials**
- Check your secrets are exactly right
- No extra spaces or quotes
- Access key and secret match

**IAM user lacks permissions**
- Make sure your IAM user has S3FullAccess policy
- Or at minimum, S3 write permissions for your bucket

**Wrong bucket name or region**
- Double-check `AWS_BUCKET_NAME` secret matches your actual bucket
- Check `AWS_REGION` is correct (e.g., `us-east-1`)

### Workflow fails at "Install Dependencies"

This usually means there's an issue with your `package.json`. Try:

```bash
npm install
```

locally to see if it works on your computer.

### Workflow fails at "Build"

This means there's a compilation error in your code. The error message will tell you which file and line. Fix it locally first:

```bash
npm run build
```

### Workflow doesn't run at all

**Check:**
- You pushed to the `main` branch
- You didn't only change README.md
- Workflow file is named correctly: `.github/workflows/deploy-s3.yaml`
- Workflow file is committed and pushed

## Customizing the workflow

### Deploy on different branches

To deploy from a branch other than `main`:

```yaml
on:
  push:
    branches:
      - your-branch-name
```

### Remove the ignore paths

To deploy even when only docs change:

```yaml
on:
  push:
    branches:
      - main
```

Just remove the `paths-ignore` section.

### Add a deploy comment

To get notified when deployment completes, add this step after the Deploy step:

```yaml
    - name: Notify Success
      run: echo "Deployment completed successfully!"
```

## Monitoring your deployments

### View deployment history

1. Go to GitHub repository
2. Click "Actions" tab
3. See all past workflow runs
4. Click any one to see its logs

### Set up notifications

GitHub can email you when workflows fail:

1. Click your profile picture (top right)
2. Go to Settings
3. Click "Notifications"
4. Under "Actions", choose how you want to be notified

## Security best practices

### Rotate your AWS keys regularly

Every few months, create new access keys and update the secrets:

1. In AWS IAM, create new access key for your user
2. Update the secrets in GitHub
3. Delete the old keys in AWS

### Use minimal permissions

For better security, instead of `AmazonS3FullAccess`, create a custom policy that only allows access to your specific bucket.

## What's next?

Now your deployment is automated! Every time you:
- Update your work experience
- Add a new skill
- Change any content
- Fix a bug

Just commit and push, and your site updates automatically within 2 minutes.

**Next steps:**
- [Set up a custom domain](CLOUDFLARE_DOMAIN.md) to make your site more professional
- [Check out troubleshooting tips](TROUBLESHOOTING.md) if you run into issues

## Cost considerations

GitHub Actions is free for public repositories with:
- 2,000 minutes per month
- Unlimited for public repos

Each deployment uses about 2-3 minutes. You could deploy 600+ times per month for free!
