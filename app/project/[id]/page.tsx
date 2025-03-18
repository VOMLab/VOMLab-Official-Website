import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { getProjectById } from "../../../lib/utils/projects";
import Image from "next/image";

export default async function ProjectPage({
    params,
} : {
    params: Promise<{id: string}>;
}) {
    const {id} = await params;
    const project = await getProjectById(Number(id));
    const imageCount = project?.imageCount || 0;
    const images = Array.from({length: imageCount}, (_, i) => 
        `${project?.image || '/'}img${i+1}.webp`
    );

    return <main className="flex flex-col min-h-screen">
        <div className="h-32"></div>
        <div className="sm:flex sm:flex-col sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:z-10 sm:items-center bg-overlay">
            <div className="w-full flex items-center">
                <Header />
                <Navigation />
            </div>
            {/* Project Header */}
            <div className='w-full h-12 bg-black flex flex-col justify-end items-end pb-3 pr-10'>
                <h1 className='text-lg text-white'>{project?.name}</h1>
            </div>
        </div>
        <section className='grid grid-cols-3 gap-10 p-10'>
            {/* Project Content */}
            {project?.mainVideoLink && (
                <div className=' bg-black h-42 relative aspect-video'>
                    <iframe
                    className="w-full h-full"
                    src={project?.mainVideoLink}
                    title="Main Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            )}
            <p className='text-md text-white'>{project?.description}</p>
            <div className="text-white">
                <div className='flex gap-2'>
                    <p className='font-bold'>Project Year</p>
                    <p>|</p>
                    <p>{project?.details?.projectYear}</p>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Client</p>
                    <p>|</p>
                    <p>{project?.details?.client}</p>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Place</p>
                    <p>|</p>
                    <p>{project?.details?.place}</p>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Category</p>
                    <p>|</p>
                    <p>{project?.details?.Category}</p>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Work</p>
                    <p>|</p>
                    <p>{project?.details?.Work}</p>
                </div>
            </div>
        </section>
        <section className='grid grid-cols-3 gap-12 p-10 text-white'>
            {/* Project Images */}
            {images.map((imagePath, index) => {
                return (
                    <div key={index} className='sm:aspect-video relative'>
                        <Image
                        src={imagePath}
                        alt={`Project Image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        />
                    </div>
                )
            })}
        </section>
    </main>
}