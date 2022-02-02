
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },

  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  profileImageSrc: {
    type: String
  },

  favouriteRecipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'posts'
    }
  ]
})


module.exports = mongoose.model("users", userSchema, "users");