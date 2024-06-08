import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($userName: String!) {
    user(userName: $userName) {
      _id
      userName
      email
      isSeller
     item{
     itemName
     price
     inStock
     inventoryCount
     description
     sellerName
     }
     review{
     reviewBody
     reviewerName
     }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      userName
      email
      isSeller
      item{
     itemName
     price
     inStock
     inventoryCount
     description
     sellerName
     }
     review{
     reviewBody
     reviewerName
     }
    }
  }
`;
