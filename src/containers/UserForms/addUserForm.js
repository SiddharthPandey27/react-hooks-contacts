import React, { useState } from 'react';

const AddUserForm = (props) => {
    const initialState = {
        id: '',
        name: '',
        userName: ''
    };

    const [user, setNewUser] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewUser({ ...user, [name]: value });
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!user.name || !user.userName) {
            return;
        }

        props.addUser(user);
        setNewUser(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Code Name</label>
            <input type="text" name="userName" value={user.userName} onChange={handleInputChange} />
            <button type="submit">Add New Member</button>
        </form>
    );
}

export default AddUserForm;