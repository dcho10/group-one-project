const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, userName, _id, reviews, items }) {
    const payload = { email, userName, _id, reviews, items };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

// NOTE: client side Auth does the decryption (extract info from token - hidden message), 
// PASS EVERYTHING ON PAYLOAD SO THAT IT WILL SHOW ON THE CLIENT SIDE

// server auth encrypts payload (user's information inside token)
// client side extracts the payload so that it can be used on frontend/react side