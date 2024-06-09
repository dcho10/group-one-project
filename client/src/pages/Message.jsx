import "./Message.css"

export default function Message() {
    return (
        <>
        <section className="message-container">
            <form className="message-form">
                <section className="message-input">
                    <h2> Name </h2>
                    <input type="text"></input>
                </section>

                <section className="message-input">
                    <h2> Contact </h2>
                    <input type="text"></input>
                </section>

                <section className="message-input">
                    <h2> Message them! </h2>
                    <textarea></textarea>
                </section>

                {/* When user submits it should go back to the homepage */}
                {/* onClick does something? */}
                <button type="submit" className="submit"> Submit </button>
            </form>
        </section>
        </>
    )
}