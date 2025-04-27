# Next.js Template with Supabase Auth

This is a clean Next.js template with Supabase authentication already set up. It includes:

- Next.js App Router
- Supabase Authentication (Google OAuth & Email/Password)
- Authentication middleware
- Sign-in modal
- Protected routes

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (create a `.env.local` file):
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Features

- **Authentication**: Users can sign in with Google or email/password
- **Protected Routes**: Routes are protected by middleware
- **Clean UI**: Minimal UI to build upon
- **TypeScript**: Fully typed codebase

## Project Structure

- `/src/app` - Next.js App Router pages
- `/src/components` - UI components
- `/src/lib` - Supabase client implementations
- `/src/hooks` - Custom React hooks (including auth)
- `/src/middleware.ts` - Authentication middleware
