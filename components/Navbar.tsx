import Link from "next/link"
import Image from "next/image"
import { auth } from "@/auth"
import { signIn, signOut } from "next-auth/react";
import AuthButtons from "./AuthButtons";

const Navbar = async() => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={144} height={30}/>
            </Link>
                    {/* Authentication Links */}
        <div className="flex items-center gap-5 text-black">
          <AuthButtons session={session} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar