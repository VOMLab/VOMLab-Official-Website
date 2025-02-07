"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={`
      // Desktop
      sm:flex sm:justify-start ${pathname === "/" ? 'sm:w-full' : 'sm:w-min'} 

      // Mobile
      flex justify-end w-full
      `}
    >
      <Link href="/">
        <h1 className={`
        // Desktop
        ${pathname === "/" ? 'sm:text-[18rem] sm:-mt-16' : 'sm:text-[2rem] sm:m-5'} 

        // Mobile
        text-mobile-title leading-none -mt-3 font-extralight
        `}>VOMLab</h1> 
      </Link>
    </header>
  );
};

export default Header;
