import React, { useState } from 'react';
import Profile from './Profile';
import Navigation from './Navigation';
import Form from './Form';

function UserProfile() {
    //Initialize state for user data.
    const [userData, setUserData] = useState({
        name: 'Juan Dela Cruz',
        email: 'juan@gmail.com',
        username: 'One'
    });

    //Function to handle updates from Form
    const handleUpdate = (updatedInfo) => {
        setUserData((prevState) => ({
            ...prevState, //Shallow Copying from Form.js
            ...updatedInfo, //Merging to Profile.js

        }));
    };
    
    return (
        <>
            <div> 
                <Navigation/>
                <Profile user={userData}/>
                <Form user={userData} onUpdate={handleUpdate}/>
            </div>
        </>
    );
}



export default UserProfile;