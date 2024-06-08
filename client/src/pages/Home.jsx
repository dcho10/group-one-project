import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const users = data?.user || [];
  
  return (
    <main>
      <div>
                {loading ? (
            <div>Loading...</div>
          ) : (
        
          users           
        
          )}
           </div>  
    </main>
  );
};

export default Home;