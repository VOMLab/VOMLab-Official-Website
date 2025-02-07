"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className={`
      // Desktop
      sm:mt-0 sm:flex sm:gap-24

      // Mobile
      grid grid-cols-4 text-xl mt-4 text-center
      `}
    >
      <div></div>
      <Link href="/about" className={pathname === "/about" ? "text-accent" : ""}>ABOUT</Link>
      <Link href="/project" className={pathname === "/project" || pathname.includes("/project/") ? "text-accent" : ""}>PROJECT</Link>
      <Link href="/contact" className={pathname === "/contact" ? "text-accent" : ""}>CONTACT</Link>
    </nav>
  )
}

export default Navigation;