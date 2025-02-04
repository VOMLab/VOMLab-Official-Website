import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-end w-full">
       <Link href="/">
        <h1 className="sm:text-4xl text-9xl font-extralight">VOMLaB</h1> 
       </Link>
    </header>
  );
};

export default Header;
