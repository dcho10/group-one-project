import { Link } from "react-router-dom"

import "./ConfirmationPage.css"

export default function ConfirmationPage() {
    return (
        <>
        <section className="confirmation-container">
            <h1> What do you want to do today? </h1>
            <section className="buyer-seller">
                <Link to="/buy">
                    <button className="buyer-btn">
                        I want to buy!
                    </button>       
                </Link>
                <Link to="/sell">
                    <button className="seller-btn">
                        I want to sell!
                    </button>           
                </Link>
            </section>
        </section>
        </>
    )
}