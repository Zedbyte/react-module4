import React, { useState } from 'react';

function Form({user, onUpdate}) {

    const [formData, setFormData] = useState({name: user.name, email: user.email, username: user.username});
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return(
        <form onSubmit={handleSubmit} className="form-card">
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <label>
                Email:
                <input type="text" name="email" value={formData.email} onChange={handleChange}/>
            </label>
            <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange}/>
                <button type="submit">Update Profile</button>
            </label>
        </form>
    );
}

export default Form;