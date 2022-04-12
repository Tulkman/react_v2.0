import { useEffect, useState } from 'react';
import { Comment } from '../Comment/Comment';
import { comments_service} from "../../service";

export const Comments = () => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        comments_service.getAllComments().then(value => setComments(value));
    }, []);

    return (
        <div>
            {
                comments && comments.map((comment) => <Comment key={comment.name} comment={comment}/>)
            }
        </div>
    );
}