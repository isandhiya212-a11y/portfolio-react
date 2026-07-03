function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a responsive personal portfolio using React, HTML, CSS, and JavaScript.",
      tech: "React • CSS • JavaScript",
      github: "https://github.com/YOUR_GITHUB_USERNAME/portfolio-react",
      live: "https://YOUR_GITHUB_USERNAME.github.io/portfolio-react/"
    },
    {
      title: "Weather App",
      description:
        "Weather application that displays live weather information using an API.",
      tech: "React • API • CSS",
      github: "#",
      live: "#"
    },
    {
      title: "Todo App",
      description:
        "Task management application with Add, Edit, Delete and Complete features.",
      tech: "React • JavaScript",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <h4>{project.tech}</h4>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>

              <a href={project.live} target="_blank" rel="noreferrer">
                <button>Live Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;