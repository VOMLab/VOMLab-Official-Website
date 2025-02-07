import Link from 'next/link';
import Header from './components/Header';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header/>
      <nav className={`
      // Desktop
      sm:text-2xl sm:flex sm:flex-1 sm:flex-col sm:h-full sm:m-3

      // Mobile
      flex flex-1 flex-col text-3xl
      `
      }>
        <section className={`
          // Desktop

          // Mobile
          flex-1
        `}></section>
        <section className={`
          // Desktop
          sm:flex sm:gap-32 sm:justify-start sm:items-end sm:w-full 

          // Mobile
          flex-1 grid grid-rows-3 m-3
          `}>
          <div>
            <Link href="/about">ABOUT</Link>
          </div>
          <div className={`

          // Mobile
          flex items-center
          `}>
            <Link href="/project">PROJECT</Link>
          </div>
          <div className={`
            // Mobile
            flex items-end
            `}>
            <Link href="/contact">CONTACT</Link>
          </div>
        </section>
      </nav>
    </main>
  );
}
