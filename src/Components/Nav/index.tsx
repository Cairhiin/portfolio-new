import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

const links = ["Home", "Projects", "Skills", "Contact"];
const Nav = ({ isSticky }: { isSticky: boolean }) => {
  const [active, setActive] = useState<string>("");
  return (
    <nav>
      <motion.ul
        layout
        style={{
          gap: isSticky ? "1rem" : "2rem",
        }}
      >
        {links.map((link) => (
          <li key={link} className={active === link ? "active" : ""}>
            <a onClick={() => setActive(link)} href={`#${link}`}>
              {link}
            </a>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Nav;
