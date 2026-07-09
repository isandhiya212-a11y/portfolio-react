function Projects() {

  const projectList = [

    {
      title: "Portfolio Website",

      description:
        "Designed and developed a responsive personal portfolio using React, HTML, CSS and JavaScript.",

      tech: "React • CSS • JavaScript",

      github:
        "https://github.com/isandhiya212-a11y/portfolio-react",

      live:
        "https://YOUR-VERCEL-URL.vercel.app"
    },

    {
      title: "Weather App",

      description:
        "Weather application that displays live weather information using Weather API.",

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
    <section
      id="projects"
      className="projects"
      data-aos="fade-left"
    >

      <h2>My Projects</h2>

      <div className="project-container">

        {projectList.map((project, index) => (

          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <h4>{project.tech}</h4>

            <div className="project-buttons">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
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