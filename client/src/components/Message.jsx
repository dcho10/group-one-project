import "./Message.css"

export default function Message() {
    return (
        <>
        <section className="message-container">
            <p> NOTE: Both parties must arrange their own methods of completeing a transaction </p>
            <form className="message-form">
                <section className="message-input">
                    <h2> Name </h2>
                    <input type="text" placeholder="Your name"></input>
                </section>

                <section className="message-input">
                    <h2> Contact </h2>
                    <input type="text" placeholder="Email or number"></input>
                </section>

                <section className="message-input">
                    <h2> Message them! </h2>
                    <textarea placeholder="Enter your message"></textarea>
                </section>

                {/* When user submits it should go back to the homepage */}
                {/* onClick does something? */}
                <button type="submit" className="submit"> Submit </button>
            </form>
        </section>
        </>
    )
}