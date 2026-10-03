import React from "react";

function Education() {

  return (
    <section
      id="education"
      className="section section-dark"
    >

      <div className="section-container">

        <p className="section-label">
          EDUCATION
        </p>

        <h2 className="section-title">
          My Education
        </h2>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span>
                2026 - Present
              </span>

              <h3>
                Engineering — Computer Science
              </h3>

              <p>
                Currently pursuing engineering in
                Computer Science.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span>
                Completed
              </span>

              <h3>
                Diploma — Computer Science
              </h3>

              <p>
                Completed Diploma studies in
                Computer Science.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;