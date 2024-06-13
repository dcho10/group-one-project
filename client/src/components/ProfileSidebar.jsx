import "./ProfileSidebar.css"
import ProfileIcon from "../assets/profile-icon.png";

export default function ProfileSidebar () {
     return (
        <>
        <section className="profile-sidebar">
            <section className="profile-info">
                <img src={ProfileIcon}/>
                <h2> Username goes here </h2>
                <p> Email: email goes here </p>
            </section>
        </section>
        </>
    );
};

