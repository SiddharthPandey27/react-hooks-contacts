import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  const updateUser = (event, id, user) => {
    event.preventDefault();

    props.updatedUser(id, user);
  };

  const cancel = () => {
    props.setEditing(false);
  };

  return (
    <form onSubmit={event => updateUser(event, user.id, user)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Code Name</label>
      <input
        type="text"
        name="userName"
        value={user.userName}
        onChange={handleInputChange}
      />
      <button type="submit">Update User</button>
      <button onClick={cancel}>Cancel</button>
    </form>
  );
};

export default EditUserForm;
