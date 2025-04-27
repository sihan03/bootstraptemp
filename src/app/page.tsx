'use client';

import React from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Template</h1>
        
        {user ? (
          <div>
            <p className="mb-4">You are signed in as: <span className="font-semibold">{user.email}</span></p>
            <p>This is a clean template with Supabase authentication enabled.</p>
          </div>
        ) : (
          <div>
            <p>Please sign in to continue.</p>
          </div>
        )}
      </div>
    </main>
  );
}