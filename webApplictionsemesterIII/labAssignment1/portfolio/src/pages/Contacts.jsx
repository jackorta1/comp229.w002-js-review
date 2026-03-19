import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getContacts, deleteContact } from '../api';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await getContacts();
      setContacts(res.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchContacts(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;
    try {
      await deleteContact(id);
      setContacts(contacts.filter(c => c._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="crud-page"><p className="loading">Loading contacts...</p></div>;

  return (
    <div className="crud-page">
      <div className="crud-header">
        <h1>Contacts</h1>
        <Link to="/contacts/add" className="btn-add">+ Add Contact</Link>
      </div>

      {error && <p className="error-msg">{error}</p>}

      {contacts.length === 0 ? (
        <p className="empty-msg">No contacts found. Add one to get started.</p>
      ) : (
        <div className="crud-table-wrapper">
          <table className="crud-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Company</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact._id}>
                  <td>{contact.firstname}</td>
                  <td>{contact.lastname}</td>
                  <td>{contact.email}</td>
                  <td>{contact.position}</td>
                  <td>{contact.company}</td>
                  <td className="action-buttons">
                    <Link to={`/contacts/edit/${contact._id}`} className="btn-edit">Edit</Link>
                    <button onClick={() => handleDelete(contact._id)} className="btn-delete">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Contacts;
