import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../api';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await deleteUser(id);
      setUsers(users.filter(u => u._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="crud-page"><p className="loading">Loading users...</p></div>;

  return (
    <div className="crud-page">
      <div className="crud-header">
        <h1>Users</h1>
        <Link to="/users/add" className="btn-add">+ Add User</Link>
      </div>

      {error && <p className="error-msg">{error}</p>}

      {users.length === 0 ? (
        <p className="empty-msg">No users found. Add one to get started.</p>
      ) : (
        <div className="crud-table-wrapper">
          <table className="crud-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td className="action-buttons">
                    <Link to={`/users/edit/${user._id}`} className="btn-edit">Edit</Link>
                    <button onClick={() => handleDelete(user._id)} className="btn-delete">Delete</button>
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

export default Users;
