import "./ProfileSidebar.css"
import ProfileIcon from "../assets/profile-icon.png";

export default function ProfileSidebar () {
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

