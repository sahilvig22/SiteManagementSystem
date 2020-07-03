const mongoose = require('mongoose')

// const SiteSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user'
//   },
//   location: {
//     type: String,
//   },
//   company: {
//     type: String
//   },
//   website: {
//     type: String
//   },
//   status: {
//     type: String,
//     required: true
//   },
//   managers: {
//     type: [String],
//     required: true
//   },
//   supervisors:{
//     type:[String],
//     required:true
//   },
//   bio: {
//     type: String
//   },
//   experience: [
//     {
//       title: {
//         type: String,
//         required: true
//       },
//       company: {
//         type: String,
//         required: true
//       },
//       location: {
//         type: String,

//       },
//       from: {
//         type: Date,
//         required: true
//       },
//       to: {
//         type: Date
//       },
//       current: {
//         type: Boolean,
//         default: false
//       },
//       description: {
//         type: String
//       }
//     }
//   ],
//   education: [
//     {
//       school: {
//         type: String,
//         required: true
//       },
//       degree: {
//         type: String,
//         required: true
//       },
//       fieldofstudy: {
//         type: String,
//         required: true
//       },
//       from: {
//         type: Date,
//         required: true
//       },
//       to: {
//         type: Date,
//         required: true
//       },
//       current: {
//         type: Boolean,
//         required: true
//       },
//       description: {
//         type: String
//       }
//     }
//   ],
//   social: {
//     youtube: {
//       type: String
//     },
//     twitter: {
//       type: String
//     },
//     facebook: {
//       type: String
//     },
//     linkedin: {
//       type: String
//     },
//     instagram: {
//       type: String
//     }
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// })

const SiteSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'user'
  // },
  location: {
    type: String,
    required: true
  },
  from: {
    type: Date,
  },
  to: {
    type: Date
  }
})
module.exports = Site = mongoose.model('site', SiteSchema)












