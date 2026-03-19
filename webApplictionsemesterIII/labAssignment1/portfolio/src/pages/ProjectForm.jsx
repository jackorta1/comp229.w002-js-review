import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createProject, getProject, updateProject } from '../api';

function ProjectForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    title: '', description: '', completion: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      getProject(id)
        .then(res => setFormData({
          title: res.data.title || '',
          description: res.data.description || '',
          completion: res.data.completion ? res.data.completion.substring(0, 10) : ''
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
        await updateProject(id, formData);
      } else {
        await createProject(formData);
      }
      navigate('/projects');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="crud-page"><p className="loading">Loading...</p></div>;

  return (
    <div className="crud-page">
      <h1>{isEdit ? 'Edit Project' : 'Add Project'}</h1>
      {error && <p className="error-msg">{error}</p>}

      <form onSubmit={handleSubmit} className="crud-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="completion">Completion Date</label>
          <input type="date" id="completion" name="completion" value={formData.completion} onChange={handleChange} />
        </div>
        <div className="form-group form-group-full">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows="5" />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-save">Save</button>
          <button type="button" onClick={() => navigate('/projects')} className="btn-cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
