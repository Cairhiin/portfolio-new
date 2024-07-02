import ContactForm from "../ContactForm";
import "./index.css";

const Contact = (): JSX.Element => {
  return (
    <>
      <section id="contact">
        <div>
          <h2>
            <span className="code-block">{"<"}</span>
            Contact
            <span className="code-block">{" />"}</span>
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
