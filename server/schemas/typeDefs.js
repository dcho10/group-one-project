const typeDefs = `
  type User {
    _id: ID
    userName: String
    email: String
    password: String
    isSeller: Boolean
    items: [Item]
    reviews: [Review]
  }

  input ItemInput {
    itemName: String
    price: Int
    inStock: Boolean
    inventoryCount: Int
    description: String
    sellerName: String
  }

  type Item {
    _id: ID
    itemName: String
    price: Int
    inStock: Boolean
    inventoryCount: Int
    description: String
    sellerName: String
  }

  type Review {
    _id: ID
    reviewBody: String
    reviewerName: String
    createdAt: String
  }

  input ReviewInput {
    reviewBody: String
    reviewerName: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(userName: String, email: String, password: String, isSeller: Boolean): Auth

    login(email: String, password: String): Auth

    addItem(userId: ID!, item: ItemInput): User

    removeItem(userId: ID!, itemId: ID!): User

    addReview(userId: ID!, review: ReviewInput): User
    
    removeReview(userId: ID!, reviewId: ID!): User
  }
`;

module.exports = typeDefs;
