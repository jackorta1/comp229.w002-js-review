/**
 * Contact Page Component
 * Displays contact information and an interactive form
 * Form captures user input and redirects to Home page on submit
 * @author Aboud Abdalla
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const navigate = useNavigate();

  // Form state to capture user input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data (in a real app, this would send to a server)
    console.log('Form submitted:', formData);
    // Redirect to home page after submission
    navigate('/');
  };

  return (
    <div className="contact">
      <div className="contact-container">
        {/* Header */}
        <h1>Contact Me</h1>
        <p className="contact-intro">
          Have a project in mind or want to discuss how I can help? Feel free to reach out!
        </p>

        <div className="contact-content">
          {/* Contact Information Panel */}
          <section className="contact-info">
            <h2>Get In Touch</h2>

            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="info-content">
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/aelzubair/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/aelzubair
                </a>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="contact-form-section">
            <h2>Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              {/* First Name */}
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                />
              </div>

              {/* Last Name */}
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone">Contact Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div className="form-group form-group-full">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <div className="form-group form-group-full">
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
