'use client'; // Mark this as a client component

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export function SessionProviderWrapper({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
