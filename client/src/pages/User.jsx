// import { useQuery } from '@apollo/client';

// import { QUERY_USERS } from '../utils/queries';
// import { Link } from 'react-router-dom';
import ProfileSidebar from "../components/ProfileSidebar";
import Reviews from "../components/Reviews";
// import UserList from "../components/UserList";

export default function User() {
//   const { loading, data } = useQuery(QUERY_USERS);
// const users = data?.users || [];
return (
    
//     <main>
//      <div>
// {loading ? (
// <div>Loading...</div>
//           ) : (
        
//             <UserList
//             users = {users}
            
//           />        
        
//           )}  
//            </div>  
           
          
//     </main>
    
    
    
    
    
    
    <>
  
    <section className="profile-container"> 


  <ProfileSidebar />
  <Reviews />
  {/* {/* <UserList  users = {users}/> */}
  </section>
  </>
  );
};