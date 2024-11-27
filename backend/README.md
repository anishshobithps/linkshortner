# LinkShortener Backend

This is the backend service for the **Link Shortener** project, built using the [**Hono framework**](https://hono.dev/). It uses [**MongoDB Atlas**](https://www.mongodb.com/products/platform/atlas-database) for the database and [**Prisma**](https://www.prisma.io/) for database management, providing a lightweight and efficient setup for managing link shortening.

> [!IMPORTANT]
> Before proceeding, ensure you have followed the [root-level setup instructions](../README.md) to create the `linkshortner` directory structure.

---
## Table of Contents
1. [Getting Started](#getting-started)
2. [Environment Variables](#environment-variables)
3. [Scripts](#scripts)

## Getting Started

### Prerequisites

To set up and run the backend, ensure you have the following:

- **Node.js** (v20 or later)
  It's recommended to use [Volta](https://volta.sh/) for managing Node.js versions effortlessly. Volta ensures compatibility and seamless version switching across projects.

- **MongoDB Atlas Account**
  Create a free cloud database by [signing up for MongoDB Atlas](https://www.mongodb.com/atlas). MongoDB Atlas provides a highly scalable and managed NoSQL database solution.

### Steps to Set Up the Backend

> [!TIP]
> If you haven't yet scaffolded the project, follow **Step 0**. If the project has already been scaffolded, skip to **Step 1**.

> [!IMPORTANT]
> Ensure the backend directory is created as part of the [linkshortner project structure](../README.md).

#### 0. Scaffold the Project (If Needed)
If the project is not yet set up, scaffold it using the following command:

```sh
npm create hono@latest backend
```

This will prompt you to choose some settings. Follow these steps:
1. **Which template do you want to use?**
   Select `nodejs`. (Up and Down arrow button)
2. **Do you want to install project dependencies?**
   Choose `Yes`.
3. **Which package manager do you want to use?**
   Select `npm`.

Once the scaffolding is complete, you should see the following output:
```
create-hono version 0.14.2
✔ Using target directory … backend
✔ Cloning the template
✔ Installing project dependencies
🎉 Copied project files
Get started with: cd backend
```
> [!IMPORTANT]
> After scaffolding, navigate into the backend directory to continue the setup process.

#### 1. Navigate to the Backend Directory
Ensure you are in the backend folder:

```sh
cd backend
```
> [!TIP]
> Learn more about the `cd` command [here](https://man7.org/linux/man-pages/man1/cd.1p.html).

#### 2. Install Dependencies (Optional)
If you skipped scaffolding the project or need to install dependencies manually, run the following command:

```sh
npm install
```
> [!TIP]
> If you used the `npm create hono@latest backend` command, the dependencies were automatically installed during scaffolding. You can skip this step if that’s the case.

#### 3. Install Prisma and Set It Up
To initialize Prisma, run the following command:

```sh
npx prisma init
```

This will create the necessary Prisma configuration files, including a `.env` file where you can configure your database connection.

> [!TIP]
> If you cloned the project and Prisma has already been initialized, you can skip this step.
