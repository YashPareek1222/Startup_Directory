"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

import Link from "next/link";

const AuthButtons = ({session}: {session?: Session}) => {
    return session?.user ? (
        <>
          <Link href="/startup/create">
            <span>Create</span>
          </Link>

          <Link href={`/user/${session?.id}`}>
              <span>{session?.user?.name}</span>
            </Link>
            
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Login</button>
      );
}

export default AuthButtons