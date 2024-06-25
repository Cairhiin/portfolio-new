import Nav from "../Nav";
import "./index.css";

const Header = () => {
  return (
    <header id="header">
      <h1>
        <span className="code-block">{"<"}</span>Frank{" "}
        <span className="lower-text">van de</span> Voorde
        <span className="code-block">{" />"}</span>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
