const db = require('../config/connection');
const { User, Item, Review } = require('../models');
const userSeeds = require('./userSeeds.json');
const itemSeeds = require('./itemSeeds.json');
const reviewSeeds = require('./reviewSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Item', 'items');

    await cleanDB('User', 'users');

    await cleanDB('Review', 'reviews');

    await User.create(userSeeds);
    
    // await Item.create(itemSeeds);

    // await Review.create(reviewSeeds);

    for (let i = 0; i < reviewSeeds.length; i++) {
      const { _id , reviewerName } = await Review.create(reviewSeeds[i]);
      const user = await User.findOneAndUpdate(
        { 
          userName: reviewerName
         },
        {
          $addToSet: {
            reviews: _id,
          },
        }
      );
    }

    for (let i = 0; i < itemSeeds.length; i++) {
      const { _id , sellerName } = await Item.create(itemSeeds[i]);
      const user = await User.findOneAndUpdate(
        { 
          userName: sellerName
         },
        {
          $addToSet: {
            items: _id,
          },
        }
      );
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});