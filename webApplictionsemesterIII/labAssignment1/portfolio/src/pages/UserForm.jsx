import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createUser, getUser, updateUser } from '../api';

function UserForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    firstname: '', lastname: '', email: '', password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      getUser(id)
        .then(res => setFormData({
          firstname: res.data.firstname || '',
          lastname: res.data.lastname || '',
          email: res.data.email || '',
          password: ''
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
        const updateData = { ...formData };
        if (!updateData.password) delete updateData.password;
        await updateUser(id, updateData);
      } else {
        await createUser(formData);
      }
      navigate('/users');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="crud-page"><p className="loading">Loading...</p></div>;

  return (
    <div className="crud-page">
      <h1>{isEdit ? 'Edit User' : 'Add User'}</h1>
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
          <label htmlFor="password">{isEdit ? 'Password (leave blank to keep current)' : 'Password'}</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} {...(!isEdit && { required: true })} />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-save">Save</button>
          <button type="button" onClick={() => navigate('/users')} className="btn-cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
