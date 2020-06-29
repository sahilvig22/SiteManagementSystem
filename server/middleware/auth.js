const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token')

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret')) // It verifies out token with our secret key and returns the decoded token i.e. the payload. It's in the form of an object

    req.user = decoded.user // Now we could get the user's profile anywhere using req.user and let the user access a private route
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' })
  }
}