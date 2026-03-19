import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createService, getService, updateService } from '../api';

function ServiceForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    title: '', description: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      getService(id)
        .then(res => setFormData({
          title: res.data.title || '',
          description: res.data.description || ''
        }))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isEdit) {
        await updateService(id, formData);
      } else {
        await createService(formData);
      }
      navigate('/services');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="crud-page"><p className="loading">Loading...</p></div>;

  return (
    <div className="crud-page">
      <h1>{isEdit ? 'Edit Service' : 'Add Service'}</h1>
      {error && <p className="error-msg">{error}</p>}

      <form onSubmit={handleSubmit} className="crud-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group form-group-full">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows="5" />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-save">Save</button>
          <button type="button" onClick={() => navigate('/services')} className="btn-cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ServiceForm;
