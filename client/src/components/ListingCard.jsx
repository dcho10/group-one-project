import "./ListingCard.css"

export default function ListingCard() {
    return (
      <>
      <section>
        {/* Make "User" dynamic */}
        <h1> Welcome, User! </h1>
        <section className="listing-page">
        {/* // RUBAL: Use .map to generate all the dynamic listings at once */}
        {/* VIEW ALL LISTINGS HERE: */}

          <section className="listings">
            <h2> Your Listings: </h2>
            <container className="listing-container">
              {/* Make h3 dynamic */}
              <h3> Listing title goes here </h3>
              {/* Make date dynamic here */}
            </container>
          </section>
          {/* RUBAL: Find method to display singular listing on the side after a user clicks on one to see */}
          {/* VIEW THE SINGLE LISTING THE USER WANTS TO SEE */}

          <section className="single-listing">
            <img></img>
            {/* Add img here */}
            <section className="listing-info">
              <h3> Listing title goes here </h3>
              <p> Comments: Dynamic number goes here </p>
              <p> Posted: Date goes here</p>
            </section>
          </section>
        </section>
      </section>
      </>
    )
}