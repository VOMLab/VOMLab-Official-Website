import projects from "@/data/projects.json";

export interface ProjectProps {
    id: number;
    name: string;
    thumbnailNames: string[];
    description: string;
    image: string;
    date: string;
    categoryNavigation: string;
    details: {
        projectYear: string;
        client: string;
        place: string;
        Category: string;
        Work: string;
    }
    mainVideoLink?: string;
    videoUrl?: string; 
}

export const getProjects = async () => {
    return projects;
}

export async function getProjectById(id:number) {
    const projects = await getProjects();
    return projects.find((project) => project.id === id);
}
