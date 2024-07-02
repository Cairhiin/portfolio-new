import { useRef } from "react";
import { useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton";
import { ProjectsData } from "../../data";
import "./index.css";

const ProjectCard = ({ project }: { project: ProjectsData }): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView: boolean = useInView(ref);

  const handleClick = (): void => {
    window.open(project.links);
  };

  return (
    <div
      className="project-card"
      ref={ref}
      style={{
        transform: isInView ? "translatey(50px)" : "none",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="content">
        <div>
          <div className="header">
            <h3>{project.name}</h3>
            <FontAwesomeIcon icon={faArrowDown} className="icon" />
          </div>
          <p>{project.content}</p>
          <ul className="tech">
            {project.tech.map((tech: string) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="github">
          <a href={project.links} target="_blank">
            <IconButton
              handleClick={() => {
                handleClick;
              }}
              icon={faGithub}
            >
              Github
            </IconButton>
          </a>
        </div>
      </div>
      <div className="image">
        <img src={project.img} alt={project.name} />
      </div>
    </div>
  );
};

export default ProjectCard;
