const typeDefs = `
  type User {
    _id: ID
    userName: String
    email: String
    password: String
    isSeller: Boolean
    items: [Item]!
    reviews: [Review]!
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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    items(userName: String): [Item]
    item(itemId: ID!): Item
    reviews(userName: String): [Review]
    review(reviewId: ID!): Review
    me: User
  }

  type Query {
    items: [Item]
    item(itemId: ID!): Item
  }

  type Mutation {
    addUser(userName: String, email: String, password: String, isSeller: Boolean): Auth

    login(email: String, password: String): Auth

    addItem(userId: ID!, itemName: String, price: Int, inStock: Boolean, inventoryCount: Int, description: String, sellerName: String): Item

    removeItem(itemId: ID!): Item

    addReview(reviewBody: String, reviewerName: String, createdAt: String): Review
    
    removeReview(reviewId: ID!): Review
  }
`;

module.exports = typeDefs;
