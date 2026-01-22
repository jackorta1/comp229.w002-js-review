/**
 * Navbar Component
 * Displays the navigation bar with a custom hexagon logo and links to all pages
 * @author Aboud Abdalla
 */
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

// Custom hexagon logo component with initials "AA"
const Logo = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    className="logo"
  >
    {/* Hexagon shape */}
    <polygon
      points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
      fill="#3498db"
      stroke="#2980b9"
      strokeWidth="3"
    />
    {/* Initials AA */}
    <text
      x="50"
      y="58"
      textAnchor="middle"
      fill="white"
      fontSize="28"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      AA
    </text>
  </svg>
);

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and brand name */}
        <Link to="/" className="navbar-brand">
          <Logo />
          <span className="brand-name">Aboud Abdalla</span>
        </Link>

        {/* Navigation links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
