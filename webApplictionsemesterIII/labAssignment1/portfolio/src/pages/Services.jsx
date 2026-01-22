import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Application Development',
    description: 'Full-stack web apps using modern technologies. From responsive front-end to robust back-end systems.',
    features: ['Custom web apps', 'Responsive design', 'REST APIs', 'Database optimization', 'Cloud deployment'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences.',
    features: ['iOS & Android', 'Flutter & Swift', 'App Store optimization', 'Push notifications', 'Offline support'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
  },
  {
    title: 'Real Estate Software',
    description: 'Specialized solutions for real estate: property management, tenant tracking, and financial reporting.',
    features: ['Property management', 'Tenant tracking', 'Financial reporting', 'Marketing automation', 'Multi-language'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="1"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><path d="M9 22v-4h6v4"/></svg>
  },
  {
    title: 'IoT & Embedded Systems',
    description: 'IoT solutions using Raspberry Pi, ESP32, and other microcontrollers for real-world applications.',
    features: ['Raspberry Pi', 'ESP32', 'Sensor integration', 'WebRTC', 'Remote monitoring'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="6" width="12" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/></svg>
  }
];

function Services() {
  return (
    <div className="services">
      <h1>My Services</h1>
      <p className="services-intro">
        With over a decade of experience, I offer professional services to bring your ideas to life.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <article key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="services-cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss how I can help you achieve your goals.</p>
        <Link to="/contact" className="cta-button">Contact Me</Link>
      </section>
    </div>
  );
}

export default Services;
