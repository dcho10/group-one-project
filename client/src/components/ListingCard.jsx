import { Link } from "react-router-dom"
import "./ListingCard.css"

export default function ListingCard() {
    return (
        <section>
        {/* Make User dynamic */}
        <h1> Welcome, User! </h1>
        {/* // RUBAL: Use .map to generate all the dynamic listings at once */}
          <section className="listings">
            <h2> Your Listings: </h2>
            <container className="listing-container">
              {/* Add image here */}
              <img></img>
              {/* Make h3 dynamic */}
              <h3><Link to ="listing/:id">
              Listing title goes here
              </Link></h3>
              {/* Make date dynamic here */}
              <section className="listing-info">
                <p> Comments: Dynamic comment count goes here (Optional) </p>
                <p> Posted: Dynamic date goes here</p>
              </section>
            </container>
          </section>
        </section>
    )
}