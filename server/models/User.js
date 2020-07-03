const mongoose = require('mongoose')

const site = require('./Site')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  sites: [
    {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: site
      location: {
        type: String,
        required: true
      },
      from: {
        type: String,
        required: true
      },
      to: {
        type: String,
        required: true
      }
    }
  ]
})

module.exports = User = mongoose.model('user', UserSchema) 