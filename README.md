[![wakatime](https://wakatime.com/badge/github/Alvis1337/chrisalvis.dev.svg)](https://wakatime.com/badge/github/Alvis1337/chrisalvis.dev)

![Docker Image CI](https://github.com/alvis1337/chrisalvis.dev/actions/workflows/docker.yml/badge.svg)

# React + TypeScript + Vite CV Site

This site is a personal CV site that I am using to showcase my skills and experience.
It is a work in progress and will be updated as I learn new things and gain new experiences.
This site uses React, SWC, Vite, TypeScript, Redux, Redux Toolkit, Redux Persist, Material UI and React Router DOM.

## Functionality

React, SWC, Vite and TypeScript
  - React with Typescript is the core of this app. Using Vite as the build tool and SWC as the transpiler offers a fast and efficient development environment compared to other tools like Webpack and Babel.
Redux, Redux Toolkit and Redux Persist
  - Redux is used to manage the state of the app. Redux Toolkit is used to simplify the Redux setup and Redux Persist is used to persist the state of the app to local storage.
Material UI
  - Material UI is used to style the app. It is a popular and well supported library that offers a wide range of components and styles. It is also very extensible and customisable.
React Router DOM
  - React Router DOM is used to manage the routing of the app. It is a popular and well supported library that offers a wide range of routing options and features especially with its recent updates.

## CI/CD
Docker and Github Actions

- The Dockerfile is used to build the app and create a container image. It uses a multi-stage build to create a small and efficient image.
- Github Actions is used to build and push the image to the Github Container Registry using your Github PAT to push to your own registry.