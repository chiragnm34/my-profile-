import React from "react";

function Contact() {

  return (
    <section
      id="contact"
      className="section contact-section section-dark"
    >

      <div className="section-container">

        <p className="section-label">
          CONTACT
        </p>

        <h2 className="section-title">
          Let's Connect
        </h2>

        <p className="contact-description">
          If you have a project idea, collaboration
          opportunity, or simply want to connect,
          feel free to reach out.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="btn primary-btn"
        >
          Email Me
        </a>

        <div className="contact-links">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:your-email@example.com"
          >
            Email
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;