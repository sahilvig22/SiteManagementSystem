const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const Site = require('../../models/Site')
const User = require('../../models/User')

// @route     GET api/site/me
// @desc      Get current user's site details
// @access    Private

router.get('/me', auth, async (req, res) => {
  try {
    const site = await Site.findOne({ user: req.user.id }).populate('user', ['name'])

    if (!site) {
      return res.status(400).json({ msg: 'There is no site for this user' })
    }

    res.json(site)

  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router