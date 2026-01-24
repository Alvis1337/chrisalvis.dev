# Getting Started

Welcome! This guide will walk you through everything you need to get your CV website up and running on your local computer.

## What you'll need

Before we start, make sure you have these installed:

### Node.js and npm

Node.js is the JavaScript runtime that lets you run this project. npm comes with it and handles installing all the libraries we need.

**How to check if you have it:**
Open your terminal and type:
```bash
node --version
npm --version
```

If you see version numbers, you're good! If not, download Node.js from [nodejs.org](https://nodejs.org/). Get the LTS (Long Term Support) version - it's the most stable.

### Git (optional but recommended)

Git helps you download the project and track changes you make.

**How to check if you have it:**
```bash
git --version
```

Don't have it? Download from [git-scm.com](https://git-scm.com/)

### A code editor

You'll want a good text editor to customize your site. We recommend:
- **VS Code** (most popular, free) - [code.visualstudio.com](https://code.visualstudio.com/)
- **WebStorm** (more features, paid)
- **Sublime Text** (lightweight)

## Step 1: Download the project

### Using Git (recommended)

Open your terminal and navigate to where you want to store the project:
```bash
cd ~/Documents
git clone https://github.com/Alvis1337/chrisalvis.dev.git
cd chrisalvis.dev
```

### Without Git

1. Go to the GitHub repository
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to a folder
5. Open your terminal and navigate to that folder

## Step 2: Install dependencies

This downloads all the libraries and tools the project needs:
```bash
npm install
```

This might take a couple of minutes. You'll see a progress bar and lots of text scrolling by - that's normal!

**What's happening?** npm is reading the `package.json` file and downloading everything listed there. These get stored in a folder called `node_modules`.

## Step 3: Start the development server

Run this command:
```bash
npm run dev
```

You should see something like:
```
VITE v5.1.0  ready in 324 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## Step 4: View your site

Open your web browser and go to `http://localhost:5173`

You should see the CV website! Right now it has placeholder content, but we'll change that in the next guide.

## Understanding what you see

The development server you just started is watching for changes. This means:
- When you edit any file and save it, the browser automatically refreshes
- You can see changes instantly without restarting anything
- Any errors will show up in the terminal or in the browser

## Common issues

### Port already in use

If you see "Port 5173 is already in use", another program is using that port. Either:
- Close the other program
- Or Vite will automatically try port 5174, 5175, etc.

### Module not found errors

If you see errors about missing modules:
```bash
rm -rf node_modules
npm install
```

This deletes and reinstalls all dependencies.

### Permission errors

On Mac/Linux, if you get permission errors, try:
```bash
sudo npm install
```

You might need to enter your computer password.

## Next steps

Now that you have the site running locally, you're ready to:
1. **[Customize the content](CUSTOMIZATION.md)** to show your information
2. **[Deploy to AWS](AWS_DEPLOYMENT.md)** to put it online
3. **[Set up a custom domain](CLOUDFLARE_DOMAIN.md)** to make it look professional

## Development commands cheat sheet

Here are the commands you'll use most often:

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production-ready files |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check code for errors |

Press `Ctrl + C` (or `Cmd + C` on Mac) in the terminal to stop the development server.

## Project structure overview

Here's what the important folders and files do:

```
chrisalvis.dev/
├── src/                    # Your source code
│   ├── assets/            # Configuration files you'll edit
│   ├── components/        # Reusable UI pieces
│   ├── pages/            # Different pages of the site
│   └── main.tsx          # App entry point
├── public/                # Static files (images, icons)
├── docs/                  # Documentation you're reading now
├── package.json           # Project configuration and dependencies
└── vite.config.ts         # Build tool configuration
```

You'll mostly be working in the `src/assets/` folder to customize content.
