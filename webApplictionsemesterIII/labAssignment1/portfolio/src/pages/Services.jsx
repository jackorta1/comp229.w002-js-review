/**
 * Services Page Component
 * Displays the services offered with unique horizontal layout
 * @author Aboud Abdalla
 */
import { Link } from 'react-router-dom';
import './Services.css';

// Services data with icons represented as SVG
const servicesData = [
  {
    id: 1,
    title: 'Web Application Development',
    description: `Full-stack web application development using modern technologies and frameworks.
      From responsive front-end interfaces to robust back-end systems, I deliver scalable
      solutions that meet your business needs.`,
    features: [
      'Custom web applications',
      'Responsive design',
      'REST API development',
      'Database optimization',
      'Cloud deployment',
    ],
    icon: 'web',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: `Native and cross-platform mobile application development for iOS and Android.
      Creating engaging, user-friendly apps that provide seamless experiences across all devices.`,
    features: [
      'iOS & Android',
      'Flutter & Swift',
      'App Store optimization',
      'Push notifications',
      'Offline support',
    ],
    icon: 'mobile',
  },
  {
    id: 3,
    title: 'Real Estate Software Solutions',
    description: `Specialized software solutions for the real estate industry. Property management
      systems, tenant tracking, financial reporting, and marketing automation tailored
      for real estate professionals.`,
    features: [
      'Property management',
      'Tenant tracking',
      'Financial reporting',
      'Marketing automation',
      'Multi-language',
    ],
    icon: 'building',
  },
  {
    id: 4,
    title: 'IoT & Embedded Systems',
    description: `Internet of Things solutions using Raspberry Pi, ESP32, and other microcontrollers.
      From concept to deployment, I build connected devices that solve real-world problems.`,
    features: [
      'Raspberry Pi',
      'ESP32',
      'Sensor integration',
      'WebRTC',
      'Remote monitoring',
    ],
    icon: 'iot',
  },
];

// Icon components
const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <line x1="9" y1="6" x2="9" y2="6.01" />
    <line x1="15" y1="6" x2="15" y2="6.01" />
    <line x1="9" y1="10" x2="9" y2="10.01" />
    <line x1="15" y1="10" x2="15" y2="10.01" />
    <line x1="9" y1="14" x2="9" y2="14.01" />
    <line x1="15" y1="14" x2="15" y2="14.01" />
    <path d="M9 22v-4h6v4" />
  </svg>
);

const IotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
  </svg>
);

// Map icon names to components
const iconMap = {
  web: WebIcon,
  mobile: MobileIcon,
  building: BuildingIcon,
  iot: IotIcon,
};

function Services() {
  return (
    <div className="services">
      <div className="services-container">
        {/* Header */}
        <h1>My Services</h1>
        <p className="services-intro">
          With over a decade of experience in software development, I offer a range of
          professional services to help bring your ideas to life.
        </p>

        {/* Services List - Horizontal Cards */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <article key={service.id} className="service-card">
                {/* Icon */}
                <div className="service-icon">
                  <IconComponent />
                </div>

                {/* Content */}
                <div className="service-content">
                  {/* Title */}
                  <h2>{service.title}</h2>

                  {/* Description */}
                  <p className="service-description">{service.description}</p>

                  {/* Features as Tags */}
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to Action */}
        <section className="services-cta">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let's discuss how I can help you achieve your goals. Get in touch today
            for a consultation.
          </p>
          <Link to="/contact" className="cta-button">
            Contact Me
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Services;
