# La Juntada

## Introduction

La Juntada is a web application designed to calculate the total sum of purchases during any gathering of friends. Built with Next.js and Prisma, this app ensures a seamless and interactive experience for managing expenses.

## Demo

https://lajuntada.vercel.app/

## Table of Contents

- [Stack](#stack)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Links](#links)

## Stack

- **Framework**: Next.js
- **Database**: SQLite
- **ORM**: Prisma
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Version Control**: Git
- **Deployment**: Vercel

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/andresfernandez89/la-juntada-nextjs.git
   cd la-juntada
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Build the application:
   ```bash
   npm run build
   ```
3. Start the production server:
   ```bash
   npm start
   ```
4. Lint the code:
   ```bash
   npm run lint
   ```
5. Format the code:
   ```bash
   npm run format
   ```

## Configuration

Ensure you have a `.env` file in the root of your project with the following environment variables:

```env
# The connection string for your local SQLite database
DATABASE_URL=file:./dev.db

# The connection string for your remote database
TURSO_DATABASE_URL=libsql://la-juntada-andres-fernandez.turso.io

# Authentication token for accessing the remote database
TURSO_AUTH_TOKEN=your-turso-auth-token
```

## Scripts

The following scripts are available:

- **dev:** Start the development server.
- **build:** Build the application.
- **start:** Start the production server.
- **lint:** Lint the code.
- **format:** Format the code using Prettier.
- **prepare:** Run Husky to set up Git hooks.
- **postinstall:** Generate Prisma client after dependencies are installed.

## Links

- [@andresfernandez89](https://github.com/andresfernandez89)
