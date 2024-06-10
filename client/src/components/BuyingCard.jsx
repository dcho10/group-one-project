import { Link } from "react-router-dom"
import { useState } from "react"

import "./BuyingCard.css"

export default function BuyingCard () {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo)
    }

    return (
        <>
        <section className="buying-container">
            {/* Image goes here */}
            {/* <img> </img> */}
            <h2 className="listing-title"> Listing Title goes here</h2>
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

                <button className="info-btn" onClick={toggleInfo}> ℹ️ </button>
            </section>

            {showInfo && (
                <section className="info">
                    <p> Description:  description goes here </p>
                    <Link to="/profile">
                        <p> Created by: username goes here</p>   
                    </Link>
                    <p> Date: date goes here </p>
                </section>
            )}
        </section>

        </>
    )
}