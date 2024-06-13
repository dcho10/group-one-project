import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) 
    {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($userId: ID!, $item: ItemInput!) {
    addItem(userId: $userId, item: $item) {
      _id
      userName
      items{
        itemName
        price
        inStock
        inventoryCount
        description
        sellerName
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($userId: ID!, $review: ReviewInput!) {
    addReview(userId: $userId, review: $review) {
      _id
      userName
      reviews{
        reviewBody
        reviewerName
      }
    }
  }
`;