import React from "react";

function Projects() {

  const projects = [
    {
      number: "01",
      title: "Personal Portfolio",
      description:
        "A modern responsive portfolio website built using React.",
      technologies:
        "React • JavaScript • CSS",
      github: "https://github.com/"
    },

    {
      number: "02",
      title: "Java Project",
      description:
        "A Java application created to practice programming and problem solving.",
      technologies:
        "Java",
      github: "https://github.com/"
    },

    {
      number: "03",
      title: "Web Application",
      description:
        "A responsive web application with a clean and simple user interface.",
      technologies:
        "HTML • CSS • JavaScript",
      github: "https://github.com/"
    }
  ];

  return (
    <section id="projects" className="section">

      <div className="section-container">

        <p className="section-label">
          MY WORK
        </p>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="projects-grid">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;