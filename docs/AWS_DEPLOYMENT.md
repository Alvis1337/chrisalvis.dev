# AWS S3 Deployment Guide

This guide will walk you through hosting your CV website on Amazon Web Services (AWS) using an S3 bucket. The best part? This can be completely free using AWS's free tier!

## What is AWS S3?

Amazon S3 (Simple Storage Service) is a place to store files in the cloud. You can configure it to host a static website, which is perfect for this CV site since it's just HTML, CSS, and JavaScript files.

## Cost breakdown

**AWS Free Tier includes:**
- 5 GB of storage
- 20,000 GET requests per month
- 2,000 PUT requests per month
- 100 GB of data transfer out per month

For a personal CV site, you'll stay well within these limits. After the first year, costs are typically under $1/month for a site like this.

## Prerequisites

Before starting, you need:
- An AWS account (we'll set this up)
- Your website customized and ready to go
- About 20-30 minutes

## Step 1: Create an AWS account

### 1.1: Sign up

1. Go to [aws.amazon.com](https://aws.amazon.com)
2. Click "Create an AWS Account"
3. Enter your email and choose an account name
4. Follow the steps to verify your email

### 1.2: Payment information

AWS requires a credit card even for the free tier. Don't worry - you won't be charged if you stay within free tier limits, and they notify you before any charges occur.

1. Enter your payment information
2. Verify your phone number
3. Choose the "Basic Support - Free" plan

### 1.3: Sign in to console

Once your account is created:
1. Go to [console.aws.amazon.com](https://console.aws.amazon.com)
2. Sign in with your email and password
3. You'll see the AWS Management Console

## Step 2: Create an S3 bucket

### 2.1: Navigate to S3

1. In the AWS Console, find the search bar at the top
2. Type "S3" and click on "S3" under Services
3. Click the orange "Create bucket" button

### 2.2: Configure your bucket

**Bucket name:**
- Must be globally unique across all of AWS
- Use your domain name if you have one (e.g., `yourname.com`)
- Or use something like `yourname-cv-website`
- Only lowercase letters, numbers, and hyphens
- Write this down - you'll need it later!

**AWS Region:**
- Choose one close to where most viewers will be
- US East (N. Virginia) `us-east-1` is common
- Write down the region code (like `us-east-1`)

**Object Ownership:**
- Leave as "ACLs disabled (recommended)"

**Block Public Access:**
- **Uncheck** "Block all public access"
- Check the warning acknowledgment box
- This is necessary for hosting a website

**Bucket Versioning:**
- Leave as "Disable" (you don't need this)

**Tags:**
- Optional, you can skip this

**Default encryption:**
- Leave as default (Server-side encryption with Amazon S3 managed keys)

Click **"Create bucket"**

## Step 3: Configure bucket for website hosting

### 3.1: Enable static website hosting

1. Click on your newly created bucket name
2. Go to the "Properties" tab
3. Scroll all the way down to "Static website hosting"
4. Click "Edit"

**Settings:**
- Enable: **Static website hosting**
- Hosting type: **Host a static website**
- Index document: `index.html`
- Error document: `index.html` (this helps React Router work correctly)

Click **"Save changes"**

**Important:** Copy the "Bucket website endpoint" URL that appears. It'll look like:
```
http://your-bucket-name.s3-website-us-east-1.amazonaws.com
```

### 3.2: Set bucket policy for public access

1. Go to the "Permissions" tab
2. Scroll to "Bucket policy"
3. Click "Edit"
4. Paste this policy (replace `YOUR-BUCKET-NAME` with your actual bucket name):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

**Example:** If your bucket is named `john-smith-cv`, the Resource line should be:
```json
"Resource": "arn:aws:s3:::john-smith-cv/*"
```

Click **"Save changes"**

## Step 4: Build your website

Now we need to create the production files to upload.

### 4.1: Build the project

In your terminal, in your project folder:

```bash
npm run build
```

This creates a `dist` folder with all the optimized files ready for production.

### 4.2: What just happened?

The build process:
- Compiled your TypeScript to JavaScript
- Bundled all files together
- Minified everything to make it smaller
- Optimized images
- Created production-ready HTML, CSS, and JS

## Step 5: Upload your website

### 5.1: Using the AWS Console (easiest for first time)

1. In your S3 bucket, click the "Objects" tab
2. Click "Upload"
3. Click "Add files" and "Add folder"
4. Select ALL files and folders from your `dist` folder
   - Important: Don't upload the `dist` folder itself, upload its contents
   - Select the files inside `dist/`
5. Click "Upload"
6. Wait for it to complete (should take less than a minute)

### 5.2: Verify the upload

Your bucket should now contain:
- `index.html`
- `assets/` folder with CSS and JS files
- Other files and folders from your build

### 5.3: Test your website

1. Go back to Properties > Static website hosting
2. Click the "Bucket website endpoint" URL
3. Your site should load!

## Step 6: Create an IAM user for deployments

For GitHub Actions to automatically deploy your site, you need to create an AWS user with the right permissions.

### 6.1: Navigate to IAM

1. In AWS Console search bar, type "IAM"
2. Click "IAM" under Services

### 6.2: Create a new user

1. Click "Users" in the left sidebar
2. Click "Create user"
3. User name: `github-actions-deploy` (or whatever you prefer)
4. Click "Next"

### 6.3: Set permissions

1. Select "Attach policies directly"
2. In the search box, type "S3"
3. Check the box for **"AmazonS3FullAccess"**
   - Note: For production, you'd want to create a more restricted policy, but this works for personal projects
4. Click "Next"
5. Click "Create user"

### 6.4: Create access keys

1. Click on your new user name
2. Go to "Security credentials" tab
3. Scroll to "Access keys"
4. Click "Create access key"
5. Choose "Application running outside AWS"
6. Check the confirmation checkbox
7. Click "Next"
8. Add description: "GitHub Actions deployment"
9. Click "Create access key"

**IMPORTANT:** You'll see:
- Access key ID (starts with `AKIA...`)
- Secret access key (long random string)

**Copy both of these RIGHT NOW** - you can't see the secret again! Save them somewhere safe temporarily.

## Step 7: Test your live site

Visit your bucket website endpoint URL. You should see your CV website live on the internet!

**Common issues:**

**403 Forbidden error:**
- Check your bucket policy is correct
- Make sure "Block all public access" is unchecked
- Verify the policy has your correct bucket name

**404 Not Found:**
- Make sure `index.html` is in the root of the bucket
- Check Static website hosting is enabled
- Verify you uploaded the contents of `dist`, not the folder itself

**Blank page:**
- Check browser console (F12) for errors
- Make sure all files uploaded correctly
- Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## What's next?

Your site is live! But you probably want:

1. **[Set up GitHub Actions](GITHUB_ACTIONS.md)** - Auto-deploy when you push changes
2. **[Add a custom domain](CLOUDFLARE_DOMAIN.md)** - Use `yourname.com` instead of that long S3 URL
3. Set up CloudFront CDN for faster loading (advanced)

## Managing costs

To monitor your AWS costs:

1. Go to "Billing and Cost Management" in AWS Console
2. Set up billing alerts:
   - Click "Budgets"
   - Create a budget for $5/month
   - Get email alerts if you approach it

For a static site with normal traffic, you'll likely pay $0-1/month after the free tier ends.

## Cleaning up (if you want to delete everything)

To delete your site:

1. Go to your S3 bucket
2. Select all files
3. Click "Delete"
4. Confirm deletion
5. Go back to S3 main page
6. Select your bucket
7. Click "Delete"
8. Type the bucket name to confirm

Your AWS account will still exist for other projects.
