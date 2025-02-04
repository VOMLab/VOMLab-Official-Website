import Link from 'next/link';
import Header from './components/Header';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header/>
      <nav className="flex-1 flex flex-col text-3xl">
        <section className="flex-1"></section>
        <section className="flex-1 grid grid-rows-3 m-3">
          <div>
            <Link href="/about">ABOUT</Link>
          </div>
          <div className='flex items-center'>
            <Link href="/project">PROJECT</Link>
          </div>
          <div className='flex items-end'>
            <Link href="/contact">CONTACT</Link>
          </div>
        </section>
      </nav>
    </main>
  );
}
