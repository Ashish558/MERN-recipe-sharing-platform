
var express = require('express')
var mongoose = require('mongoose')

//multer imports
const multer = require('multer')
const cloudinary = require('cloudinary')
const path = require('path')

var verify = require('../verifyToken')
var User = require('../../models/users')

var router = express.Router()

//multer setup
const storage = multer.memoryStorage()
const multerUploads = multer({ storage }).single('image')

const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();

const dataUri = req => {
    return parser.format(path.extname(req.file.originalname).toString(), req.file.buffer)
}

router.get('/get/details', verify, async function (req, res) {
    const userId = req.user._id
    try {
        User.findById(userId)
            .select('profileImageSrc name username')
            .exec((err, data) => {
                if (err) return res.status(400).json(err)
                return res.status(200).send(data)
            })
    }
    catch (error) {
        console.log(err)
        res.status(401).json("Server error")
    }
})


//update user personal details
router.put('/update/details', verify, async function (req, res) {

    const userId = req.user._id
    const { username, firstName, lastName } = req.body

    try {


        await User.findOneAndUpdate(
            { _id: userId },
            {
                username,
                name: {
                    first: firstName,
                    last: lastName
                }
            },
            { new: true },
            function (err, docs) {
                if (err) return res.status(401).json("Error occured")
                const { name, username } = docs
                return res.status(200).json({ name, username })
            })
    } catch (err) {
        console.log(err)
    }

})

//saving profile image
router.post('/update/profileImage', verify, multerUploads, async function (req, res) {
    if (req.file) {
        try {
            const file = dataUri(req).content;
            cloudinary.v2.uploader.upload(file, {
                folder: 'recipe/profile',
            }).then(async (result) => {
                const image = result.url;
                await User.findOneAndUpdate(
                    { _id: req.user._id },
                    {
                        profileImageSrc: image
                    },
                    { new: true },
                    function (err, docs) {
                        // if (err) {
                        //     return res.status(401).json({ message: "Error occured", data: err })
                        // }
                        return res.status(200).json({
                            image: docs.profileImageSrc,
                            message: 'Your image has been uploded successfully to cloudinary',
                        })
                    })
            })

        } catch (err) {
            console.log(err)
        }

    }

})



var userFavouritesRoute = require('./favourites')
router.use(userFavouritesRoute)

module.exports = router
