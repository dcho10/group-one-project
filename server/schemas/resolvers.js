const { User, Item } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      items: async () => {
        return Item.find().populate('reviews');
      },
      item: async (parent, { itemName }) => {
        return Item.findOne({ itemName }).populate('reviews');
      },
      reviews: async (parent, { itemName }) => {
        const params = itemName ? { itemName } : {};
        return review.find(params).sort({ createdAt: -1 });
      },
      review: async (parent, { reviewId }) => {
        return review.findOne({ _id: reviewId });
      },
      item: async (parent, args, context) => {
        if (context.item) {
          return Item.findOne({ _id: context.item._id }).populate('reviews');
        }
        throw AuthenticationError;
      },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
          const user = await User.create({ username, email, password });
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
        addItem: async (parent, { itemName, price, inStock, inventoryCount, description }, context) => {
            const item = await Item.create({ itemName, price, inStock, inventoryCount, description });
          return { item };
        },
        // if (!item) {
        //     throw AuthenticationError;
        //   },
        addReview: async (parent, { reviewBody, username, createdAt }, context) => {
            if (context.item) {
              const review = await Review.create({
                reviewBody,
                username,
                createdAt,
              });
      
              await Item.findOneAndUpdate(
                { _id: context.item._id },
                { $addToSet: { reviews: review._id } }
              );
      
              return review;
            }
            throw AuthenticationError;
            ('You need to be logged in!');
          },
        removeReview: async (parent, { reviewId }, context) => {
          if (context.item) {
            const review = await review.findOneAndDelete({
              _id: reviewId,
            //   reviewAuthor: context.user.username,
            });
    
            await Item.findOneAndUpdate(
              { _id: context.item._id },
              { $pull: { reviews: review._id } }
            );
    
            return review;
          }
          throw AuthenticationError;
        },
      },
    };
    
    module.exports = resolvers;
    