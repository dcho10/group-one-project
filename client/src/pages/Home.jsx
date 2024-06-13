import "./Home.css"
import OnlineShopping1 from "../assets/online-shopping-1.png"
import OnlineShopping2 from "../assets/online-shopping-2.png"
import OnlineShopping3 from "../assets/online-shopping-3.png"
import OnlineShopping4 from "../assets/online-shopping-4.png"


export default function Home() {
  return (
    <>
    <section className="wrapper">
      <img src={OnlineShopping1} className="item item1"/>
      <img src={OnlineShopping2} className="item item2"/>
      <img src={OnlineShopping3} className="item item3"/>
      <img src={OnlineShopping4} className="item item4"/>
    </section>

    <section className="home-content fadeIn">
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