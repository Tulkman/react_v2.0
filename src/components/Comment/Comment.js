export const Comment = ({comment}) => {
    return (
        <div className={'comment'}>
            <span>{comment.body}</span>
        </div>
    );
}