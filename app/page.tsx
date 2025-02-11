'use client'
import Link from 'next/link';
import Header from './components/Header';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen flex flex-col">
      <div className='absolute inset-0 bg-black transition-opacity duration-700 -z-10' style={{opacity: isLoading ? 'opacity-100' : 'opacity-0'}}>
        <video autoPlay muted loop playsInline onLoadedData={() => setIsLoading(false)} className={`absolute inset-0 w-full h-full object-cover scale-[1.1] transition-opacity duration-700 -z-10 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <source src="/videos/video_main.webm" type="video/webm" />
        </video>
      </div>
      <Header/>
      <nav className={`
      // Desktop
      sm:text-2xl sm:flex sm:flex-1 sm:flex-col sm:h-full sm:m-3

      // Mobile
      flex flex-1 flex-col text-3xl text-white
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
