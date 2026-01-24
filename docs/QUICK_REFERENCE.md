# Quick Reference Guide

A visual overview of the entire setup process.

## The Big Picture

```
┌─────────────────────────────────────────────────────────────┐
│                    Your Local Computer                       │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  1. Download Project                                   │  │
│  │  2. Customize Content                                  │  │
│  │  3. Test Locally                                       │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ git push
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                         GitHub                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Store your code                                       │  │
│  │  Trigger GitHub Actions (auto-deploy)                 │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ deploy
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                        AWS S3                                │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Host your website files                              │  │
│  │  Serve to visitors                                    │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ DNS
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      Cloudflare                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Custom domain (yourname.com)                         │  │
│  │  SSL certificate (HTTPS)                              │  │
│  │  CDN (faster loading)                                 │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
                    🌍 Live Website!
              https://yourname.com
```

## Setup Timeline

### Phase 1: Local Development (45 minutes)
```
Start
  ↓
Install Node.js (if needed) → 5 min
  ↓
Clone repository → 2 min
  ↓
Install dependencies → 3 min
  ↓
Run locally → 1 min
  ↓
Customize content → 30 min
  ↓
Test locally → 4 min
  ↓
Commit to GitHub → 2 min
```

### Phase 2: AWS Setup (45 minutes)
```
Create AWS account → 10 min
  ↓
Create S3 bucket → 5 min
  ↓
Configure for static hosting → 5 min
  ↓
Upload website files → 5 min
  ↓
Test S3 URL → 2 min
  ↓
Create IAM user → 10 min
  ↓
Get access keys → 3 min
  ↓
Add secrets to GitHub → 5 min
```

### Phase 3: Auto-Deploy (15 minutes)
```
Verify workflow file exists → 2 min
  ↓
Configure GitHub secrets → 8 min
  ↓
Test deployment → 3 min
  ↓
Verify live site → 2 min
```

### Phase 4: Custom Domain (30 min + wait time)
```
Buy domain on Cloudflare → 10 min
  ↓
Configure DNS records → 10 min
  ↓
Enable SSL → 5 min
  ↓
Test domain → 2 min
  ↓
Wait for DNS propagation → 1-24 hours
  ↓
Verify everything works → 3 min
```

### Updating Your CV

```
1. Edit files in src/assets/
   ↓
2. Save changes
   ↓
3. Check locally (auto-refreshes)
   ↓
4. Looks good?
   ↓
5. git add .
   git commit -m "Update CV"
   git push
   ↓
6. GitHub Actions automatically:
   • Builds your site
   • Deploys to S3
   ↓
7. Live in 2 minutes! ✓
```

## Cost Calculator

```
Year 1:
┌─────────────────────────┬──────────┐
│ Item                    │ Cost     │
├─────────────────────────┼──────────┤
│ Node.js                 │ Free     │
│ GitHub Account          │ Free     │
│ GitHub Actions          │ Free     │
│ AWS S3 (Free Tier)      │ Free     │
│ Cloudflare CDN/SSL      │ Free     │
│ Domain Name             │ $10-15   │
├─────────────────────────┼──────────┤
│ TOTAL YEAR 1            │ $10-15   │
└─────────────────────────┴──────────┘

Year 2+:
┌─────────────────────────┬──────────┐
│ Item                    │ Cost     │
├─────────────────────────┼──────────┤
│ AWS S3 (beyond free)    │ ~$1/mo   │
│ Domain renewal          │ $10-15   │
├─────────────────────────┼──────────┤
│ TOTAL PER YEAR          │ ~$22-30  │
└─────────────────────────┴──────────┘
```

## File Organization

```
chrisalvis.dev/
│
├── 📄 README.md                  ← Start here
│
├── 📁 docs/                      ← All guides
│   ├── README.md                 ← Docs overview
│   ├── GETTING_STARTED.md        ← Setup locally
│   ├── CUSTOMIZATION.md          ← Change content
│   ├── AWS_DEPLOYMENT.md         ← Go live
│   ├── GITHUB_ACTIONS.md         ← Auto-deploy
│   ├── CLOUDFLARE_DOMAIN.md      ← Custom domain
│   └── TROUBLESHOOTING.md        ← Fix issues
│
├── 📁 src/
│   ├── 📁 assets/                ← ✏️ Edit these!
│   │   ├── greeting.tsx          ← Your name
│   │   ├── workExperience.tsx    ← Job history
│   │   ├── technologyIcons.tsx   ← Skills
│   │   ├── socialLinks.tsx       ← Social media
│   │   └── certificationList.tsx ← Certs
│   │
│   ├── 📁 components/            ← UI pieces
│   └── 📁 pages/                 ← Page layouts
│
├── 📁 .github/workflows/         ← Auto-deploy
│   └── deploy-s3.yaml
│
└── 📁 public/                    ← Static files
```

## Essential Commands

```bash
# Local Development
npm install          # First time setup
npm run dev          # Start dev server
npm run build        # Build for production

# Git & Deploy
git add .                    # Stage changes
git commit -m "message"      # Commit changes
git push                     # Deploy (triggers GitHub Actions)

# Troubleshooting
rm -rf node_modules          # Delete dependencies
npm install                  # Reinstall
npm cache clean --force      # Clear cache
```

## Success Checklist

### Local Setup Complete ✓
- [ ] Node.js installed
- [ ] Repository cloned
- [ ] Dependencies installed
- [ ] Development server runs
- [ ] Site loads at localhost:5173

### Customization Complete ✓
- [ ] Changed name/greeting
- [ ] Updated work experience
- [ ] Added your skills
- [ ] Added social links
- [ ] Tested all changes locally

### AWS Deployment Complete ✓
- [ ] AWS account created
- [ ] S3 bucket created
- [ ] Static hosting enabled
- [ ] Bucket policy set
- [ ] Files uploaded
- [ ] Site loads at S3 URL

### Auto-Deploy Complete ✓
- [ ] IAM user created
- [ ] Access keys generated
- [ ] GitHub secrets configured
- [ ] Workflow tested
- [ ] Deployment succeeds

### Custom Domain Complete ✓
- [ ] Domain purchased
- [ ] DNS records added
- [ ] SSL enabled
- [ ] Domain loads site
- [ ] HTTPS working