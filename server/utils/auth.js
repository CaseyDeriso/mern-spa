const jwt = require('jsonwebtoken');

const secret = 'P@$$w0rdP@$$w0rd';
const expiration = '2400hrs';

module.exports = {
  authMiddleware: function ({ req }) {
    // Enables Tokenization Filtering Via Body, Query, And/or Headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }

    console.log("token", token)


    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    }
    catch {
      console.log('Invalid Tokens');
    }

    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign(
      { data: payload },
      secret,
      { expiresIn: expiration }
    );
  }
};