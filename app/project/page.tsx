"use client"

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import EachProject from "../components/EachProject";
import ProjectsNavigation from "../components/ProjectsNavigation";
import { getProjects } from "@/lib/utils/projects";
import { useState, useEffect } from "react";
import { ProjectProps } from "@/lib/utils/projects";

const Project = () => {
  const [currentCategory, setCurrentCategory] = useState('전체');
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setProjects(projects);
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => {
    if (currentCategory === '전체') return true;
    return project.categoryNavigation.includes(currentCategory);
  });

  return <main className="flex flex-col min-h-screen">
        <div className="sm:flex sm:items-center">
            <Header />
            <Navigation />
        </div>
        <ProjectsNavigation currentCategory={currentCategory} onCategoryChange={setCurrentCategory} />
    <section className={`
      // Desktop
      sm:grid sm:grid-cols-3 gap-x-16 gap-y-5 sm:m-10

      // Mobile
      flex-1 mt-10
    `}>
        {filteredProjects.map((project) => (
            <EachProject key={project.id} {...project} />
        ))}
    </section>
  </main>
};

export default Project;
