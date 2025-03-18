'use client'
import Link from 'next/link';
import Header from './components/Header';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 페이지가 마운트 될 때 로딩 상태 true로 초기화
    setIsLoading(true);

    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.log("Autoplay failed:", error);
      }
    };
    
    playVideo();
  }, []);

  return (
    <main className="min-h-screen flex flex-col relative">
      <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          preload="auto"
          playsInline 
          onLoadedData={() => setIsLoading(false)} 
          className={`fixed top-0 left-0 w-full h-full sm:h-[90%] object-cover overflow-hidden transition-opacity duration-700 -z-10 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
          <source src="/videos/video_main.webm" type="video/webm" />
        </video>
      <Header/>
      <nav className={`
      // Desktop
      sm:text-2xl sm:flex sm:flex-1 sm:flex-col sm:m-3 sm:justify-center

      // Mobile
      flex flex-1 flex-col text-3xl text-black
      `
      }>
        <section className={`
          // Desktop

          // Mobile
          flex-1
        `}></section>
        <section className={`
          // Desktop
          sm:flex sm:gap-32 sm:justify-start sm:items-end sm:w-full sm:text-black

          // Mobile
          flex-1 grid grid-rows-3 m-3 text-white
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
