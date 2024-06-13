import "./ListingCard.css"
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_ITEM } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries"

export default function ListingCard({ user }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (user.items) {
      setItems(user.items);
    }
  }, [user.items])

  const [removeItem] = useMutation(REMOVE_ITEM, {
    refetchQueries: [{ query: QUERY_ME }],
    awaitRefetchQueries: true,
  });

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleDelete = async (itemId) => {
    try {
      await removeItem({
        variables: {
          userId: user._id,
          itemId: itemId,
        },
      });
      setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));      
      setSelectedItem(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section>
        <h1> Welcome, {user.userName}! </h1>
        <section className="listing-page">
          <section className="listings">
            <h2> Your Listings: </h2>
            <section>
              {items.map((item) => (
                <section key={item._id} className="listing-item listing-container">
                  <h3 onClick={() => handleItemClick(item)}> {item.itemName} </h3>
                </section>
              ))}
            </section>
          </section>
          {selectedItem && (
            <section className="single-listing">
              <section className="listing-info-content">
                <h3> {selectedItem.itemName} </h3>
                <p> Description: {selectedItem.description} </p>
                <p> Price: ${selectedItem.price} </p>
              </section>
              <section className="delete-edit">
                <button className="edit-btn"> Edit </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(selectedItem._id)}
                >
                  Delete
                </button>
              </section>
            </section>
          )}
        </section>
      </section>
    </>
  );
}
