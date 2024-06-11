import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ListingForm.css"

export default function ListingForm() {

    const [formState, setFormState] = useState({ title: "", description: ""});
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    }



    return (
        <>
        <section>
            <h1> Create Your Listing </h1>
            <form className="listing-form">
                <section className="listing-header">
                    <h2> Title </h2>
                    <input type="text" className="title-input"/>
                </section>

                <section className="listing-description">
                    <h2> Description </h2>
                    <textarea className="description-text"></textarea>
                </section>

                {/* Figure out state to redirect to home after submit */}
                <button type="submit" className="submit"> Create Listing </button>
            </form>
        </section>
        </>
    )
}