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
            I am an experienced full-stack web developer with a degree in
            International Business who occasionally also designs websites.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
