
var express = require('express')

var verify = require('../verifyToken')
var router = express.Router()
var Post = require('../../models/post')
var mongoose = require('mongoose');

router.get('/:id/likes', verify, async (req, res) => {

    const postId = req.params.id
    await Post.findById(postId)
        .then((post) => res.status(200).json(post.likes))
        .catch(err => res.status(401).json("Error :" + err))
})


function CheckItemInArray(array, item) {
    if (array.length === 0) return false

    for (let i = 0; i < array.length; i++) {
        if (array[i].toString() == item) {
            return true
        }

    }
    return false
}

router.put('/:id/add/like', verify, async (req, res) => {
    
    const postId = req.params.id
    await Post.findById(postId)
        .then((post) => {
            if (CheckItemInArray(post.likes, req.user._id)) return res.status(406).json("already likes")

            post.likes.push(req.user._id)

            post.save()
                .then(() => res.status(200).json("Liked"))
                .catch(err => res.status(401).json("Error :" + err))
        })
        .catch(err => res.status(401).json("Server error" + err))
})

router.put('/:id/remove/like', verify, async (req, res) => {
   
     const postId = req.params.id
     await Post.findById(postId)
         .then((post) => {
 
            post.likes = post.likes.filter(like =>{
                 return like.toString() !== req.user._id
            })
           
             post.save()
                 .then(() => res.status(200).json("Unliked"))
                 .catch(err => res.status(401).json("Error :" + err))
         })
         .catch(err => res.status(401).json("Server error" + err))
})


module.exports = router