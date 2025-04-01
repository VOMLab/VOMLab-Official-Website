"use client"

import { ProjectProps } from "@/lib/utils/projects";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const EachProject = ({description, id, thumbnailNames, videoUrl, image}: ProjectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const thumbNailImage = `${image}/img1.webp`;

    useEffect(() => {
        // 모바일 기기 감지
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }, []);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    }

    const handleMouseEnter = () => {
        if(videoRef.current && !isMobile)
        {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if(videoRef.current && !isMobile)
        {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return <section className="w-full">
        <div 
            className="h-52 relative overflow-hidden" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
        {isMobile ? (
                <img 
                    src={thumbNailImage} 
                    alt={thumbnailNames.join(' ')} 
                    className="w-full h-full object-cover"
                />
            ) : (
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={handleVideoLoaded}
                >
                    <source src={videoUrl} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            )}
        
        </div>
        {/* Desktop */}
        <div className={`hidden sm:flex sm:h-20 sm:flex-col`}>
            <div className={`h-full flex flex-col`}>
                <Link href={`/project/${id}`} className='text-md cursor-pointer transition-colors mt-3'>
                    {thumbnailNames.map((thumbnailName) => (
                        <p key={thumbnailName}>{thumbnailName}</p>
                    ))}
                </Link>
            </div>
        </div>

        {/* Mobile */}
        <div className={`${isOpen ? 'h-auto' : 'h-24'} ml-3 mb-2 mt-2 mr-3 flex flex-col sm:hidden`}>
            <div className={`${isOpen ? 'mt-2 mb-2' : 'h-full flex flex-col justify-center'}`}>
                <h2 className='text-md cursor-pointer transition-colors' onClick={() => setIsOpen(!isOpen)}>
                    {thumbnailNames.map((thumbnailName) => (
                        <p key={thumbnailName}>{thumbnailName}</p>
                    ))}
                </h2>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'} ease-in-out`}>{description}</div>
        </div>
    </section>
};

export default EachProject;