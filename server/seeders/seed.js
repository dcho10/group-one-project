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

    await Review.create(reviewSeeds);

    await Item.create(itemSeeds);

    

    for (let i = 0; i < reviewSeeds.length; i++) {
      const { _id, reviewBody, username, createdAt } = await Review.create(reviewSeeds[i]);
      const item = await Item.findOneAndUpdate(
        { reviewBody: reviewBody,
          username: username,
          dateCreated: createdAt,
         },
        {
          $addToSet: {
            reviews: _id,
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