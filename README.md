# chrisalvis.me

Personal portfolio / resume site.

**Live:** [chrisalvis.me](https://chrisalvis.me)

## Tech Stack

**Frontend:** React 18, TypeScript, Vite, Material UI, Redux Toolkit  
**Hosting:** Cloudflare Pages  
**Deploy:** GitHub Actions → Cloudflare Pages on push to `main`

## Local Development

```bash
npm install
npm run dev
```

## Deployment

Push to `main` — GitHub Actions handles the rest.

To deploy manually:
```bash
npm run build
npx wrangler pages deploy dist --project-name chrisalvis-me
```

## Customization

All content is in `src/assets/` — edit greeting, work experience, skills, certifications, and social links there.
