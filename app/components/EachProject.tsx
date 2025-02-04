"use client"

import { Project } from "@/lib/utils/projects";
import { useState } from "react";

const EachProject = ({name, description, date}: Project) => {
    const [isOpen, setIsOpen] = useState(false);

    return <section className="w-full">
        <div className="h-52 bg-black">
        </div>
        <div className={`${isOpen ? 'h-auto' : 'h-24'} ml-3 mb-5 mr-3 flex flex-col`}>
            <div className={`${isOpen ? 'mt-4 mb-5' : 'h-full flex flex-col justify-center'}`}>
                <h2 className='text-4xl cursor-pointer transition-colors' onClick={() => setIsOpen(!isOpen)}>{name}</h2>
                <p className='text-sm mt-2'>{date}</p>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'} ease-in-out`}>{description}</div>
        </div>
    </section>
};

export default EachProject;