import React from "react";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.2-.02-2.18-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.08 11.08 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.68.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.7h2.9v8.8H5.5V9.7Zm5.1 0h2.77v1.2h.04c.39-.73 1.33-1.5 2.73-1.5 2.92 0 3.46 1.92 3.46 4.41v6.69h-2.9v-6.26c0-1.49-.03-3.41-2.08-3.41-2.09 0-2.41 1.63-2.41 3.3v6.37h-2.9V9.7Z" fill="currentColor" />
    </svg>
  );
}

function Hero() {

  return (
    <section id="home" className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Chirag <span>N M</span>
          </h1>

          <h2>
            Computer Science Engineer & Developer
          </h2>

          <p className="hero-description">
            I create modern, responsive and user-friendly
            websites and applications. I enjoy learning
            new technologies and turning ideas into real
            projects.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary-btn"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn secondary-btn"
            >
              Contact Me
            </a>

          </div>

        </div>

        <div className="hero-image-container">

          <div className="hero-image-ring">

            <img
              src="/profile.jpg"
              alt="Chirag N M"
              className="profile-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
