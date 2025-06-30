# Task Management App

A modern, web-based application for organizing, tracking, and managing tasks efficiently. Built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui.

## Features

- User authentication (login/signup)
- Create, edit, and delete tasks
- Mark tasks as completed or pending
- Filter and search tasks
- Responsive design for desktop and mobile
- Persistent storage using Supabase (PostgreSQL)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Supabase](https://supabase.com/) account (for backend and database)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the root directory.
   - Add your Supabase project URL and anon/public key:
     ```
     VITE_SUPABASE_URL=your-supabase-url
     VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```

4. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Project Structure

- `src/` - Main source code
  - `components/` - React UI components
  - `hooks/` - Custom React hooks for logic
  - `integrations/supabase/` - Supabase client and types
  - `pages/` - Top-level page components
  - `types/` - TypeScript type definitions
- `public/` - Static assets
- `supabase/` - Supabase configuration and migrations

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn-ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/)

## Deployment

You can deploy this app to any static hosting provider (e.g., Vercel, Netlify).  
Make sure to set the required environment variables for Supabase in your deployment settings.

## Custom Domain

If deploying to a platform that supports custom domains, follow their documentation to connect your domain.

## License

[MIT](LICENSE)