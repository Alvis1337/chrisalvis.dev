# Cloudflare Domain Setup

Turn your long S3 URL into a professional custom domain like `yourname.com`. This guide shows you how to buy a domain through Cloudflare and connect it to your AWS S3 website.

## Why Cloudflare?

Cloudflare offers:
- Affordable domain registration (usually $10-15/year)
- Free SSL certificates (HTTPS)
- Free CDN (makes your site faster worldwide)
- Simple DNS management
- Great security features

All of this is included free with domain registration!

## What you'll need

- A credit card for domain registration
- Your AWS S3 bucket website endpoint URL
- About 30 minutes for setup
- A few hours for DNS to propagate worldwide

## Step 1: Create a Cloudflare account

### 1.1: Sign up

1. Go to [cloudflare.com](https://www.cloudflare.com)
2. Click "Sign Up"
3. Enter your email and create a password
4. Verify your email address

### 1.2: Choose your domain name

Before we continue, decide on your domain name:
- Use your name: `johnsmith.com`, `jane-doe.com`
- Be creative: `johnsmith.dev`, `janedoe.tech`
- Keep it professional for a CV site
- Shorter is usually better

**Check availability:** Most registrars let you search without signing up first to see if your preferred domain is available.

## Step 2: Register your domain

### 2.1: Navigate to domain registration

1. In Cloudflare, click "Domain Registration" in the left sidebar
2. Or search "Register Domains" in the top search bar
3. Click "Register Domains"

### 2.2: Search for your domain

1. Type your desired domain name
2. Click "Search"
3. You'll see available domains and their prices

**Popular extensions:**
- `.com` - Most common, professional ($10-15/year)
- `.dev` - Great for developers ($12-15/year)
- `.io` - Popular in tech ($35-40/year)
- `.me` - Personal sites ($20-25/year)
- `.tech` - Tech professionals ($10-15/year)

### 2.3: Purchase your domain

1. Click "Purchase" next to your chosen domain
2. Review the price
3. Choose registration length (1 year minimum)
   - Buying multiple years locks in the price
   - 2-3 years is common
4. Add to cart
5. Proceed to checkout
6. Enter payment information
7. Complete purchase

**Note:** Domain auto-renewal is usually enabled by default. You can disable it in settings if you want to manually renew each year.

### 2.4: Wait for confirmation

You'll get an email confirming your domain purchase. This usually takes just a few minutes.

## Step 3: Configure DNS for your S3 bucket

Now we need to point your domain to your S3 bucket.

### 3.1: Find your S3 endpoint

You need your S3 bucket's website endpoint. It looks like:
```
http://your-bucket-name.s3-website-us-east-1.amazonaws.com
```

**Where to find it:**
1. Go to AWS Console
2. Open S3
3. Click your bucket
4. Go to Properties tab
5. Scroll to "Static website hosting"
6. Copy the "Bucket website endpoint" URL

**Important:** Note the format - it includes your region (like `us-east-1`)

### 3.2: Add DNS records in Cloudflare

1. In Cloudflare, click on your domain name
2. Click "DNS" in the top menu
3. Click "Add record"

**First record - Root domain (example.com):**
- Type: `CNAME`
- Name: `@` (this means the root domain)
- Target: Your S3 endpoint WITHOUT the `http://` part
  - Example: `your-bucket-name.s3-website-us-east-1.amazonaws.com`
- Proxy status: Toggle to "Proxied" (orange cloud)
- TTL: Auto
- Click "Save"

**Second record - WWW subdomain (www.example.com):**
- Type: `CNAME`
- Name: `www`
- Target: `@` (points to your root domain)
- Proxy status: Toggle to "Proxied" (orange cloud)
- TTL: Auto
- Click "Save"

**Why two records?**
This ensures both `yourname.com` and `www.yourname.com` work.

### 3.3: Enable HTTPS (SSL/TLS)

Cloudflare provides free SSL certificates. Let's enable them:

1. In your domain settings, click "SSL/TLS"
2. Choose encryption mode: **"Flexible"**
   - This works because S3 doesn't support custom SSL certificates
   - Traffic from visitors to Cloudflare is encrypted
   - Traffic from Cloudflare to S3 is not (but that's okay for static sites)

3. Turn on "Always Use HTTPS":
   - Click "Edge Certificates"
   - Scroll to "Always Use HTTPS"
   - Toggle it ON

4. Enable "Automatic HTTPS Rewrites":
   - Find "Automatic HTTPS Rewrites"
   - Toggle it ON

## Step 4: Configure page rules for S3

S3 has some quirks with routing. Let's fix them with page rules.

### 4.1: Create a page rule for index.html

1. In Cloudflare, click "Rules" in the left sidebar
2. Click "Page Rules"
3. Click "Create Page Rule"

**Configuration:**
- URL: `yourname.com/*`
  - Replace `yourname.com` with your actual domain
- Click "Add a Setting"
- Choose "Origin Cache Control"
- Toggle it ON
- Click "Save and Deploy"

**Why?** This ensures S3 serves files correctly and respects caching.

## Step 5: Wait for DNS propagation

DNS changes take time to spread across the internet.

**Timeline:**
- Cloudflare: Usually instant to 5 minutes
- Your ISP: 30 minutes to 2 hours
- Worldwide: Up to 24-48 hours (rare)

**Check if it's working:**

1. Visit `https://yourname.com` in a private/incognito browser window
2. If it works, great!
3. If not, wait 30 minutes and try again

**Tools to check DNS:**
- [whatsmydns.net](https://www.whatsmydns.net/) - Check global DNS propagation
- [dnschecker.org](https://dnschecker.org/) - Another DNS checker

## Step 6: Test everything

Once DNS has propagated, test these URLs:

- `http://yourname.com` - Should redirect to HTTPS
- `https://yourname.com` - Should load your site
- `https://www.yourname.com` - Should load your site
- `http://www.yourname.com` - Should redirect to HTTPS

All four should work and show your CV website!

## Step 7: Update your site references

Now that you have a custom domain, update references:

### In your resume/CV file
- Change URLs to your new domain

### In social links
If you link to your website from LinkedIn, GitHub, etc., update those links.

### In Google
Your new domain needs to get indexed:
- Visit [google.com/webmasters](https://search.google.com/search-console)
- Add your site
- Submit your sitemap

## Common issues and solutions

### "Too many redirects" error

**Fix:**
1. Go to Cloudflare > SSL/TLS
2. Change encryption mode to "Flexible"
3. Wait a few minutes
4. Clear your browser cache and try again

### Site shows Cloudflare error page

**Check:**
- DNS records are correct
- S3 bucket policy allows public read
- S3 static website hosting is enabled
- You're using the S3 website endpoint, not the S3 bucket URL

**S3 Website Endpoint format (correct):**
```
bucket-name.s3-website-region.amazonaws.com
```

**S3 Bucket URL format (wrong for websites):**
```
bucket-name.s3.region.amazonaws.com
```

### Certificate errors or "Not Secure" warning

1. Make sure "Always Use HTTPS" is enabled in Cloudflare
2. Wait a few minutes for SSL certificates to provision
3. Try in a private/incognito window
4. Clear browser cache

### WWW doesn't work

Check your second DNS record:
- Name should be `www`
- Target should point to `@` or your root domain
- Proxy should be enabled (orange cloud)

### DNS not updating

**Force a DNS refresh on your computer:**

**On Mac/Linux:**
```bash
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

**On Windows:**
```cmd
ipconfig /flushdns
```

## Cloudflare additional features (optional)

Now that you're set up, explore these free features:

### Speed optimization

1. Go to "Speed" section
2. Enable:
   - Auto Minify (HTML, CSS, JS)
   - Brotli compression
   - HTTP/2 to Origin

### Security

1. Go to "Security" section
2. Security level: Medium or High
3. Enable "Bot Fight Mode"
4. Configure firewall rules if needed

### Analytics

1. Click "Analytics" to see:
   - Visitor counts
   - Top pages
   - Geographic data
   - Performance metrics

### Caching

1. Go to "Caching"
2. Click "Configuration"
3. Browser Cache TTL: 4 hours or more
4. Click "Purge Everything" when you deploy updates (if needed)

## Managing your domain

### Auto-renewal

Check if auto-renewal is enabled:
1. Go to "Domain Registration"
2. Click on your domain
3. Look for "Auto-renew" setting
4. Enable or disable as preferred

### WHOIS privacy

Your personal information is hidden by default with Cloudflare. No action needed!

### Transfer to another registrar

If you want to move your domain later:
1. Unlock domain in Cloudflare
2. Get authorization code
3. Transfer to new registrar

**Note:** You must wait 60 days after initial registration before transferring.

## Cost breakdown

**Annual costs:**
- Domain registration: $10-15/year (depends on extension)
- Cloudflare services: $0 (free tier is generous)
- AWS S3: $0-1/month
- **Total: About $10-20/year**

That's less than the cost of a few coffees for a professional web presence!

## Alternatives to Cloudflare

If you prefer a different registrar:

**Namecheap, Google Domains, GoDaddy:**
- Buy domain there
- Change nameservers to Cloudflare
- Continue from Step 3 of this guide

**Why still use Cloudflare?**
Even if you buy elsewhere, using Cloudflare for DNS gives you:
- Free SSL
- Better performance
- DDoS protection
- Easy DNS management

## Next steps

Congratulations! You now have a professional domain for your CV website.

**What to do next:**
- Share your new domain on LinkedIn, business cards, resume
- Set up email forwarding for your domain (many registrars offer this free)
- Monitor your analytics to see who's visiting
- Keep your CV updated - remember, GitHub Actions deploys automatically!

**Resources:**
- [Troubleshooting Guide](TROUBLESHOOTING.md) - If you run into issues
- [Customization Guide](CUSTOMIZATION.md) - Update your CV content
- [AWS Deployment Guide](AWS_DEPLOYMENT.md) - Understand your hosting setup
