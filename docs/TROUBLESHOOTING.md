# Troubleshooting Guide

Running into issues? This guide covers the most common problems and how to fix them.

## Local Development Issues

### Port already in use

**Problem:** When running `npm run dev`, you see "Port 5173 is already in use"

**Solutions:**

**Option 1: Kill the process using the port**
```bash
lsof -ti:5173 | xargs kill -9
```

**Option 2: Use a different port**
Vite will automatically try the next available port (5174, 5175, etc.)

**Option 3: Manually specify a port**
Edit `package.json`:
```json
"scripts": {
  "dev": "vite --port 3000"
}
```

### Module not found errors

**Problem:** Errors like "Cannot find module" or "Module not found"

**Solution 1: Reinstall dependencies**
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

**Solution 2: Clear npm cache**
```bash
npm cache clean --force
npm install
```

**Solution 3: Check Node version**
```bash
node --version
```
Should be v18 or higher. Update if needed from [nodejs.org](https://nodejs.org/)

### TypeScript errors

**Problem:** Red squiggly lines in your editor or build fails with type errors

**Quick fix for development:**
If you just want to see it work, you can temporarily disable type checking, but this isn't recommended for production.

**Proper fix:**
1. Read the error message carefully
2. It tells you the file and line number
3. Common issues:
   - Missing property in an object
   - Wrong type passed to a function
   - Typo in a variable name

**Example error:**
```
src/assets/greeting.tsx:2:5 - error TS2322: Type 'number' is not assignable to type 'string'.
```

This tells you:
- File: `src/assets/greeting.tsx`
- Line: 2
- Column: 5
- Problem: You put a number where a string should be

### Changes not showing up

**Problem:** You edited a file but don't see changes in browser

**Solutions:**

**Hard refresh:**
- Mac: `Cmd + Shift + R`
- Windows/Linux: `Ctrl + Shift + R`

**Check the terminal:**
- Look for error messages
- Make sure dev server is still running

**Restart dev server:**
```bash
# Press Ctrl+C to stop
npm run dev
```

**Clear browser cache:**
1. Open Developer Tools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

### Build fails

**Problem:** `npm run build` fails with errors

**Check for:**

**Syntax errors in your code:**
Look at the error message for the file and line number

**Missing dependencies:**
```bash
npm install
```

**Disk space:**
Make sure you have at least 1GB free space

**Permissions:**
On Mac/Linux, try:
```bash
sudo npm run build
```

## AWS S3 Issues

### 403 Forbidden error

**Problem:** Visiting your S3 URL shows "403 Forbidden"

**Solutions:**

**Check 1: Bucket policy**
1. Go to S3 bucket > Permissions
2. Verify bucket policy is correct
3. Make sure it has `"Effect": "Allow"` and `"Principal": "*"`

**Check 2: Block Public Access**
1. Go to S3 bucket > Permissions
2. Look at "Block public access"
3. Make sure "Block all public access" is OFF

**Check 3: Object permissions**
1. Go to Objects tab
2. Select a file
3. Click Permissions
4. Ensure "Everyone (public access)" has Read permission

**Check 4: Static website hosting**
1. Go to Properties tab
2. Scroll to "Static website hosting"
3. Make sure it's Enabled

### 404 Not Found

**Problem:** Some pages or files return 404

**Solutions:**

**Check 1: Verify files uploaded**
1. Go to S3 bucket > Objects
2. Make sure `index.html` is in the root
3. Verify `assets/` folder exists with CSS and JS files

**Check 2: Error document**
1. Go to Properties > Static website hosting
2. Error document should be `index.html`
3. This helps React Router work correctly

**Check 3: File names case-sensitive**
S3 is case-sensitive. `index.html` ≠ `Index.html`

### Site loads but looks broken

**Problem:** Site loads but has no styling or images

**Solutions:**

**Check 1: Browser console**
1. Press F12
2. Look at Console tab for errors
3. Common issues:
   - Failed to load CSS files
   - Failed to load JavaScript files

**Check 2: Base path in vite.config**
If your site is in a subdirectory, you might need to configure base path

**Check 3: CORS errors**
Check bucket CORS configuration:
1. S3 bucket > Permissions
2. Scroll to CORS
3. Add this if missing:
```json
[
    {
        "AllowedHeaders": ["*"],
        "AllowedMethods": ["GET", "HEAD"],
        "AllowedOrigins": ["*"],
        "ExposeHeaders": []
    }
]
```

## GitHub Actions Issues

### Workflow not running

**Problem:** You pushed code but workflow didn't trigger

**Check 1: Workflow file location**
Must be at `.github/workflows/deploy-s3.yaml`

**Check 2: Branch name**
Workflow only runs on `main` branch by default. Check your current branch:
```bash
git branch
```

Switch to main:
```bash
git checkout main
git push origin main
```

**Check 3: Ignored paths**
If you only changed `README.md`, workflow won't run (by design)

**Check 4: Workflow enabled**
1. Go to GitHub repository
2. Click Actions tab
3. Check if workflows are enabled for this repo

### Workflow fails at build step

**Problem:** Build step fails with errors

**Solution:**

**Test locally first:**
```bash
npm run build
```

If this fails locally, fix the errors before pushing.

**Common build errors:**
- TypeScript type errors
- Missing dependencies
- Syntax errors
- Import path issues

### Workflow fails at deploy step

**Problem:** Deploy to S3 step fails

**Check 1: AWS credentials**
1. Go to repository Settings > Secrets
2. Verify all 5 secrets exist:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_BUCKET_NAME`
   - `AWS_REGION`
   - `S3_SOURCE_DIR`

**Check 2: IAM permissions**
1. Go to AWS Console > IAM
2. Click on your `github-actions-deploy` user
3. Verify it has S3 permissions

**Check 3: Bucket name matches**
The `AWS_BUCKET_NAME` secret must exactly match your S3 bucket name

**Check 4: Region code**
Common regions:
- `us-east-1` (Virginia)
- `us-west-2` (Oregon)
- `eu-west-1` (Ireland)
- `ap-southeast-1` (Singapore)

**Check 5: Access key still valid**
AWS access keys can be deleted or deactivated. Create a new one if needed.

### Changes deployed but not visible

**Problem:** Workflow succeeds but site shows old content

**Solutions:**

**Wait a moment:**
S3 can take 1-2 minutes to propagate changes

**Hard refresh:**
- Clear browser cache
- Try incognito/private mode
- Try different browser

**Check S3 bucket:**
1. Go to AWS Console > S3
2. Open your bucket
3. Verify new files are there
4. Check file modification dates

**Cloudflare cache:**
If using Cloudflare:
1. Go to Cloudflare dashboard
2. Click Caching
3. Click "Purge Everything"
4. Wait 1-2 minutes
5. Try again

## Cloudflare Domain Issues

### Domain not pointing to site

**Problem:** Your domain doesn't load your site

**Check 1: DNS records**
1. Log into Cloudflare
2. Click on your domain
3. Go to DNS
4. Verify CNAME record exists:
   - Name: `@`
   - Target: Your S3 endpoint
   - Proxy: Enabled (orange cloud)

**Check 2: DNS propagation**
Visit [whatsmydns.net](https://www.whatsmydns.net/)
- Enter your domain
- Check if DNS has propagated globally
- Can take up to 48 hours

**Check 3: S3 endpoint correct**
The target should be your S3 website endpoint:
```
bucket-name.s3-website-region.amazonaws.com
```

NOT the regular S3 URL:
```
bucket-name.s3.region.amazonaws.com
```

### SSL/Certificate errors

**Problem:** Browser shows "Not Secure" or certificate warnings

**Solutions:**

**Wait for SSL to provision:**
Can take up to 24 hours after adding domain to Cloudflare

**Check SSL settings:**
1. Cloudflare > SSL/TLS
2. Encryption mode: "Flexible"
3. Always Use HTTPS: ON

**Clear browser SSL cache:**
Chrome:
1. Go to `chrome://net-internals/#hsts`
2. Enter your domain
3. Click "Delete"

**Try incognito mode:**
Sometimes browser caches old certificates

### Too many redirects

**Problem:** Browser shows "Too many redirects" or redirect loop

**Solution:**

1. Go to Cloudflare > SSL/TLS
2. Change encryption mode to "Flexible"
3. Wait 5 minutes
4. Clear browser cache
5. Try again in incognito mode

**Why this happens:**
S3 doesn't support SSL, so "Full" encryption mode creates a redirect loop

### WWW subdomain not working

**Problem:** `www.yourdomain.com` doesn't work

**Solution:**

Add WWW DNS record:
1. Cloudflare > DNS
2. Add record:
   - Type: `CNAME`
   - Name: `www`
   - Target: `@` or `yourdomain.com`
   - Proxy: ON (orange cloud)

## Performance Issues

### Site loads slowly

**Solutions:**

**Enable Cloudflare proxy:**
Make sure DNS records have proxy enabled (orange cloud)

**Check Cloudflare optimization:**
1. Cloudflare > Speed
2. Enable Auto Minify
3. Enable Brotli

**Optimize images:**
- Compress images before uploading
- Use WebP format when possible
- Don't use huge image files

**Check S3 region:**
Choose a region close to your users

### Build takes too long

**Solution:**

This is normal. First build is slower. Subsequent builds use cache and are faster.

**Typical times:**
- Local build: 5-15 seconds
- GitHub Actions build: 1-2 minutes

## Getting More Help

### Check logs

**Development server logs:**
Look at terminal output when running `npm run dev`

**Build logs:**
Run `npm run build` and read any error messages

**GitHub Actions logs:**
1. Go to Actions tab
2. Click on failed workflow
3. Expand each step to see detailed logs

**AWS CloudWatch logs:**
For advanced debugging, check AWS CloudWatch

### Search for errors

Copy error messages and search on:
- [Stack Overflow](https://stackoverflow.com)
- [GitHub Issues](https://github.com) for the specific library
- Google

### Common error patterns

**"Cannot find module"**
- Usually a dependency issue
- Try reinstalling: `rm -rf node_modules && npm install`

**"Permission denied"**
- File permission issue
- On Mac/Linux: `chmod -R 755 your-project-folder`

**"Port already in use"**
- Another process using the port
- Kill it or use different port

**"Access Denied" (AWS)**
- IAM permission issue
- Check your AWS credentials and IAM policy

### Still stuck?

1. Create a GitHub issue on the repository
2. Include:
   - What you're trying to do
   - What error you're seeing
   - What you've tried already
   - Screenshots if relevant

## Prevention Tips

### Best practices to avoid issues

**Always test locally first:**
```bash
npm run dev
npm run build
```
If these work, deployment should work too.

**Keep dependencies updated:**
```bash
npm outdated
npm update
```

**Use version control:**
Commit working code before making big changes. You can always revert.

**Don't commit secrets:**
Never put AWS keys directly in code. Always use GitHub Secrets.

**Test in incognito:**
Avoid browser cache issues by testing in private/incognito mode.

**Monitor GitHub Actions:**
Check that workflows complete successfully after each push.

**Set up AWS billing alerts:**
Get notified if costs exceed expected amounts.

## Quick Reference Commands

**Local development:**
```bash
npm run dev          # Start dev server
npm run build        # Build production files
npm run preview      # Preview production build
npm run lint         # Check for code issues
```

**Git commands:**
```bash
git status           # Check what changed
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Push to GitHub
```

**Debugging:**
```bash
npm install          # Install dependencies
npm cache clean --force  # Clear npm cache
rm -rf node_modules  # Delete dependencies
rm -rf dist          # Delete build output
```

**Check versions:**
```bash
node --version       # Check Node.js version
npm --version        # Check npm version
git --version        # Check Git version
```
