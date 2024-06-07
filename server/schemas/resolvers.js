const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find();
      },
      user: async (parent, { userId }) => {
        return User.findOne({ _id: userId });
      },
    },

    Mutation: {
        addUser: async (parent, { userName, email, password, isSeller }) => {
          const user = await User.create({ userName, email, password, isSeller });
          const token = signToken(user);
          return { token, user };
        },
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw AuthenticationError;
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw AuthenticationError;
          }
    
          const token = signToken(user);
    
          return { token, user };
        },
        // addItem: async (parent, { itemName }, context) => {
        //   if (context.user) {
        //     const item = await Item.create({ 
        //       itemName,
        //       sellerName: context.user.userName,
        //      });
          
        //   await User.findOneAndUpdate(
        //     {_id: context.user._id},
        //     { $addToSet: { items: item._id } },
        //     { new: true }
        //   );

        //   return item;
        // }
        // throw AuthenticationError;
        // ('You need to be logged in!');
        // },
        addItem: async (parent, { userId, item }) => {
          return User.findOneAndUpdate(
            { _id: userId },
            {
              $addToSet: { items: item },
            },
            {
              new: true,
              runValidators: true,
            },
          )
        },
        addReview: async (parent, { userId, review }) => {
          return User.findOneAndUpdate(
            { _id: userId },
            {
              $addToSet: { reviews: review },
            },
            {
              new: true,
              runValidators: true,
            },
          )
        },
        removeItem: async (parent, { userId, itemId }) => {
          return User.findOneAndUpdate(
            { _id: userId },
            { $pull: { items: { _id: itemId }} },
            // { $pull: { items: {item: {_id: itemId }}} },
            { new: true }
          );
        },
        removeReview: async (parent, { userId, reviewId }) => {
          return User.findOneAndUpdate(
            { _id: userId },
            { $pull: { reviews: { _id: reviewId }} },
            { new: true }
          );
        },
      },
    };
    
    module.exports = resolvers;
    