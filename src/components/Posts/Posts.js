import { useEffect, useState } from 'react';

import { posts_service} from "../../service";
import { Post } from '../Post/Post';

export const Posts = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        posts_service.getAllPosts().then(value => value.slice(0, 5)).then(value => setPosts(value));
    }, [])

    return (
        <div>
            {
                posts && posts.map((post) => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}