import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ItemsList from '../components/ItemsList';
import ReviewsList from '../components/ReviewsList';

import { QUERY_USER } from '../utils/queries';


import Auth from '../utils/auth';

const User = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  const user = data?.user || {};
  // navigate to personal profile page if userName is yours
  // if (Auth.loggedIn() && Auth.getProfile().data.userName === userParam) {
  //   return <Navigate to="/me" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!user?.userName) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or log in!
  //     </h4>
  //   );
  // }

  return (
    <div>
      <div >
        <h2>
          Viewing {user.userName}'s' profile.
        </h2>
        <div>
        <h2>
        {user.userName}'s has these items
      </h2>

      {user.items?.length > 0 && <ItemsList items={user.items} />}

      <h2>
        {user.userName}'s has these reviews
      </h2>

      {user.reviews?.length > 0 && <ReviewsList reviews={user.reviews} />}
      
    </div>
        {/* <div className="col-12 col-md-10 mb-5">
          <UserList
           users={user.userName}
           title={`${user.userName}'s thoughts...`}
           showTitle={false}
          showuserName={false}
          />
        </div> */}
        {/* {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
          </div>
        )} */}
      </div>
    </div>
  );
};

export default User;
