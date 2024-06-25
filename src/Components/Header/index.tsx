import Nav from "../Nav";
import useSticky from "../../hooks/useSticky";
import "./index.css";

const Header = () => {
  const { ref, isSticky } = useSticky();

  return (
    <header ref={ref} className={`${isSticky ? "is-pinned" : ""}`}>
      <div id="header-container">
        <h1>
          <span className="code-block">{"<"}</span>Frank{" "}
          <span className="lower-text">van de</span> Voorde
          <span className="code-block">{" />"}</span>
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
