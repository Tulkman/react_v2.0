export const User = ({user}) => {
    return (
        <div className={'user'}>
            <span>{user.id}. {user.username} -- {user.email} -- {user.name}</span>
        </div>
    );
}