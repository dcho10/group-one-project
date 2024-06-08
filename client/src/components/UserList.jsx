import { Link } from 'react-router-dom';

const UserList = ({users}) => {
  if (!users.length) {
    return <h3>No user Yet</h3>;
  }

  return (
    <div>
        <div>
        {users &&
          users.map((user) => (
            <div key={user._id}>
              <div>
                <h4>
                  {user.userName} <br />
                  {/* <span>
                    currently has {user.items ? user.items.length : 0}{' '}
                   
                    {user.items && user.items.length === 1 ? '' : 's'}
                  </span>

                  <span>
                    currently has {user.reviews ? user.reviews.length : 0}{' '}
                   
                    {user.reviews && user.reviews.length === 1 ? '' : 's'}
                  </span> */}
                </h4>

                <Link
                  
                  to={`/users/${user._id}`}
                >
                 
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
