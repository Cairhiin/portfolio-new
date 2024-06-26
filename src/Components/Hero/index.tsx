import "./index.css";

const HeroSection = (): JSX.Element => {
  return (
    <>
      <section id="hero">
        <div>
          <h1>
            <span className="code-block">{"<"}</span>Frank{" "}
            <span className="lower-text">van de</span> Voorde
            <span className="code-block">{" />"}</span>
          </h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
