import "./Home.css"

export default function Home() {
  return (
    <>
    <section className="home-content">
      <h1> Welcome! </h1>
      <p><a href="/login"> Login </a> or <a href="/signup"> signup</a> to get started!</p>
    </section>
    </>
  )
}

// import { useQuery } from '@apollo/client';
// import UserList from '../components/UserList';

// import { QUERY_USERS } from '../utils/queries';

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_USERS);
//   const users = data?.users || [];
  
//   //console.log(users)
//   return (
//     <main>
//       <div>
//                 {loading ? (
//             <div>Loading...</div>
//           ) : (
        
//             <UserList
//             users = {users}
            
//           />        
        
//           )}  
//            </div>  
           
          
//     </main>
    
//   );
// };


// export default Home;