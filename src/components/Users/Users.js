
import { useEffect, useState } from 'react';

import { users_service} from "../../service";
import { User } from '../User/User';

export const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        users_service.getAllUsers().then(value => setUsers(value));
    }, []);

    return (
        <div>
            {
                users && users.map((user) => <User key={user.id} user={user}/>)
            }
        </div>
    );
}