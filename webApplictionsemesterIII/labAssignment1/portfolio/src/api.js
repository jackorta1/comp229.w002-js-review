const API_BASE = 'https://portfolio-backend-5ohd.onrender.com/api';

async function request(endpoint, options = {}) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Request failed');
  return data;
}

// Users
export const getUsers = () => request('/users');
export const getUser = (id) => request(`/users/${id}`);
export const createUser = (user) => request('/users', { method: 'POST', body: JSON.stringify(user) });
export const updateUser = (id, user) => request(`/users/${id}`, { method: 'PUT', body: JSON.stringify(user) });
export const deleteUser = (id) => request(`/users/${id}`, { method: 'DELETE' });

// Projects
export const getProjects = () => request('/projects');
export const getProject = (id) => request(`/projects/${id}`);
export const createProject = (project) => request('/projects', { method: 'POST', body: JSON.stringify(project) });
export const updateProject = (id, project) => request(`/projects/${id}`, { method: 'PUT', body: JSON.stringify(project) });
export const deleteProject = (id) => request(`/projects/${id}`, { method: 'DELETE' });

// Services
export const getServices = () => request('/services');
export const getService = (id) => request(`/services/${id}`);
export const createService = (service) => request('/services', { method: 'POST', body: JSON.stringify(service) });
export const updateService = (id, service) => request(`/services/${id}`, { method: 'PUT', body: JSON.stringify(service) });
export const deleteService = (id) => request(`/services/${id}`, { method: 'DELETE' });

// Contacts (References)
export const getContacts = () => request('/references');
export const getContact = (id) => request(`/references/${id}`);
export const createContact = (contact) => request('/references', { method: 'POST', body: JSON.stringify(contact) });
export const updateContact = (id, contact) => request(`/references/${id}`, { method: 'PUT', body: JSON.stringify(contact) });
export const deleteContact = (id) => request(`/references/${id}`, { method: 'DELETE' });
