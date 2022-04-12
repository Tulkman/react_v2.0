import React from 'react';

const User = ({user, getUser}) => {
    const {id, name} = user;

    return (
        <div>
            <h3>{id} -- {name} </h3>
            <button onClick={() => {
                getUser(id);
            }}>User Details
            </button>
        </div>
    );
};

export default User;
