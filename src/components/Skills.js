import React from "react";

function Skills() {

  const skills = [
    {
      name: "Java",
      icon: "☕"
    },
    {
      name: "HTML",
      icon: "🌐"
    },
    {
      name: "CSS",
      icon: "🎨"
    },
    {
      name: "JavaScript",
      icon: "⚡"
    },
    {
      name: "React",
      icon: "⚛️"
    },
    {
      name: "SQL",
      icon: "🗄️"
    },
    {
      name: "Git",
      icon: "🔧"
    },
    {
      name: "GitHub",
      icon: "🐙"
    }
  ];

  return (
    <section
      id="skills"
      className="section section-dark"
    >

      <div className="section-container">

        <p className="section-label">
          MY SKILLS
        </p>

        <h2 className="section-title">
          Technologies I Use
        </h2>

        <div className="skills-grid">

          {skills.map((skill) => (

            <div
              className="skill-card"
              key={skill.name}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>
                {skill.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;