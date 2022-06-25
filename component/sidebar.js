import Link from 'next/link'
import styles from './sidebar.module.css'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Sidebar() {
  const {data:session,status} = useSession()
  // console.log(status)
  return (
  <nav className={styles.nav}>
    <input className={styles.input} placeholder="Search..." />
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/contact">
            <a>Contact</a>
        </Link>
        <Link href="/login">
            <a>Login</a>
        </Link>
        {!session && status !== "authenticated" &&(
            <Link href="/api/auth/signin">
                <a onClick={e => {
                    e.preventDefault()
                    signIn()
                    }}>Sign In</a>
            </Link>
        )}

        {session &&
        (<Link href="/api/auth/signout">
            <a onClick={e => {
                e.preventDefault()
                signOut()
                }}>Sign Out</a>
        </Link>)
      } 
    </nav>
  )
}