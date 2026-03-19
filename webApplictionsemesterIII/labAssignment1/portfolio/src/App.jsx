import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectForm from './pages/ProjectForm';
import Services from './pages/Services';
import ServiceForm from './pages/ServiceForm';
import Contact from './pages/Contact';
import Contacts from './pages/Contacts';
import ContactForm from './pages/ContactForm';
import Users from './pages/Users';
import UserForm from './pages/UserForm';
import './App.css';

// Logo component
function Logo() {
  return (
    <svg width="50" height="50" viewBox="0 0 100 100">
      <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="#3498db" stroke="#2980b9" strokeWidth="3"/>
      <text x="50" y="58" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="Arial">AA</text>
    </svg>
  );
}

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            <Logo />
            <span className="brand-name">Aboud Abdalla</span>
          </Link>
          <ul className="nav-links">
            <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} end>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About Me</NavLink></li>
            <li><NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink></li>
            <li><NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
            <li><NavLink to="/contacts" className={({isActive}) => isActive ? 'active' : ''}>Contacts</NavLink></li>
            <li><NavLink to="/users" className={({isActive}) => isActive ? 'active' : ''}>Users</NavLink></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/add" element={<ProjectForm />} />
          <Route path="/projects/edit/:id" element={<ProjectForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/add" element={<ServiceForm />} />
          <Route path="/services/edit/:id" element={<ServiceForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/add" element={<ContactForm />} />
          <Route path="/contacts/edit/:id" element={<ContactForm />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<UserForm />} />
          <Route path="/users/edit/:id" element={<UserForm />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Aboud Abdalla. All rights reserved.</p>
          <div>
            <a href="https://www.linkedin.com/in/aelzubair/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:mraboodez@hotmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
