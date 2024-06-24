import { useState } from "react";
import "./index.css";

const links = ["Home", "Projects", "Skills", "Contact"];
const Nav = () => {
  const [active, setActive] = useState<string>("");
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link} className={active === link ? "active" : ""}>
            <a onClick={() => setActive(link)} href={`#${link}`}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
