import { Link } from "react-router-dom"
import { useState } from "react"

import Message from "./Message";
import "./BuyingCard.css"
let index = 0;

export default function BuyingCard ({items, loading}) {
    const [showInfo, setShowInfo] = useState(false);

    const [newItem, setNewItem] = useState(items[index]);
    // newItem = current value stored
    // setNewItem = stores current value of random index number of array items

    const toggleInfo = () => {
        setShowInfo(!showInfo)
    }

    const [showMessage, setShowMessage] = useState(false);

    const displayMessage = () => {
        setShowMessage(!showMessage)
    }

    const handleNext = () => {
        index = Math.floor(Math.random()*items.length)
        setNewItem(items[index])
    }

    return (
        <>
        <section className="buying-container">
            {/* Image goes here */}
            {/* <img> </img> */}
            {console.log(items, "items")}
            <section className="listing-info">
                <h2 className="listing-title"> { !loading? newItem.itemName:"" }</h2>
                <h2 className="listing-price"> Price goes here </h2>
            </section>
            <section className="selection-buttons">
                <section className="response-buttons">
                    {/* Like and pass button should share same functionality of moving to the next item once clicked */}
                    {/* Possible state? */}
                    <button className="like"> ✔️ </button>
                    <button className="pass" onClick={handleNext}> ❌ </button>
                    <button className="message" onClick={displayMessage}> 💬 </button>            
                </section>

                <button className="info-btn" onClick={toggleInfo}> ℹ️ </button>
            </section>

            {showInfo && (
                <section className="info">
                    <p> Description:  description goes here </p>
                    <Link to="/profiles2">
                        <p> Created by: seller name goes here</p>   
                    </Link>
                    <p> Date: date goes here </p>
                </section>
            )}
        </section>
        
        {showMessage && (
            <Message />
        )}

        </>
    )
}