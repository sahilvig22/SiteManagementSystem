//  We use "await" in front of anything that returns a promise

const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('../../models/User')

// @route     POST api/users
// @desc      Register User
// @access    Public
router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid Email').isEmail(),
  check('password', 'Pleae enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  // We don't want to write req.body again & again, so just pull the stuff out

  const { name, email, password } = req.body
  try {
    // See if user exists
    let user = await User.findOne({ email })

    ///If it does exst then return an error message
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    }

    user = new User({ //Since the user doesn't exist, we create a new instance of it. By using the password in it, we'll encrypt the password
      name, email, password
    })
    // Encrypt password
    const salt = await bcrypt.genSalt(10)

    user.password = await bcrypt.hash(password, salt)

    await user.save()

    // Return jsonwebtoken
    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 36000 }, (err, token) => {
      if (err)
        throw err;
      // Will reach next line if no error, and token is generated
      res.json({ token })
    })

    //res.send('User registered');

  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }

})

module.exports = router