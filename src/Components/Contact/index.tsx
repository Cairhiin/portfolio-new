import ContactForm from "../ContactForm";
import "./index.css";

const Contact = (): JSX.Element => {
  return (
    <>
      <section id="contact">
        <div>
          <h2>
            <span className="code-block">{"<"}</span>
            Stronger Together
            <span className="code-block">{" />"}</span>
          </h2>
          <div className="contact-container">
            <div>
              <h3>Let's Talk!</h3>
              <p>
                I'm always open to new opportunities. If you have an interesting
                idea or project and want to collaborate, feel free to contact
                me.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
