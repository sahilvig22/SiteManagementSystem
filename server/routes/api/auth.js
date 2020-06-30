const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')


const User = require('../../models/User')

// @route     GET api/auth
// @desc      TEST route
// @access    Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password') // To not return the password
    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})


// @route     POST api/auth
// @desc      Authenticate User & Get Token
// @access    Public
router.post('/', [
  check('email', 'Please include a valid Email').isEmail(),
  check('password', 'Password is required').exists()
], async (req, res) => {

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  // We don't want to write req.body again & again, so just pull the stuff out

  const { email, password } = req.body
  try {
    // See if user exists
    let user = await User.findOne({ email })

    ///If it does exst then return an error message
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
    }

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