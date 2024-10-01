import { resumeData } from "../../data";
import "./index.css";

const Resume = (): JSX.Element => {
  return (
    <section id="resume">
      <div>
        <h2>
          <span className="code-block">{"<"}</span>
          Stronger Together
          <span className="code-block">{" />"}</span>
        </h2>
        <div className="resume-container">
          <ul className="rb">
            {resumeData.map((item) => (
              <li className="rb-item" ng-repeat="itembx" key={item.id}>
                <div className="timestamp">{item.date}</div>
                <div className="item-title">{item.title}</div>
                <div className="item-location">{item.location}</div>
                <div className="item-description">{item.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
