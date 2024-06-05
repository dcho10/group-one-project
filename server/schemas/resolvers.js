const { User, Item, Review } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find()
        .populate('reviews');
      },
      user: async (parent, { userId }) => {
        return User.findOne({ _id: userId })
        .populate('reviews');
      },
      items: async () => {
        return Item.find()
      },
      item: async (parent, { itemId }) => {
        return Item.findOne({ _id: itemId });
      },
      reviews: async (parent, { userName }) => {
        const params = userName ? { userName } : {};
        return Review.find(params).sort({ createdAt: -1 });
      },
      review: async (parent, { reviewId }) => {
        return Review.findOne({ _id: reviewId });
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('reviews');
        }
        throw AuthenticationError;
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
        addReview: async (parent, { reviewBody }, context) => {
            if (context.user) {
              const review = await Review.create({
                reviewBody,
                reviewerName: context.user.userName,
              });
      
              await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { reviews: review._id } }
              );
      
              return review;
            }
            throw AuthenticationError;
            ('You need to be logged in!');
          },
        removeReview: async (parent, { reviewId }, context) => {
          if (context.user) {
            const review = await review.findOneAndDelete({
              _id: reviewId,
              reviewerName: context.user.userName,
            });
    
            await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { reviews: review._id } }
            );
    
            return review;
          }
          throw AuthenticationError;
        },
      },
    };
    
    module.exports = resolvers;
    