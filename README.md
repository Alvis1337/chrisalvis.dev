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

You'll want to customize the content to show your own information. All the configuration files are in the `src/assets` folder. Here are the key files to edit:

- **`greeting.tsx`** - Your name and greeting message
- **`workExperience.tsx`** - Your work history and job descriptions
- **`technologyIcons.tsx`** - Skills and technologies you know
- **`socialLinks.tsx`** - Your social media and contact links
- **`certificationList.tsx`** - Your certifications and achievements

## Deploying to the web

This project is configured to automatically deploy to AWS S3 using GitHub Actions. When you push changes to the `main` branch:

1. GitHub Actions runs the build process
2. The built files are synced to your S3 bucket
3. Your website is instantly updated

### AWS Setup Requirements

- An AWS account with an S3 bucket configured for static website hosting
- AWS credentials stored as GitHub repository secrets:
  - `AWS_BUCKET_NAME` - Your S3 bucket name
  - `AWS_ACCESS_KEY_ID` - Your AWS access key
  - `AWS_SECRET_ACCESS_KEY` - Your AWS secret key
  - `AWS_REGION` - Your bucket's region (e.g., `us-east-2`)
  - `S3_SOURCE_DIR` - Source directory to deploy (usually `dist`)

## What's inside?

This project uses some popular web development tools:

- **React** - The framework that powers the website
- **TypeScript** - Adds type safety to catch bugs early
- **Vite** - Makes development fast and builds optimized
- **Material UI** - Provides the styled components
- **Redux** - Manages application state (like dark/light mode)
- **Docker** - Containerizes the application
- **Helm** - Manages Kubernetes deployments
- **GitHub Actions** - Automatically builds and deploys your changes

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## License

This project is open source. Feel free to use it for your own CV website!
