'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

// Main page component with modern UI and dark/light mode toggle
export default function Home() {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const createSession = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.session) {
        setMessage('Session created successfully!');
        console.log('Session:', data.session);
      } else if (data.error) {
        setMessage(`Error: ${data.error}`);
      } else {
        setMessage('Session response received');
      }
    } catch (error) {
      setMessage('Error creating session');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Welcome
          </h1>
          <p className="text-lg text-muted-foreground">
            A minimal fullstack application
          </p>
        </div>

        <div className="card p-6 rounded-lg border">
          <div className="space-y-4">
            <button
              onClick={createSession}
              disabled={loading}
              className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Loading...' : 'Create Session'}
            </button>
            
            {message && (
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium">Response:</p>
                <p className="text-lg font-semibold mt-2">{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

