
var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
   postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
   },

   title: {
       type: String 
   },

   type: {
       type: String 
   },

   ingredients: [
      { type: String }
   ],

   images: [
      { type: String }
   ],

   steps: [
      { type: String }
   ],

   comments: [
      {
         commentedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
         },
         body: String,
         createdAt: {
            type: Date,
            default: Date.now
         }
      }

   ],

   likes: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'users',
      }
   ],

   createdAt: {
      type: Date,
      default: Date.now
   }
})
module.exports = mongoose.model("posts", postSchema, "posts");