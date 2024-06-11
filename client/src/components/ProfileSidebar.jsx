// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import { QUERY_USER } from '../utils/queries';

// import "./ProfileSidebar.css"
// import ProfileIcon from "../assets/profile-icon.png";

export default function ProfileSidebar () {
    // const { userId } = useParams();

    // const { loading, data } = useQuery(QUERY_USER, {
    //   variables: { userId: userId },
    // });
    // const user = data?.user || {};

    // if (loading) {
    //   return <div>Loading...</div>;
    // }

    return (
        <>
        <section className="profile-sidebar">
            <section className="profile-info">
                <img src={ProfileIcon}/>
                <h2> {user.userName} </h2>
                <p> {user.email} </p>
            </section>
        </section>
        </>
    );
};

