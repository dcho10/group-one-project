import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      userName
      email
     items{
     itemName
     price
     inStock
     inventoryCount
     description
     sellerName
     }
     reviews{
     reviewBody
     reviewerName
     }
    }
  }
`;

export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      userName
      email
     items{
     itemName
     price
     inStock
     inventoryCount
     description
     sellerName
     }
     reviews{
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
    items{
     itemName
     price
     inStock
     inventoryCount
     description
     sellerName
     }
     reviews{
     reviewBody
     reviewerName
     }
    }
  }
`;

export const QUERY_ITEM = gql`
  query item {
    item {
     itemName
     price
     inStock
     inventoryCount
     description
     sellerName
     }
    }
`;
