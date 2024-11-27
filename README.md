# LinkShortner

## Prerequisites

To set up and run the backend and frontend, ensure you have the following:

- **Node.js** (v20 or later)
  It's recommended to use [Volta](https://volta.sh/) for managing Node.js versions effortlessly. Volta ensures compatibility and seamless version switching across projects.

- **MongoDB Atlas Account**
  Create a free cloud database by [signing up for MongoDB Atlas](https://www.mongodb.com/atlas). MongoDB Atlas provides a highly scalable and managed NoSQL database solution.

A **link shortener application** created during a workshop, complete with step-by-step guidelines to recreate it and additional challenges to enhance it. The project consists of two main components:

- [**Backend**](#backend)
- [**Frontend**](#frontend)

This project serves as a comprehensive example of a modern web application, showcasing best practices for both backend and frontend development.

## Tools Used

1. [Hono](https://hono.dev/) - A fast and minimalistic web framework for building APIs in JavaScript/TypeScript.
2. [Next.js](https://nextjs.org/) - A React framework for building modern web applications with server-side rendering and static site generation.
3. [Shadcn](https://github.com/shadcn/ui) - A collection of UI components built with TailwindCSS for building modern UIs.
4. [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
5. [Prisma](https://www.prisma.io/) - An ORM (Object Relational Mapper) for TypeScript and Node.js, enabling easy database interaction.
6. [MongoDB](https://www.mongodb.com/) - A NoSQL database for storing URL data and other project information.
7. [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds static types to the language, improving development experience and code quality.


## Backend

The [backend](./backend/) is built using [Hono](https://hono.dev/) and connects to a [Prisma](https://www.prisma.io/) client for database management. It listens on port `3001` and exposes the following routes:

- `GET /urls`: Retrieve all shortened URLs.
- `GET /urls/:slug`: Retrieve a specific URL by its shortened slug and increment the visit count.
- `POST /urls/create`: Create a new shortened URL with the provided original URL.

## Frontend

The [frontend](./frontend/) is built using [Next.js](https://nextjs.org/) and [Shadcn](https://github.com/shadcn/ui) for UI components. It is styled using [TailwindCSS](https://tailwindcss.com/). The frontend connects to the backend API to manage URLs and display relevant data.

## Challenge

Your task is to implement and enhance the URL shortener project, with both frontend and backend components. Below are the challenges to work on, categorized into [Backend challenges](CHALLENGES.md/#backend-challenges) and [Frontend challenges](CHALLENGES.md/#frontend-challenges).

The [frontend](./frontend/) is literally barebone and I have not done the implementation of anything shown during the workshop, the hard task is for you to improve and learn.

### Guidelines:

- **Backend Setup**: Ensure your backend is running at [http://localhost:3001](http://localhost:3001) and the frontend at [http://localhost:3000](http://localhost:3000).
- **Collaboration**: If you encounter any issues while working on either the frontend or backend, feel free to ask in the [Discord Server](https://discord.gg/274y3VRx). The community will be happy to help!

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE.md) file for details.
