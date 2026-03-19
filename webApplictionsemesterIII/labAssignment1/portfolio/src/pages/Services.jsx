import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServices, deleteService } from '../api';

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await getServices();
      setServices(res.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchServices(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;
    try {
      await deleteService(id);
      setServices(services.filter(s => s._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="crud-page"><p className="loading">Loading services...</p></div>;

  return (
    <div className="crud-page">
      <div className="crud-header">
        <h1>Services</h1>
        <Link to="/services/add" className="btn-add">+ Add Service</Link>
      </div>

      {error && <p className="error-msg">{error}</p>}

      {services.length === 0 ? (
        <p className="empty-msg">No services found. Add one to get started.</p>
      ) : (
        <div className="crud-cards">
          {services.map(service => (
            <article key={service._id} className="crud-card">
              <div className="crud-card-body">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <div className="crud-card-actions">
                <Link to={`/services/edit/${service._id}`} className="btn-edit">Edit</Link>
                <button onClick={() => handleDelete(service._id)} className="btn-delete">Delete</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Services;
