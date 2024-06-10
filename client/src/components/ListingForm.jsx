import "./ListingForm.css"

export default function ListingForm() {
    return (
        <>
        <section>
            <h1> Create Your Listing </h1>
            <form className="listing-form">
                <section className="listing-title">
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