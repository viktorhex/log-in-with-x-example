'use client';

import { useSession } from 'next-auth/react';

export default function HomePage() {
  const session = useSession();
  console.log(session);
  const { data, status } = session;

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (data) {
    return <div>Welcome, {data.user?.name}!</div>;
  }

  return <div>Not signed in</div>;
}