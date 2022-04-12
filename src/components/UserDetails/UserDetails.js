import React from 'react';

const UserDetails = ({user,getUserId}) => {
    const {id, name, username, email } = user;

    return (
        <div>
            <h3>id:{id}</h3>
            <h3>name:{name}</h3>
            <h4>username: {username}</h4>
            <i>{email}</i>
            <button onClick={()=>getUserId(id)}>Posts</button>
        </div>
    );
};

export {UserDetails};