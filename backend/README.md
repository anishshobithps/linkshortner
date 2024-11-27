# LinkShortener Backend

This is the backend service for the **Link Shortener** project, built using the [**Hono framework**](https://hono.dev/). It uses [**MongoDB Atlas**](https://www.mongodb.com/products/platform/atlas-database) for the database and [**Prisma**](https://www.prisma.io/) for database management, providing a lightweight and efficient setup for managing link shortening.

> [!IMPORTANT]
> Before proceeding, ensure you have followed the [root-level setup instructions](../README.md) to create the `linkshortner` directory structure.

---
## Table of Contents
1. [Getting Started](#getting-started)
2. [Environment Variables](#environment-variables)
3. [Scripts](#scripts)
4. [Challenges](../CHALLENGES.md/#backend-challenges)

## Getting Started

### Steps to Set Up the Backend

#### 1. Navigate to the Backend Directory

```sh
cd backend
```

> [!NOTE]
> Learn more about the `cd` command [here](https://man7.org/linux/man-pages/man1/cd.1p.html).

#### 2. Install project dependencies

```sh
npm install
```

> [!NOTE]
> If you used the `npm create hono@latest backend` command, the dependencies were automatically installed during scaffolding. You can skip this step if that’s the case.

## 2. Environment Variables

#### 1. Configure Environment Variables
Copy the example environment file:

```sh
# From the backend directory
cp .env.example .env
```

#### 2. MongoDB Connection String Configuration
The MongoDB connection string follows this format:

```sh
mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?<options>
```

> [!IMPORTANT]
> MongoDB Connection String: Critical Considerations 🔐

#### 🔑 Username & Password Guidelines
- **Credential Safety**:
 - Use strong, unique credentials for your MongoDB Atlas database
 - NEVER use default or easily guessable passwords
 - Consider using a password manager for generation

#### 🚫 Password Complexity Warning
- **Avoid These in Passwords**:
 - Special characters like `@`, `#`, `$`, `%`, `^`, `&`
 - URL-reserved characters: `;`, `/`, `?`, `:`, `=`, `&`

#### 🛡️ Password Generation Tips
- Use alphanumeric combinations
- Recommended format: `[A-Za-z0-9]{12,16}`
- Example safe passwords:
 - `SecureLink2024`
 - `LinkShort3rV2`
 - `M0ngoDB_User123`

#### 🌐 Cluster URL Composition
- **Location in MongoDB Atlas**:
 - Find under "Connect" > "Drivers" section
 - Typical format: `cluster0.abcdef.mongodb.net`
 - Unique to your specific cluster

#### 📦 Database Naming Convention
- **Best Practices**:
 - Use lowercase
 - No spaces or special characters
 - Descriptive and project-specific

#### 🔗 Recommended Database Names
- `linkshortener`
- `urlminifier`
- `shortener_db`

#### ⚙️ Essential Connection Options

```sh
?retryWrites=true&w=majority&appName=LinkShortenerApp
```

- `retryWrites`: Ensures write operations retry on failure
- `w=majority`: Confirms write to majority of replica set
- `appName`: Helps in monitoring and tracking connections

> [!TIP]
> 🚨 **Pro Tip**: Always use environment variables and never hardcode connection strings!


#### Example Connection String:
```sh
DATABASE_URL="mongodb+srv://myuser:MySecurePassword123@cluster0.abcdef.mongodb.net/linkshortener?retryWrites=true&w=majority&appName=LinkShortener"
```

> [!IMPORTANT]
> Update the `DATABASE_URL` in the `.env` file with your MongoDB Atlas connection string.

### Scripts
1. `npm run dev`: Runs the development server with live-reloading enabled for the `src` folder.
2. `npm run build`: Compiles the TypeScript code and builds the application into the `dist` folder.
3. `npm run start`: Starts the production server from the compiled `dist` folder.
4. `npm run prisma:generate`: Generates the Prisma client for database interaction.
5. `npm run prisma:migrate`: Applies migrations to the database during development.
6. `npm run prisma:studio`: Opens Prisma Studio, a GUI for managing your database.
