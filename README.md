[![wakatime](https://wakatime.com/badge/github/Alvis1337/chrisalvis.me.svg)](https://wakatime.com/badge/github/Alvis1337/chrisalvis.me)
[![Build and Deploy to AWS S3](https://github.com/Alvis1337/chrisalvis.me/actions/workflows/deploy-s3.yaml/badge.svg)](https://github.com/Alvis1337/chrisalvis.me/actions/workflows/deploy-s3.yaml)

# Personal CV Website

A modern, responsive CV website built with React and TypeScript. Show off your skills, experience, and certifications with a clean, professional design that automatically deploys to AWS.

## What is this?

This is a template for creating your own online resume/CV website. You can customize everything about it - your name, work history, skills, certifications, and social links. Once you set it up, any changes you push to GitHub will automatically update your live website.

## Quick Start

**Prerequisites:** You need Node.js installed on your computer. If you don't have it, download it from [nodejs.org](https://nodejs.org/) (get the LTS version).

### Get it running locally

1. Download this project to your computer:
```bash
git clone https://github.com/Alvis1337/chrisalvis.me.git
cd chrisalvis.me
```

2. Install the dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to the URL shown in the terminal (usually `http://localhost:5173`)

That's it! You should see the website running on your computer.

## Making it yours

You'll want to customize the content to show your own information. All the configuration files are in the `src/assets` folder. See our [Customization Guide](docs/CUSTOMIZATION.md) for step-by-step instructions on editing:

- Your name and greeting
- Work experience
- Skills and technologies
- Social media links
- Certifications

## Deploying to the web

Want to put your CV online so others can see it? We have detailed guides for:

- **[AWS Deployment](docs/AWS_DEPLOYMENT.md)** - Host your site on Amazon S3 (free tier eligible)
- **[Cloudflare Setup](docs/CLOUDFLARE_DOMAIN.md)** - Connect a custom domain name
- **[GitHub Actions](docs/GITHUB_ACTIONS.md)** - Automatically deploy when you make changes

The whole setup can be done with AWS free tier, meaning it costs you nothing for the first year (and very little after that).

## What's inside?

This project uses some popular web development tools:

- **React** - The framework that powers the website
- **TypeScript** - Adds type safety to catch bugs early
- **Vite** - Makes development fast and builds optimized
- **Material UI** - Provides the styled components
- **Redux** - Manages application state (like dark/light mode)
- **GitHub Actions** - Automatically deploys your changes

## Need help?

Check out our detailed documentation in the `docs` folder:

- [Quick Reference](docs/QUICK_REFERENCE.md) - Visual overview, flowcharts, and checklists
- [Getting Started Guide](docs/GETTING_STARTED.md)
- [Customization Guide](docs/CUSTOMIZATION.md)
- [AWS Deployment Guide](docs/AWS_DEPLOYMENT.md)
- [Cloudflare Domain Setup](docs/CLOUDFLARE_DOMAIN.md)
- [GitHub Actions Setup](docs/GITHUB_ACTIONS.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)

## License

This project is open source. Feel free to use it for your own CV website!
