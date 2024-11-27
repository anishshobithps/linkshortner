# LinkShortener Backend

This is the backend service for the **Link Shortener** project, built using the [**Hono framework**](https://hono.dev/). It uses [**MongoDB Atlas**](https://www.mongodb.com/products/platform/atlas-database) for the database and [**Prisma**](https://www.prisma.io/) for database management, providing a lightweight and efficient setup for managing link shortening.

> [!IMPORTANT]
> Before proceeding, ensure you have followed the [root-level setup instructions](../README.md) to create the `linkshortner` directory structure.

---
## Table of Contents
1. [Getting Started](#getting-started)
2. [Environment Variables](#environment-variables)
3. [Scripts](#scripts)
4. [Challenges](#challenges)

## Getting Started

### Prerequisites

To set up and run the backend, ensure you have the following:

- **Node.js** (v20 or later)
  It's recommended to use [Volta](https://volta.sh/) for managing Node.js versions effortlessly. Volta ensures compatibility and seamless version switching across projects.

- **MongoDB Atlas Account**
  Create a free cloud database by [signing up for MongoDB Atlas](https://www.mongodb.com/atlas). MongoDB Atlas provides a highly scalable and managed NoSQL database solution.

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

![!IMPORTANT]
> Update the `DATABASE_URL` in the `.env` file with your MongoDB Atlas connection string.

### Scripts
1. `npm run dev`: Runs the development server with live-reloading enabled for the `src` folder.
2. `npm run build`: Compiles the TypeScript code and builds the application into the `dist` folder.
3. `npm run start`: Starts the production server from the compiled `dist` folder.
4. `npm run prisma:generate`: Generates the Prisma client for database interaction.
5. `npm run prisma:migrate`: Applies migrations to the database during development.
6. `npm run prisma:studio`: Opens Prisma Studio, a GUI for managing your database.

### Challenges

#### Beginner Challenges

1. **URL Validation**
   - Ensure the input URLs are valid before shortening.
   - Handle cases where users enter invalid or incomplete URLs.
   - Add domain whitelisting to restrict certain URLs.

2. **URL Management**
   - Allow users to delete URLs they no longer need.
   - Implement a simple interface to manage shortened URLs.

3. **Error Handling**
   - Display clear and user-friendly error messages.
   - Handle edge cases gracefully, such as server downtime or invalid requests.

4. **Basic Logging**
   - Log activities like URL creation, deletion, and errors.
   - Use these logs for debugging or understanding usage patterns.

---

#### Intermediate Challenges

1. **Authentication**
   - Implement user registration and login functionality.
   - Allow users to view and manage their personal list of shortened URLs.

2. **Custom URL Slugs**
   - Enable users to create custom slugs for their shortened URLs (e.g., `myshort.ly/custom-slug`).
   - Ensure the slugs are unique and handle cases where a duplicate is attempted.

3. **Rate Limiting**
   - Prevent abuse by limiting the number of URL shortening requests per IP or user.
   - Implement mechanisms to block excessive requests gracefully.

4. **Basic Analytics**
   - Show how many times each shortened URL has been accessed.
   - Provide a simple stats page for users to track their URL performance.

---

#### Advanced Challenges

1. **URL Lifecycle Management**
   - Add expiration dates for shortened URLs (e.g., URLs expire after 7 days).
   - Create background jobs to remove expired URLs automatically.
   - Notify users before their links expire, if applicable.

2. **Enhanced Analytics**
   - Track the source of clicks (e.g., referrals from social media or direct visits).
   - Provide geographic insights into where clicks are originating from.
   - Build an analytics dashboard to visualize the data.

3. **URL Safety Features**
   - Show a preview of the destination URL before redirecting.
   - Integrate safe browsing checks to block malicious links.
   - Extract metadata like the title and description from the destination URL for better user experience.

4. **Custom Domain Support**
   - Allow users to use their own domains for shortened URLs.
   - Provide an easy setup guide for integrating custom domains.

5. **Global Redirection**
   - Implement region-based redirection (e.g., redirect users in the US to a different link than users in Europe).
   - Use IP geolocation to determine the user’s region.

6. **API Integration**
   - Provide a public API for developers to integrate URL shortening into their applications.
   - Include features like authentication, rate limiting, and analytics in the API.
