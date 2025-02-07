import Header from "../components/Header";
import Navigation from "../components/Navigation";
import EachProject from "../components/EachProject";
import ProjectsNavigation from "../components/ProjectsNavigation";
import { getProjects } from "@/lib/utils/projects";

const Project = async () => {
  const projects = await getProjects();

  return <main className="flex flex-col min-h-screen">
        <div className="sm:flex sm:items-center">
            <Header />
            <Navigation />
        </div>
        <ProjectsNavigation />
    <section className={`
      // Desktop
      sm:grid sm:grid-cols-3 gap-x-16 gap-y-5 sm:m-10

      // Mobile
      flex-1 mt-10
    `}>
        {projects.map((project) => (
            <EachProject key={project.id} {...project} image={Array.isArray(project.image) ? project.image : [project.image]} />
        ))}
    </section>
  </main>
};

export default Project;
