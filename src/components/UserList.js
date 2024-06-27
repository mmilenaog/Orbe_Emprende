import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3050/api/users');
        console.log('Data received from server:', response.data);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError(error.message); 
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id}, <strong>Nombre:</strong> {user.nombreCompleto}, <strong>Email:</strong> {user.correoElectronico}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;