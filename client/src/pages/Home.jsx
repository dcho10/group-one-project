import { useQuery } from '@apollo/client';
import UserList from '../components/UserList';

import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];
  
  return (
    <main>
      <div>
                {loading ? (
            <div>Loading...</div>
          ) : (
        
            <UserList
            users={users}
            
          />        
        
          )}
           </div>  
    </main>
  );
};

export default Home;