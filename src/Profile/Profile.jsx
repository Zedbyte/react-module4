import React from 'react';
import PropTypes from 'prop-types';

function Profile({user: {name, email, username}}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{username}</p>
        </div>
    );
}

Profile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired
}

export default Profile;