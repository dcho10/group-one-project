import "./ListingCard.css"

export default function ListingCard({user}) {
    return (
      <>
      <section>
        {/* Make "User" dynamic */}
        <h1> Welcome, {user.userName}! </h1>
        <section className="listing-page">
        {/* // RUBAL: Use .map to generate all the dynamic listings at once */}
        {/* VIEW ALL LISTINGS HERE: */}
        {/* Possible state? */}

          {/* <section className="listings"> */}
            {/* <h2> Your Listings: </h2> */}
            {/* <container className="listing-container"> */}
              {/* Make h3 dynamic */}
              {/* {user.items.map(item => {
                return <h3> {item.itemName} </h3>
              })} */}
              {/* Make date dynamic here */}
            {/* </container> */}
          {/* </section> */}
          
          {/* RUBAL: Find method to display singular listing on the side after a user clicks on one to see */}
          {/* VIEW THE SINGLE LISTING THE USER WANTS TO SEE */}

          <section className="single-listing">
            <img></img>
            {/* Add img here */}
            <section className="listing-info-content">
              {user.items.map(item => {
                return <>
              <h3> {item.itemName} </h3>
              <p> {item.description} </p>
              <p> {item.price} </p>
                </>
              })}
            </section>
          </section>
        </section>
      </section>
      </>
    )
}