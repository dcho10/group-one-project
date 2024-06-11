const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // isSeller: {
  //   type: Boolean,
  //   required: true,
  // },
  reviews: [
    {
      reviewBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      reviewerName: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      }
    },
  ],
  items: [
    {
    itemName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
    inventoryCount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    sellerName: {
        type: String,
        required: true,
    }
    }
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;