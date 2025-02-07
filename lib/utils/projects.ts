import projects from "@/data/projects.json";

export interface Project {
    id: number;
    name: string;
    description: string;
    image: string[];
    date: string;
}

export const getProjects = async () => {
    return projects;
}

export async function getProjectById(id:number) {
    const projects = await getProjects();
    return projects.find((project) => project.id === id);
}
