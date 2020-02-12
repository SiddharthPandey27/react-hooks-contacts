import React, { useState } from "react";

import UserTable from "./containers/UserTable/userTable";
import AddUserForm from "./containers/UserForms/addUserForm";
import EditUserForm from "./containers/UserForms/editUserForm";

const App = () => {
  const usersData = [
    {
      id: 1,
      name: "Superman",
      userName: "manofsteel"
    },
    {
      id: 2,
      name: "Batman",
      userName: "thedarkknight"
    },
    {
      id: 3,
      name: "Wonder Woman",
      userName: "theamazonianprincess"
    }
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = user.length + 1;
    setUsers([...users, user]);
  };

  const [editing, setEditing] = useState(false);

  const editUserState = {
    id: null,
    name: "",
    userName: ""
  };

  const [currentUser, setCurrentUser] = useState(editUserState);

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, userName: user.userName });
  };

  const updatedUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(eachUser => eachUser.id !== id));
  };

  return (
    <div className="container">
      <h1>Justice League</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Member</h2>
          {editing ? (
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updatedUser={updatedUser}
            />
          ) : (
            <AddUserForm addUser={addUser} />
          )}
        </div>
        <div className="flex-large">
          <h2>View Members</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
