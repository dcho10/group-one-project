import React from 'react';
import { useQuery } from '@apollo/client';

import {QUERY_USER} from "../utils/queries";
const UserComponent = ({userId }) => {
  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { user } = data;

  return (
    <div>
      {/* <h1>User Profile</h1>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p> */}
      <h3>Items</h3>
      <div className="item-list">
        {user.items.map((item) => (
          <div key={user.item._id} className="item">
            {/* <img src={item.imageURL} alt={user.item.itemName} /> */}
            <p>{user.item.itemName}</p>
            <p>{user.item.description}</p>
          </div>
        ))}
      </div>
      {/* <h3>Reviews</h3>
      <ul className="review-list">
        {user.reviews.map((review) => (
          <li key={user.review._id}>
            <p>{user.review.reviewBody}</p> */}
            {/* <p>Rating: {review.rating}</p> */}
          {/* </li> */}
        {/* ))} */}
      {/* </ul> */}
    </div>
  );
};

export default UserComponent;

