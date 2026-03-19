import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createContact, getContact, updateContact } from '../api';

function ContactForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    firstname: '', lastname: '', email: '', position: '', company: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      getContact(id)
        .then(res => setFormData({
          firstname: res.data.firstname || '',
          lastname: res.data.lastname || '',
          email: res.data.email || '',
          position: res.data.position || '',
          company: res.data.company || ''
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
        await updateContact(id, formData);
      } else {
        await createContact(formData);
      }
      navigate('/contacts');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="crud-page"><p className="loading">Loading...</p></div>;

  return (
    <div className="crud-page">
      <h1>{isEdit ? 'Edit Contact' : 'Add Contact'}</h1>
      {error && <p className="error-msg">{error}</p>}

      <form onSubmit={handleSubmit} className="crud-form">
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} required />
        </div>
        <div className="form-group form-group-full">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-save">Save</button>
          <button type="button" onClick={() => navigate('/contacts')} className="btn-cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
