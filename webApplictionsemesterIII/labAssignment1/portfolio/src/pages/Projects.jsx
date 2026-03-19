import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects, deleteProject } from '../api';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await getProjects();
      setProjects(res.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await deleteProject(id);
      setProjects(projects.filter(p => p._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="crud-page"><p className="loading">Loading projects...</p></div>;

  return (
    <div className="crud-page">
      <div className="crud-header">
        <h1>Projects</h1>
        <Link to="/projects/add" className="btn-add">+ Add Project</Link>
      </div>

      {error && <p className="error-msg">{error}</p>}

      {projects.length === 0 ? (
        <p className="empty-msg">No projects found. Add one to get started.</p>
      ) : (
        <div className="crud-cards">
          {projects.map(project => (
            <article key={project._id} className="crud-card">
              <div className="crud-card-body">
                <h2>{project.title}</h2>
                {project.completion && (
                  <p className="card-meta">Completed: {new Date(project.completion).toLocaleDateString()}</p>
                )}
                <p>{project.description}</p>
              </div>
              <div className="crud-card-actions">
                <Link to={`/projects/edit/${project._id}`} className="btn-edit">Edit</Link>
                <button onClick={() => handleDelete(project._id)} className="btn-delete">Delete</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
