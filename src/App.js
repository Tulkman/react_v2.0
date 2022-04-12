import {useState} from 'react';

import style from './App.module.css';
import { Posts, Users, UserDetails} from './components/index';

function App ()  {
    const [user, setUser] = useState(null);
    const [userIdForPosts, setUserIdForPosts] = useState(null);

    return (
        <div>
            <div className={style.wrap}>
                <Users setUser={setUser} setUserIdForPosts={setUserIdForPosts}/>
                {user && <UserDetails user={user} setUserIdForPosts={setUserIdForPosts}/>}
            </div>
            {userIdForPosts && <Posts userId={userIdForPosts}/>}
        </div>
    );
}
export default App;