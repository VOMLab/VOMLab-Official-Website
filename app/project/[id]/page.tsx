import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { getProjectById } from "../../../lib/utils/projects";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default async function ProjectPage({
    params,
} : {
    params: Promise<{id: string}>;
}) {
    const {id} = await params;
    const project = await getProjectById(Number(id));

    const imagePath = path.join(process.cwd(), 'public', project?.image || '');
    const images = fs.readdirSync(imagePath)
    .filter(file => file.endsWith('.webp'))

    return <main className="flex flex-col min-h-screen">
        <div className="h-80"></div>
        <div className="sm:flex sm:flex-col sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:z-10 sm:items-center bg-overlay">
            <div className="w-full flex items-center">
                <Header />
                <Navigation />
            </div>
            {/* Project Header */}
            <div className='w-full h-64 bg-black flex flex-col justify-end items-end pb-3 pr-10'>
                <h1 className='text-lg text-white'>{project?.name}</h1>
                <h2 className='text-lg text-white'>{project?.date}</h2>
            </div>
        </div>
        <section className='grid grid-cols-3 gap-10 p-10'>
            {/* Project Content */}
            <div className=' bg-black h-42 relative aspect-video'>
                {project?.mainVideoLink && (
                    <iframe
                    className="w-full h-full"
                    src={project?.mainVideoLink}
                    title="Main Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                )}
            </div>
            <p className='text-md text-white'>{project?.description}</p>
            <div className="text-white">
                <div className='flex gap-2'>
                    <p>Project Year</p>
                    <p>|</p>
                    <p>{project?.details?.projectYear}</p>
                </div>
                <div className='flex gap-2'>
                    <p>Client</p>
                    <p>|</p>
                    <p>{project?.details?.client}</p>
                </div>
                <div className='flex gap-2'>
                    <p>Place</p>
                    <p>|</p>
                    <p>{project?.details?.place}</p>
                </div>
                <div className='flex gap-2'>
                    <p>Category</p>
                    <p>|</p>
                    <p>{project?.details?.Category}</p>
                </div>
                <div className='flex gap-2'>
                    <p>Work</p>
                    <p>|</p>
                    <p>{project?.details?.Work}</p>
                </div>
            </div>
        </section>
        <section className='grid grid-cols-3 gap-12 p-10 text-white'>
            {/* Project Images */}
            {images.map((image, index) => {
                const imagePath = encodeURI(`${project?.image}${image}`);
                return (
                    <div key={index} className='sm:h-48 relative'>
                        <Image
                        src={imagePath}
                        alt={`Project Image`}
                        fill
                        className="object-cover"
                        />
                    </div>
                )
            })}
        </section>
    </main>
}