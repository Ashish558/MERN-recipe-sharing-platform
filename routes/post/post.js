
var express = require('express')
const multer = require('multer')
var path = require('path')

var verify = require('../verifyToken')
var Post = require('../../models/post')

var router = express.Router()


//cloudinary setup
const cloudinary = require('cloudinary')


//multer setup
const storage = multer.memoryStorage()
const multerUploads = multer({ storage }).any('postImages')

const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();

const dataUri = file => {
    return parser.format(path.extname(file.originalname).toString(), file.buffer)
}

/*
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/images/posts")
    },
    filename: function (req, file, callback) {
        //callback(null, file.originalname) 
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        // callback(null, Date.now() + file.originalname)
    }
})
*/
const upload = multer({
    storage: storage
})


router.post('/create', verify, async (req, res) => {
    const { title, steps, ingredients, type } = req.body

    const newPost = new Post({
        postedBy: req.user._id,
        title,
        type,
        ingredients,
        steps
    })
    try {
        let savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (err) {
        console.log(err)
    }

})


router.get('/:id', async (req, res) => {
    const postId = req.params.id

    try {
        Post.findOne({ _id: postId })
            .select("_id postedBy title type images steps ingredients comments likes createdAt")
            .populate("postedBy", "username profileImageSrc _id")
            .sort({ createdAt: -1 })
            .exec((err, posts) => {
                if (err) return res.json(err)
                res.json(posts)
            })
    }
    catch (err) {
        res.send(err)
    }


})


router.post('/', async (req, res) => {
    const { postsToSkip } = req.body

    try {
        await Post.aggregate([
            {
                $project: {
                    postedBy: 1, title: 1, type: 1, images: 1, createdAt: 1, _id: 1,
                    likes: { $size: '$likes' }
                },
            },
            { $sort: { createdAt: -1 } },
            { $skip: postsToSkip },
            { $limit: 12 },
            /*   {
                   $lookup: {
                       from: 'users',
                       localField: 'postedBy',
                       foreignField: '_id',
                       as: 'postedBy',
                       $project: { username: 1, profileImageSrc:1 }
                   },
               }
               */
            {
                $lookup:
                {
                    from: "users",
                    let: { post_postedBy: "$postedBy" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and:
                                        [
                                            { $eq: ["$$post_postedBy", "$_id"] }
                                        ]
                                }
                            }
                        },
                        { $project: { username: 1, profileImageSrc: 1 } }
                    ],
                    as: "posted_by"
                }
            },

            // { $group: { _id: "$u._id", total: { $sum: 1 } } },
        ]).exec(function (e, d) {
            return res.status(200).json(d)
        })
    } catch (err) {
        console.log(err)
    }


    // try {
    //     Post.find()
    //         .select("_id postedBy title type images createdAt")
    //         .limit(10)
    //         //.skip(postsToSkip)
    //         .populate("postedBy", "username profileImageSrc _id")
    //         .sort({ createdAt: -1 })
    //         .exec((err, posts) => {
    //             if (err) return res.json(err)
    //             res.json(posts)
    //         })
    // }
    // catch (err) {
    //     res.send(err)
    // }


})

//prevmatch $match: { title: { $regex: regex, $options: 'i' } } 

function getItemsToMatch(filterObj) {
    let itemsToMatch = []

    for (var key in filterObj) {
        if (filterObj[`${key}`] !== false) {
            itemsToMatch.push(key)
        }

    }
    return itemsToMatch
}

router.post('/filtered', async (req, res) => {
    const { title, ingredients } = req.body.filtered

    let itemsToMatch = getItemsToMatch(req.body.filtered)

    var regex = new RegExp(title)

    let match = {}
    //if ing and title both present
    if (ingredients && title) {
        match = {
            $and: [
                { title: { $regex: regex, $options: 'i' } },
                { ingredients: { $all: ingredients } }
            ]
        }
    }

    //if only ing
    if (ingredients && !title) {
        match = {
            ingredients: { $all: ingredients }
        }
    }

    //if only title
    if (!ingredients && title) {
        match = {
            title: { $regex: regex, $options: 'i' }
        }
    }
    /*
        Post.aggregate([
            {
                $match: { ingredients: { $in: ingredients } }
            },  {
                $project: {
                    postedBy: 1, title: 1, type: 1, images: 1, createdAt: 1, _id: 1,
                    likes: { $size: '$likes' }
                }
            }
        ]).exec(function (e, d) {
          //  console.log(d)
        })
    */

    try {

        Post.aggregate([
            { $match: match },

            {
                $project: {
                    postedBy: 1, title: 1, type: 1, images: 1, createdAt: 1, _id: 1,
                    likes: { $size: '$likes' }
                }
            }, {
                $lookup:
                {
                    from: "users",
                    let: { post_postedBy: "$postedBy" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and:
                                        [
                                            { $eq: ["$$post_postedBy", "$_id"] }
                                        ]
                                }
                            }
                        },
                        { $project: { username: 1, profileImageSrc: 1 } }
                    ],
                    as: "posted_by"
                }
            },
        ]).exec(function (e, d) {
            return res.status(200).json(d)
        })
    }

    catch (err) {
        return res.status(400).json(err)
    }


})


const uploadImages = async (req) => {
    const imagesUrl = []

    for (const singleFile of req.files) {
        const file = dataUri(singleFile).content;
        await cloudinary.v2.uploader.upload(file, {
            folder: 'recipe/posts',
        }).then(async (result) => {
            const image = result.url;
            imagesUrl.push(image)
        }).catch(err => res.status(400).json({
            messge: 'someting went wrong while processing your request',
            data: { err }
        }))
    }
    return imagesUrl
}

// save post image
router.post('/:id/update/images', verify, multerUploads, async (req, res) => {

    if (req.files) {
        try {
            const imagesUrl = await uploadImages(req)

            await Post.updateOne(
                { _id: req.params.id },
                {
                    images: [...imagesUrl]
                },
                { upsert: true, new: true },
                function (err, docs) {
                    if (err) res.status(401).json("Error occured")
                    return res.status(200).json(docs)
                })
        }

        catch (err) {
            console.log(err)
        }

    }
})

//saving post image
/*
router.post('/:id/update/', verify, upload.array('postImages', 10), async function (req, res) {

    const filenames = req.files.map(file => {
        return file.filename
    })
    try {

        await Post.updateOne(
            { _id: req.params.id },
            {
                images: [...filenames]
            },
            { upsert: true, new: true },
            function (err, docs) {
                if (err) res.status(401).json("Error occured")
                res.status(200).json(docs)
            })

    } catch (err) {
        console.log(err)
    }
})
*/


var likesRoute = require('./likes')
router.use(likesRoute)

var commentsRoute = require('./comments')
router.use(commentsRoute)

module.exports = router