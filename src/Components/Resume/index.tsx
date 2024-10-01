import { resumeData } from "../../data";
import "./index.css";

const Resume = (): JSX.Element => {
  return (
    <section id="resume">
      <div>
        <h2>
          <span className="code-block">{"<"}</span>
          Work Experience
          <span className="code-block">{" />"}</span>
        </h2>
        <div className="resume-container">
          <ul className="resume-timeline">
            {resumeData.map((item) => (
              <li
                className="resume-timeline-item"
                ng-repeat="itembx"
                key={item.id}
              >
                <div className="timestamp">{item.date}</div>
                <div className="item-title">
                  {item.title}
                  <span className="item-location">({item.location})</span>
                </div>
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
