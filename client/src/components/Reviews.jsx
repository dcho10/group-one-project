import { useState } from "react";
import "./Reviews.css"

export default function Reviews() {
    const [showReviewForm, setShowReviewForm] = useState(false);

    const toggleReviewForm = () => {
        setShowReviewForm(!showReviewForm)
    }

    return (
        <>
            <section className="reviews-sidebar">
                <section className="user-reviews">
                    <section className="review-info">
                        <h2> Title of review goes </h2>
                        <p className="review-date"> Posted: Review date goes here </p>
                    </section>
                        <p className="review-text"> Review goes here </p>
                </section>
                
                <section className="add-review">
                    <button className="add-review-btn" type="button" onClick={toggleReviewForm}> Add Review </button>
                </section>

            {showReviewForm && (
                <section className="review-container">
                    <form className="review-form">
                        <section className="review-title">
                            <h2> Title </h2>
                            <input type="text" placeholder="Title"/>
                        </section>

                        <section className="review-description">
                            <h2> Add review </h2>
                            <textarea type="text" placeholder="Add review"/>
                        </section>

                        <section className="submit-review">
                            <button type="submit" className="submit-review-btn"> Submit Review </button>
                        </section>
                    </form>
                </section>
            )}
            </section>
        </>
    )
}