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
      flex justify-end w-full text-white
      `}
    >
      <Link href="/">
        <h1 className={`
        // Desktop
        ${pathname === "/" ? 'sm:text-[24rem] sm:-mt-16 sm:text-white' : 'sm:text-[2rem] sm:m-5 sm:text-black'} 

        // Mobile
        text-mobile-title leading-none -mt-3 font-extralight ${pathname === "/" ? 'text-white' : 'text-black'}
        `}>VOMLab</h1> 
      </Link>
    </header>
  );
};

export default Header;
