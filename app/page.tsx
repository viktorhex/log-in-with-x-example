import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth.config';
import Image from 'next/image';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session ? (
        <>
        Welcome! <Image src={session.user?.image || '/default-image.png'} height={200} width={200} alt="User Image" />
        <a href="api/auth/signout">sign out flow</a>
        </>
      ) : (
        <h1><a href="api/auth/signin">sign in flow</a></h1>
      )}
    </div>
  );
}
