import React from "react";

function Certificates() {

  const certificates = [
    {
      title: "Java Programming",
      organization: "Add your organization",
      year: "2026"
    },
    {
      title: "Web Development",
      organization: "Add your organization",
      year: "2026"
    },
    {
      title: "Add Your Certificate",
      organization: "Add your organization",
      year: "2026"
    }
  ];

  return (
    <section
      id="certificates"
      className="section"
    >

      <div className="section-container">

        <p className="section-label">
          CERTIFICATES
        </p>

        <h2 className="section-title">
          Certifications
        </h2>

        <div className="certificate-grid">

          {certificates.map((certificate) => (

            <div
              className="certificate-card"
              key={certificate.title}
            >

              <div className="certificate-icon">
                🏆
              </div>

              <div>

                <h3>
                  {certificate.title}
                </h3>

                <p>
                  {certificate.organization}
                </p>

                <span>
                  {certificate.year}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certificates;