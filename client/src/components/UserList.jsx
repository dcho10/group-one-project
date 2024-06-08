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
              <div className="card mb-3">
                <h4>
                  {user.userName} <br />
                  {/* <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {user.items ? user.items.length : 0}{' '}
                   
                    {{profile.skills && profile.skills.length === 1 ? '' : 's'}}
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
