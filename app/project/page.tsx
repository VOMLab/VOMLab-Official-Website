"use client"

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import EachProject from "../components/EachProject";
import ProjectsNavigation from "../components/ProjectsNavigation";
import { getProjects } from "@/lib/utils/projects";
import { useState, useEffect } from "react";
import { ProjectProps } from "@/lib/utils/projects";
import ProjectFooter from "../components/ProjectFooter";
import { useIsDesktop } from "../hooks/useMediaQuery";


const Project = () => {
  const isDesktop = useIsDesktop();
  const [currentCategory, setCurrentCategory] = useState('전체');
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 12;

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

  // 데스크톱에서만 페이지네이션 적용
    const displayProjects = isDesktop
    ? filteredProjects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage)
    : filteredProjects;

  return <main className="flex flex-col min-h-screen">
        <div className="sm:flex sm:items-center">
            <Header />
            <Navigation />
        </div>
        <ProjectsNavigation currentCategory={currentCategory} onCategoryChange={(category) => {
          setCurrentCategory(category);
          setCurrentPage(1);
        }} />
    <section className={`
      // Desktop
      sm:grid sm:grid-cols-4 gap-x-16 gap-y-5 sm:m-10 

      // Mobile
      flex-1 mt-10
    `}>
        {displayProjects.map((project) => (
            <EachProject key={project.id} {...project} />
        ))}
    </section>
    <ProjectFooter
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalItems={filteredProjects.length}
      itemsPerPage={projectsPerPage}
    />

  </main>
};

export default Project;
