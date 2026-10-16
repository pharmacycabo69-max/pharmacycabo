'use client';

import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    const es = (navigator.language || 'en').toLowerCase().startsWith('es');
    window.location.replace(es ? '/es/' : '/en/');
  }, []);
  return (
    <main className="flex min-h-screen items-center justify-center gap-4 text-sm">
      <a href="/en/" className="text-teal underline">English</a>
      <a href="/es/" className="text-teal underline">Español</a>
    </main>
  );
}
