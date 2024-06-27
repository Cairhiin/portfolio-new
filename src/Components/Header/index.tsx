import Nav from "../Nav";
import useSticky from "../../hooks/useSticky";
import "./index.css";

const Header = () => {
  const { ref, isSticky } = useSticky();

  return (
    <header ref={ref} className={`${isSticky ? "is-pinned" : ""}`}>
      <div id="header-container">
        <Nav isSticky={isSticky} />
      </div>
    </header>
  );
};

export default Header;
