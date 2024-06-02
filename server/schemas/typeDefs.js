const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Item {
    _id: ID
    itemName: String
    price: Number
    inStock: Boolean
    inventoryCount: Number
    description: String
    reviews: [Review]!
  }

  type Review {
    _id: ID
    reviewBody: String!
    username: String!
    createdAt: Date!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Query {
    items: [Item]
    item(itemName: String!): Item
    review(reviewBody: String!, username: String!, createdAt: Date!)
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addItem(itemName: String!, price: Number!, inStock: Boolean!, inventoryCount: Number!, description: String!): Item
    removeItem(itemName: ID!): Item
    addReviews(reviewBody: String!, username: String!, createdAt: Date!): Review
    removeReviews(reviewId: ID!): Review
  }
`;

module.exports = typeDefs;
