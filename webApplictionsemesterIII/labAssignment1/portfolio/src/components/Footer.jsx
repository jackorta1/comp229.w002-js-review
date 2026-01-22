/**
 * Footer Component
 * Displays copyright information and social links
 * @author Aboud Abdalla
 */
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          &copy; {currentYear} Aboud Abdalla. All rights reserved.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/aelzubair/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mraboodez@hotmail.com"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
