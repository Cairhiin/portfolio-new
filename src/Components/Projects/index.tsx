import "./index.css";
import { projectsData, ProjectsData } from "../../data";
import ProjectCard from "../ProjectCard";

const Projects = (): JSX.Element => {
  return (
    <>
      <section id="projects">
        <div>
          <h2>
            <span className="code-block">{"<"}</span>
            My Work & Projects
            <span className="code-block">{" />"}</span>
          </h2>
          <div className="project-cards">
            {projectsData.map(
              (project: ProjectsData): JSX.Element => (
                <ProjectCard key={project.id} project={project} />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
