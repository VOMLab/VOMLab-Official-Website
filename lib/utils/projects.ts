import projects from "@/data/projects.json";

export interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    date: string;
}

export const getProjects = (): Project[] => {
    return projects;
}
