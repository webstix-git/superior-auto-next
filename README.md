# Superior Auto Body Website (Next.js)

This project is a Next.js application using the **App Router** and TypeScript.

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Query

## Getting started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm

### Install dependencies

```sh
npm install
```

### Start development server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

```sh
# Start Next.js dev server
npm run dev

# Create production build
npm run build

# Start production server (after build)
npm run start

# Run lint checks
npm run lint

# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

## Project structure

- `src/app` - App Router routes and root layout
- `src/components` - shared UI and layout components
- `src/pages` - reusable page-level components consumed by `src/app` routes
- `public` - static assets (images, icons, etc.)
- `src/index.css` - global styles (imported by `src/app/globals.css`)

## Deployment (Vercel)

This project is ready to deploy on Vercel.

1. Push code to GitHub/GitLab/Bitbucket.
2. Import the repository in [Vercel](https://vercel.com).
3. Vercel auto-detects Next.js and uses:
   - Build command: `npm run build`
   - Output: `.next`
4. Deploy.

## Notes

- Static assets should be placed in `public/` and referenced as `/filename.ext`.
- If you encounter stale runtime chunk errors during local development, clear cache and restart:

```sh
rm -rf .next
npm run dev
```
