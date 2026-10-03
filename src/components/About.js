import React from "react";

function About() {

  return (
    <section id="about" className="section">

      <div className="section-container">

        <p className="section-label">
          ABOUT ME
        </p>

        <h2 className="section-title">
          Who I Am
        </h2>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I'm a COMPUTER SCIENCE WITH AI&ML developer
              who enjoys building websites, applications
              and experimenting with new technologies.
            </p>

            <p>
              I completed my Diploma in Computer Science
              and I'm continuing my journey in engineering
              and software development.
            </p>

            <p>
              I believe in learning by building real
              projects and continuously improving my
              programming skills.
            </p>

          </div>

          <div className="about-info">

            <div className="info-card education-card">
              <span>🎓</span>
              <div className="education-details">
                <div>
                  <strong>Education</strong>
                  <p>Computer Science Diploma</p>
                  <p>Completed at SDM Polytechnic, Ujire</p>
                  <p>2023 - 2025</p>
                </div>

                <div>
                  <strong>Engineering</strong>
                  <p>B.E. in Computer Science</p>
                  <p>2025 - Present</p>
                </div>
              </div>
            </div>

            <div className="info-card">
              <span>💻</span>
              <div>
                <strong>Focus</strong>
                <p>Web Development</p>
              </div>
            </div>

            <div className="info-card">
              <span>🚀</span>
              <div>
                <strong>Goal</strong>
                <p>Software Developer</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;