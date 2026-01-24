# Customization Guide

This guide shows you exactly how to make this CV website yours. All the content you'll change lives in simple TypeScript files - no complex setup required!

## Where to find everything

All customization files are in the `src/assets/` folder:

```
src/assets/
├── greeting.tsx           # Your name and greeting
├── workExperience.tsx     # Job history
├── technologyIcons.tsx    # Skills and technologies
├── socialLinks.tsx        # Social media and contact links
└── certificationList.tsx  # Certifications and badges
```

## Changing your name and greeting

**File:** `src/assets/greeting.tsx`

This controls the text in the top left of your site.

**Current content:**
```typescript
export const greetingList = {
    intro: "Hello, I'm",
    name: "Chris Alvis"
}
```

**To change it:**
Just edit the text inside the quotes:
```typescript
export const greetingList = {
    intro: "Hi there, I'm",
    name: "Your Name"
}
```

Save the file and watch it update instantly in your browser!

## Adding your work experience

**File:** `src/assets/workExperience.tsx`

This creates the timeline of your jobs on the main page.

**Structure:**
```typescript
export const workExperienceList = [
    {
        title: "Job Title",
        company: "Company Name",
        startDate: "Month Year",
        endDate: "Month Year",
        description: [
            "First responsibility or achievement",
            "Second responsibility or achievement",
            "And so on..."
        ],
        direction: 'flex-start',
        position: 'Display Name'
    }
]
```

**What each field means:**

- `title` - Your job title (e.g., "Senior Developer")
- `company` - Company name
- `startDate` - When you started (e.g., "January 2020")
- `endDate` - When you finished, or "Present" for current jobs
- `description` - Array of bullet points about what you did
- `direction` - Use `'flex-start'` for left-aligned, `'flex-end'` for right-aligned
- `position` - Used internally, can be the same as title or company

**Example - Adding your job:**

```typescript
export const workExperienceList = [
    {
        title: "Frontend Developer",
        company: "Tech Startup Inc",
        startDate: "June 2022",
        endDate: "Present",
        description: [
            "Built responsive web applications using React and TypeScript",
            "Improved page load times by 40% through optimization",
            "Mentored junior developers on best practices"
        ],
        direction: 'flex-start',
        position: 'Frontend Developer'
    },
    {
        title: "Junior Developer",
        company: "Previous Company",
        startDate: "January 2020",
        endDate: "May 2022",
        description: [
            "Maintained legacy applications",
            "Fixed bugs and implemented small features"
        ],
        direction: 'flex-end',
        position: 'Junior Developer'
    }
]
```

**Tips:**
- List jobs from newest to oldest (most recent first)
- Alternate `direction` between `'flex-start'` and `'flex-end'` for a nice zigzag effect
- Keep bullet points concise and focus on achievements

## Showcasing your skills

**File:** `src/assets/technologyIcons.tsx`

This displays icons for the technologies you know. The site uses icons from [Icons8](https://icons8.com/).

**Structure:**
```typescript
export const technologyIconsList = [
    {
        image: "icon-url-here",
        alt: "Technology Name",
        language: "Display Name"
    }
]
```

**Finding icons:**

1. Go to [icons8.com](https://icons8.com/)
2. Search for the technology (e.g., "Python", "React", "Docker")
3. Click on the icon you like
4. Right-click and copy the image URL
5. Paste it in the `image` field

**Example - Adding your technologies:**

```typescript
export const technologyIconsList = [
    {
        image: "https://img.icons8.com/color/512/000000/javascript.png",
        alt: "JavaScript",
        language: "JavaScript"
    },
    {
        image: "https://img.icons8.com/color/512/000000/react-native.png",
        alt: "React",
        language: "React"
    },
    {
        image: "https://img.icons8.com/color/512/000000/python.png",
        alt: "Python",
        language: "Python"
    }
]
```

**Pro tip:** The site automatically handles lots of icons. If you have many, it'll add a "Show More" button so the page doesn't get too crowded.

## Adding social links

**File:** `src/assets/socialLinks.tsx`

This puts your social media and contact links on the page.

**Structure:**
```typescript
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const socialLinksList = [
    {
        title: "Link Name",
        href: "url-here",
        icon: <IconComponent/>,
        alt: "Description"
    }
]
```

**Available icons:**
The project uses Material UI icons. Common ones:
- `GitHubIcon` - GitHub
- `LinkedInIcon` - LinkedIn  
- `TwitterIcon` - Twitter/X
- `AlternateEmailIcon` - Email
- `ContactPageIcon` - Resume/CV
- `InstagramIcon` - Instagram
- `FacebookIcon` - Facebook
- `LanguageIcon` - Personal website

**Example - Your social links:**

```typescript
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';

export const socialLinksList = [
    {
        title: "GitHub",
        href: "https://github.com/yourusername",
        icon: <GitHubIcon/>,
        alt: "My GitHub profile"
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/yourprofile/",
        icon: <LinkedInIcon/>,
        alt: "My LinkedIn profile"
    },
    {
        title: "Email",
        href: "mailto:your.email@example.com",
        icon: <AlternateEmailIcon/>,
        alt: "Send me an email"
    },
    {
        title: "Twitter",
        href: "https://twitter.com/yourusername",
        icon: <TwitterIcon/>,
        alt: "My Twitter"
    }
]
```

**Important:** Make sure to import the icons at the top of the file!

## Adding certifications

**File:** `src/assets/certificationList.tsx`

Show off your certifications with clickable badges.

**Structure:**
```typescript
export const certificationList = [
    {
        image: 'badge-image-url',
        link: 'certificate-pdf-url',
        alt: 'Certification Name'
    }
]
```

**Example - Your certifications:**

```typescript
export const certificationList = [
    {
        image: 'https://example.com/badge.png',
        link: 'https://example.com/my-certificate.pdf',
        alt: 'AWS Certified Developer'
    },
    {
        image: 'https://example.com/another-badge.png',
        link: 'https://example.com/another-cert.pdf',
        alt: 'Google Cloud Professional'
    }
]
```

**Where to host certificates:**
- If you're using AWS S3 (see deployment guide), upload PDFs there
- Or use Google Drive, Dropbox, or any public URL
- Make sure the link is publicly accessible

**Where to get badge images:**
- Most certification providers give you a badge image
- AWS, Google Cloud, Microsoft all provide official badge images
- Save these and upload them alongside your certificates

## Testing your changes

After editing any file:

1. Save the file
2. Check your browser - it should auto-refresh
3. Make sure everything looks good
4. Check on mobile view (press F12 in browser, click device icon)

## Common mistakes to avoid

### Forgetting commas

Each item in an array needs a comma after it:
```typescript
export const list = [
    { title: "First" },
    { title: "Second" }
]
```

### Mismatched quotes

Use either single or double quotes consistently:
```typescript
title: "This works"
title: 'This also works'
title: "But don't mix' them
```

### Breaking the structure

Keep the curly braces `{}` and square brackets `[]` balanced:
```typescript
export const list = [
    {
        field: "value"
    }
]
```

## Need to undo changes?

If you mess something up, you can always:

1. Use Git to revert:
```bash
git checkout src/assets/filename.tsx
```

2. Or just re-download the original file from GitHub

## Next steps

Once you're happy with your customization:
- **[Deploy to AWS](AWS_DEPLOYMENT.md)** to put your site online
- **[Set up GitHub Actions](GITHUB_ACTIONS.md)** so updates deploy automatically
- **[Add a custom domain](CLOUDFLARE_DOMAIN.md)** to make it look professional
