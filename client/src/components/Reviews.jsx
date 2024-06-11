import "./Reviews.css"

export default function Reviews() {
    return (
        <>
            <section className="reviews-sidebar">
                <section className="user-reviews">
                        <h2> Title of review </h2>
                        <p> Review goes here </p>
                </section>
                
                <section className="add-review">
                    <button className="add-review-btn" type="button"> Add Review </button>
                </section>

                <form className="review-form">
                    <section className="review-title">
                        <h2> Title </h2>
                        <input type="text" placeholder="Title"/>
                    </section>

                    <section className="review-description">
                        <h2> Add review </h2>
                        <textarea type="text" placeholder="Title"/>
                    </section>

                    <button type="submit" className="submit-review-btn"> Submit Review </button>
                </form>
            </section>
        </>
    )
}