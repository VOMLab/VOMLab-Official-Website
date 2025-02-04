import Header from "../components/Header";
import Navigation from "../components/Navigation";
import EachProject from "../components/EachProject";
import { getProjects } from "@/lib/utils/projects";

const Project = () => {
  const projects = getProjects();

  return <main className="flex flex-col h-screen">
    <Header/>
    <Navigation/>
    <section className="flex-1 mt-10">
        {projects.map((project) => (
            <EachProject key={project.id} {...project} />
        ))}
    </section>
  </main>
};

export default Project;
