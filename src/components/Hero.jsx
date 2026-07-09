function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      data-aos="fade-up"
    >
      <h1>
        Hello, I'm <br />
        <span>Sandhiya 👋</span>
      </h1>

      <h2>Frontend Developer | React Developer</h2>

      <p>
        I build responsive and user-friendly web applications using React,
        JavaScript, HTML, CSS, and modern web technologies.
      </p>

      <a href="/resume.pdf" download>
        <button>Download Resume</button>
      </a>
    </section>
  );
}

export default Hero;