# Documentation

Welcome to the CV website documentation! These guides will help you set up, customize, and deploy your personal website.

## Quick Links

**Want a visual overview?**
→ [Quick Reference Guide](QUICK_REFERENCE.md) - Diagrams, flowcharts, and checklists

**Just getting started?**
→ [Getting Started Guide](GETTING_STARTED.md)

**Want to change the content?**
→ [Customization Guide](CUSTOMIZATION.md)

**Ready to put it online?**
→ [AWS Deployment Guide](AWS_DEPLOYMENT.md)

**Want a professional domain?**
→ [Cloudflare Domain Setup](CLOUDFLARE_DOMAIN.md)

**Want automatic deployments?**
→ [GitHub Actions Setup](GITHUB_ACTIONS.md)

**Something not working?**
→ [Troubleshooting Guide](TROUBLESHOOTING.md)

## Documentation Overview

### [Getting Started](GETTING_STARTED.md)
Learn how to:
- Install Node.js and dependencies
- Run the website locally on your computer
- Understand the project structure
- Use basic development commands

**Time needed:** 15 minutes

### [Customization](CUSTOMIZATION.md)
Learn how to:
- Change your name and greeting
- Add your work experience
- List your skills and technologies
- Add social media links
- Display certifications

**Time needed:** 30 minutes

### [AWS Deployment](AWS_DEPLOYMENT.md)
Learn how to:
- Create an AWS account (free tier)
- Set up an S3 bucket for hosting
- Configure the bucket for static websites
- Upload your website to the cloud
- Create IAM users for automated deployments

**Time needed:** 30-45 minutes
**Cost:** Free for first year, then ~$0-1/month

### [GitHub Actions](GITHUB_ACTIONS.md)
Learn how to:
- Configure GitHub secrets for AWS
- Set up automatic deployments
- Understand the workflow file
- Monitor deployments
- Troubleshoot failed deployments

**Time needed:** 15 minutes
**Cost:** Free

### [Cloudflare Domain](CLOUDFLARE_DOMAIN.md)
Learn how to:
- Register a custom domain
- Point your domain to AWS S3
- Enable HTTPS (SSL certificates)
- Configure DNS records
- Optimize performance and security

**Time needed:** 30 minutes plus DNS propagation
**Cost:** ~$10-15/year for domain

### [Troubleshooting](TROUBLESHOOTING.md)
Solutions for:
- Local development issues
- AWS S3 problems
- GitHub Actions failures
- Domain and DNS issues
- Performance problems

## Recommended Path

### Path 1: Just want to see it (5 minutes)
1. [Getting Started](GETTING_STARTED.md) - Steps 1-4
2. Open `http://localhost:5173` in your browser

### Path 2: Make it yours locally (45 minutes)
1. [Getting Started](GETTING_STARTED.md)
2. [Customization](CUSTOMIZATION.md)
3. Test everything locally

### Path 3: Put it online (1.5 hours)
1. [Getting Started](GETTING_STARTED.md)
2. [Customization](CUSTOMIZATION.md)
3. [AWS Deployment](AWS_DEPLOYMENT.md)
4. Visit your S3 URL and show it to friends!

### Path 4: Complete professional setup (2.5 hours)
1. [Getting Started](GETTING_STARTED.md)
2. [Customization](CUSTOMIZATION.md)
3. [AWS Deployment](AWS_DEPLOYMENT.md)
4. [GitHub Actions](GITHUB_ACTIONS.md)
5. [Cloudflare Domain](CLOUDFLARE_DOMAIN.md)
6. Share your professional domain everywhere!

## What You'll Learn

By following these guides, you'll gain experience with:

**Frontend Development:**
- React and TypeScript
- Modern build tools (Vite)
- Component-based architecture
- State management with Redux

**Cloud Services:**
- AWS S3 for static hosting
- IAM for access management
- CloudFront CDN (optional)

**DevOps:**
- CI/CD with GitHub Actions
- Automated deployments
- Environment variables and secrets

**Networking:**
- DNS configuration
- SSL/TLS certificates
- CDN optimization

**Version Control:**
- Git fundamentals
- GitHub workflows
- Branch management

## Cost Summary

Here's what everything costs:

| Service | Cost | Free Tier? |
|---------|------|------------|
| Development (local) | Free | N/A |
| GitHub repository | Free | Yes (public repos) |
| GitHub Actions | Free | Yes (2000 min/month) |
| AWS S3 hosting | Free - $1/month | First year free |
| Domain (Cloudflare) | $10-15/year | No |
| SSL Certificate | Free | Yes (via Cloudflare) |
| CDN | Free | Yes (via Cloudflare) |

**Total:** $10-15/year (just the domain!)

## Getting Help

### Documentation issues
If something in these guides is unclear or incorrect:
1. Check the [Troubleshooting Guide](TROUBLESHOOTING.md)
2. Search for the error message online
3. Open a GitHub issue with details

### Technical support
- Check AWS documentation
- Check Cloudflare documentation
- Search Stack Overflow
- Review GitHub Actions documentation

### Common questions

**Q: Do I need to know how to code?**
A: Basic editing of text files is all you need. The guides show you exactly what to change.

**Q: Will this really be free?**
A: Hosting is free for the first year with AWS free tier, then about $1/month. The domain costs $10-15/year. That's it!

**Q: How long does setup take?**
A: About 2-3 hours to go from zero to a live website with a custom domain.

**Q: Can I use a different cloud provider?**
A: Yes! The concepts are similar. You'd need to adapt the AWS instructions for Azure, Google Cloud, or another provider.

**Q: Do I need a domain?**
A: No! You can use the S3 URL. A custom domain just looks more professional.

**Q: Can I use my own domain registrar?**
A: Yes! Buy the domain anywhere, then follow the Cloudflare DNS instructions.

## Project Structure

Understanding the project layout:

```
chrisalvis.dev/
├── docs/                       ← You are here
│   ├── README.md              ← This file
│   ├── GETTING_STARTED.md
│   ├── CUSTOMIZATION.md
│   ├── AWS_DEPLOYMENT.md
│   ├── GITHUB_ACTIONS.md
│   ├── CLOUDFLARE_DOMAIN.md
│   └── TROUBLESHOOTING.md
├── src/
│   ├── assets/                ← Edit these to customize
│   ├── components/            ← React components
│   ├── pages/                 ← Page layouts
│   └── main.tsx              ← App entry point
├── public/                    ← Static files (icons, etc)
├── .github/workflows/         ← GitHub Actions
└── package.json              ← Dependencies
```

## Contributing

Found a typo? Want to improve the docs? 

Feel free to:
1. Fork the repository
2. Make your changes
3. Submit a pull request

Or just open an issue with suggestions!

## Additional Resources

**Learning React:**
- [React Official Tutorial](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

**AWS Resources:**
- [AWS Free Tier Details](https://aws.amazon.com/free/)
- [S3 Documentation](https://docs.aws.amazon.com/s3/)

**Cloudflare Resources:**
- [Cloudflare Learning Center](https://www.cloudflare.com/learning/)
- [DNS Documentation](https://developers.cloudflare.com/dns/)

**Git & GitHub:**
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## License

This documentation is part of the chrisalvis.dev project and is open source. Use it freely for your own CV website!

---

Ready to get started? Head to the [Getting Started Guide](GETTING_STARTED.md)!
