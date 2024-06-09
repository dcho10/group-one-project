import { Link } from "react-router-dom"

import "./BuyingCard.css"

export default function BuyingCard () {
    return (
        <>
        <section className="buying-container">
            {/* Image goes here */}
            {/* <img> </img> */}
            <section className="selection-buttons">
                <section className="response-buttons">
                    {/* Like and pass button should share same functionality of moving to the next item once clicked */}
                    {/* Possible state? */}
                    <button className="like"> ✔️ </button>
                    <button className="pass"> ❌ </button>
                    <Link to="/message">
                        <button className="message"> 💬 </button>            
                    </Link>
                </section>
                {/* Info button should display the info section once clicked */}
                {/* Possible state? */}
                <button className="info-btn"> ℹ️ </button>
            </section>

            {/* Hide until user clicks on info button */}
            <section className="info">
                <h2> Listing Title goes here</h2>
                <p> Description:  description goes here </p>
                <p> Created by: username goes here</p>
                <p> Date: date goes here </p>
            </section>
        </section>

        </>
    )
}