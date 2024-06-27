import { useRef } from "react";
import { useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton";
import { ProjectsData } from "../../data";
import "./index.css";

export default function ProjectCard({ project }: { project: ProjectsData }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleClick = () => {
    window.open(project.links);
  };

  return (
    <div
      className="project-card"
      ref={ref}
      style={{
        transform: isInView ? "translatey(50px)" : "none",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
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
}
