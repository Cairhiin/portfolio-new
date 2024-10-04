import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const links = ["home", "resume", "skills", "projects", "contact"];
const Nav = ({ isSticky }: { isSticky: boolean }) => {
  const [active, setActive] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  return (
    <nav className={show ? "show" : "hide"}>
      {show ? (
        <FontAwesomeIcon
          icon={faClose}
          className="icon"
          onClick={() => setShow(false)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className="icon"
          onClick={() => setShow(true)}
        />
      )}
      {/* Normal Nav */}
      <motion.ul
        layout
        style={{
          gap: isSticky ? "1rem" : "2rem",
        }}
        className="nav-normal"
      >
        {links.map((link) => (
          <li key={link} className={active === link ? "active" : ""}>
            <a onClick={() => setActive(link)} href={`#${link}`}>
              {link}
            </a>
          </li>
        ))}
      </motion.ul>
      {/* Mobile Nav */}
      <ul className="nav-mobile">
        {links.map((link) => (
          <li key={link} className={active === link ? "active" : ""}>
            <a
              onClick={() => {
                setActive(link);
                setShow(false);
              }}
              href={`#${link}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
