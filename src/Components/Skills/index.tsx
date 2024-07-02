import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import CPP from "../../assets/images/cpp_logo.png";
import TS from "../../assets/images/typescript_logo.png";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import "./index.css";

const skillList = [
  {
    name: "HTML",
    icon: faHtml5,
  },
  {
    name: "CSS",
    icon: faCss3,
  },
  {
    name: "JavaScript",
    icon: faJs,
  },
  {
    name: "Vue",
    icon: faVuejs,
  },
  {
    name: "React",
    icon: faReact,
  },
  {
    name: "Laravel",
    icon: faLaravel,
  },
  {
    name: "PHP",
    icon: faPhp,
  },
  {
    name: "Sass",
    icon: faSass,
  },
  {
    name: "TypeScript",
    icon: TS,
  },
  {
    name: "C++",
    icon: CPP,
  },
];

const Skills = (): JSX.Element => {
  return (
    <section id="skills">
      <div>
        <h2 className="section-title">
          <span className="code-block">{"<"}</span>
          My Skills
          <span className="code-block">{" />"}</span>
        </h2>
        <div className="skills-container">
          {skillList.map((skill, idx) => (
            <Skill key={skill.name} {...skill} id={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Skill = ({
  id,
  name,
  icon,
}: {
  id: number;
  name: string;
  icon: FontAwesomeIconProps["icon"] | string;
}): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView: boolean = useInView(ref);

  return (
    <motion.div
      ref={ref}
      layout
      transition={{
        opacity: { ease: "ease-in-out" },
        layout: { duration: 0.5, type: "spring", stiffness: 100 },
      }}
      className="skill"
      style={{
        order: isInView ? `${id}` : `${id * -1}`,
      }}
    >
      <h4>{name}</h4>
      <div className="icon-container">
        {typeof icon !== "string" ? (
          <FontAwesomeIcon icon={icon} className="icon" />
        ) : (
          <img src={icon} alt={name} className="icon-image" />
        )}
      </div>
    </motion.div>
  );
};

export default Skills;
