import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {usersService} from "../../services";

const Users = ({getUser}) => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        usersService.getAllUsers().then(value => setUsers(value))
    }, [])

    return (
        <div>
            {users && users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export {Users};