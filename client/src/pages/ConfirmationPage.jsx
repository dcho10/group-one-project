import { Link } from "react-router-dom"

import "./ConfirmationPage.css"

export default function ConfirmationPage() {
    return (
        <>
        <section className="confirmation-container">
            <h1> Are you a buyer or a seller? </h1>
            <section className="buyer-seller">
                <Link to="/buy">
                    <button className="buyer-btn">
                        Buyer
                    </button>       
                </Link>
                <Link to="/sell">
                    <button className="seller-btn">
                        Seller
                    </button>           
                </Link>
            </section>
        </section>
        </>
    )
}