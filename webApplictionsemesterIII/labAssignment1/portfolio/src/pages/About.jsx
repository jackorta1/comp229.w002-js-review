import ownerImage from '../assets/owner.png';

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>

      <section className="profile-section">
        <img src={ownerImage} alt="Aboud Abdalla" />
        <div>
          <h2>Aboud Abdalla</h2>
          <p className="title">Senior Software Engineer</p>
          <p>Markham, Ontario, Canada</p>
        </div>
      </section>

      <section>
        <h3>Who I Am</h3>
        <p>
          I am an experienced Senior Software Engineer with a strong focus on customer-centric
          solutions. With over a decade of experience in the software industry, I am dedicated to
          improving customer experience through innovative technology solutions.
        </p>
        <p style={{marginTop: '1rem'}}>
          My track record includes delivering functionally rich, robust, and user-friendly
          applications across multiple platforms.
        </p>
      </section>

      <section>
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages</h4>
            <ul>
              <li>JavaScript / Node.js</li>
              <li>VB.NET / C#</li>
              <li>C++ / C</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Technologies</h4>
            <ul>
              <li>React</li>
              <li>Flutter</li>
              <li>LAMP Stack</li>
              <li>MS SQL Server</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Specializations</h4>
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>IoT Systems</li>
              <li>Database Design</li>
              <li>Real Estate Software</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h3>My Resume</h3>
        <p>Download my complete resume to learn more about my experience.</p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-download">
          Download Resume (PDF)
        </a>
      </section>

      <section style={{textAlign: 'center'}}>
        <h3>Let's Connect</h3>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem'}}>
          <a href="https://www.linkedin.com/in/aelzubair/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          <a href="mailto:mraboodez@hotmail.com">mraboodez@hotmail.com</a>
        </div>
      </section>
    </div>
  );
}

export default About;
