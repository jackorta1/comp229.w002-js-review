import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createContact } from '../api';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '', lastname: '', email: '', position: '', company: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await createContact(formData);
      setSuccess('Message sent successfully!');
      setFormData({ firstname: '', lastname: '', email: '', position: '', company: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p className="contact-intro">Have a project in mind? Feel free to reach out!</p>

      <div className="contact-content">
        <section className="contact-info">
          <h2>Get In Touch</h2>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <a href="mailto:mraboodez@hotmail.com">mraboodez@hotmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <a href="tel:+14372624025">(437) 262-4025</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="info-content">
              <h3>Location</h3>
              <p>Markham, Ontario, Canada</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div className="info-content">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/aelzubair/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/aelzubair
              </a>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <h2>Send Me a Message</h2>
          {error && <p className="error-msg">{error}</p>}
          {success && <p className="success-msg">{success}</p>}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="firstname">First Name *</label>
              <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required placeholder="Your first name"/>
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name *</label>
              <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required placeholder="Your last name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your email"/>
            </div>
            <div className="form-group">
              <label htmlFor="position">Position *</label>
              <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} required placeholder="Your position"/>
            </div>
            <div className="form-group form-group-full">
              <label htmlFor="company">Company *</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="Your company"/>
            </div>
            <div className="form-group form-group-full">
              <button type="submit" className="submit-button">Send Message</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;
