import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { ProjectsData } from "../../data";
import "./index.css";

export default function ProjectCard({ project }: { project: ProjectsData }) {
  return (
    <div className="project-card">
      <div className="content">
        <div>
          <div className="header">
            <h3>{project.name}</h3>
            <FontAwesomeIcon icon={faArrowDown} className="icon" />
          </div>
          <ul className="tech">
            {project.tech.map((tech: string) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <p>{project.content}</p>
        </div>
        <div className="github">
          <a href={project.links} target="_blank">
            <button>
              <FontAwesomeIcon icon={faGithub} className="icon" /> Github
            </button>
          </a>
        </div>
      </div>
      <div className="image">
        <img src={project.img} alt={project.name} />
      </div>
    </div>
  );
}
