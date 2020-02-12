import React from "react";

const UserTable = ({ users, deleteUser, editRow }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Code Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users && users.length > 0 ? (
          users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>
                  <button className="button muted-button" onClick={() => editRow(user)}>Edit</button>
                  <button className="button muted-button" onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={3}>No Members</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
