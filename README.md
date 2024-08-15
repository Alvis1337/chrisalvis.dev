[![wakatime](https://wakatime.com/badge/github/Alvis1337/chrisalvis.dev.svg)](https://wakatime.com/badge/github/Alvis1337/chrisalvis.dev)
[![Build and Deploy to AWS S3](https://github.com/Alvis1337/chrisalvis.dev/actions/workflows/deploy-s3.yaml/badge.svg)](https://github.com/Alvis1337/chrisalvis.dev/actions/workflows/deploy-s3.yaml)

# React + TypeScript + Vite CV Site

This site is a personal CV site used to showcase my skills and experience. It is a work in progress and will be updated as I learn new things and gain new experiences.

## Technologies

- **React**: Core of the app, with TypeScript for type safety.
- **SWC**: Transpiler used for fast builds.
- **Vite**: Build tool for efficient development.
- **Redux & Redux Toolkit**: State management and setup simplification.
- **Redux Persist**: Persists app state to local storage.
- **Material UI**: Styling with a wide range of components.
- **React Router DOM**: Manages routing within the app.

## Instructions

### Setup

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/Alvis1337/chrisalvis.dev.git
cd chrisalvis.dev
npm install
```

2. Configure the following files in `src/assets`:

- **`certificationList.tsx`**: Add an image, a link, and an alt text to display certifications with hyperlinks.
- **`greeting.tsx`**: Edit the greeting and name in the top left of the page.
- **`socialLinks.tsx`**: Add social media links under the marquee. You can import your own icons if needed.
- **`technologyIcons.tsx`**: List technologies you're comfortable with. A "Show More" button will appear if there are many.
- **`workExperience.tsx`**: Configure item alignment using `flex-start` or `flex-end`, and map each item in the array for a bullet-pointed list.

### Building

1. Configure environment variables for the GitHub Actions pipeline:
- `AWS_ACCESS_KEY_ID`
- `AWS_BUCKET_NAME`
- `AWS_REGION`
- `AWS_SECRET_ACCESS_KEY`
- `S3_SOURCE_DIR`

2. Review and adjust the GitHub Actions ignore settings if necessary.

3. Once configured, your static files will be automatically pushed to the S3 bucket.

## CI/CD

GitHub Actions is used for continuous integration and deployment. The workflow builds and pushes the app to an S3 bucket configured to host a static website.
