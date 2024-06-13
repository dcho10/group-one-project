import "./ListingCard.css"
import { useState } from "react";

export default function ListingCard({user}) {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    }

    return (
      <>
      <section>
        <h1> Welcome, {user.userName}! </h1>
        <section className="listing-page">

          <section className="listings">
            <h2> Your Listings: </h2>
            <container >
              {user.items.map(item => (
                <section key={item.id} className="listing-container">
                  <h3 onClick={() => handleItemClick(item)}> {item.itemName}</h3>
                </section>
            ))}
            </container>
          </section>
          {selectedItem && (
            <section className="single-listing">
              <section className="listing-info-content">
                <h3> {selectedItem.itemName} </h3>
                <p> Description: {selectedItem.description} </p>
                <p> Price: {selectedItem.price} </p>
              </section>
            </section>
          )}

        </section>
      </section>
      </>
    )
}