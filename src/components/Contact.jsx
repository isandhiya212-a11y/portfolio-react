function Contact() {
  return (
    <section
      id="contact"
      className="contact"
      data-aos="flip-up"
    >

      <h2>Contact Me</h2>

      <p>
        Feel free to contact me for internships and job opportunities.
      </p>

      <div className="contact-info">

        <div className="contact-card">
          <h3>Email</h3>
          <p>isandhiya212@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/sandhiya-i-6a4988406"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn
          </a>

        </div>

        <div className="contact-card">
          <h3>GitHub</h3>

          <a
            href="https://github.com/isandhiya212-a11y"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;