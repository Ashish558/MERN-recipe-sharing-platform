
var express = require('express')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

var User = require('../models/users')
const { registerValidation, loginValidation } = require("../validation")
const verify = require('./verifyToken')

var router = express.Router()

//Post in signup
router.post('/register', async function (req, res) {
   const { username, firstName, lastName, password } = req.body

   const { error } = registerValidation(req.body)
   //check errors 
   if (error) return res.status(400).json(error.details[0].message)

   const usernameExist = await User.findOne({ username })
   if (usernameExist) return res.status(400).json("Username already exists")

   //hash password
   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password, salt)

   //save user in db
   var newUser = new User({
      name: {
         first: firstName,
         last: lastName
      },
      username,
      password: hashedPassword,
      profileImageSrc: "https://res.cloudinary.com/due9g6njy/image/upload/v1646808359/recipe/profile/default_y72rh0.jpg"
   })

   await newUser.save()
      .then(async () => {
         res.json('success')
      })
      .catch(err => res.status(401).json("An error occured try again"))
})


//login
router.post('/login', async function (req, res) {
   const { username, password } = req.body
   const { error } = loginValidation(req.body)

   //check input errors
   if (error) return res.status(400).json(error.details[0].message)


   //check if user exists
   try {
      const user = await User.findOne({ username })
      if (!user) return res.status(400).json("username does not exists")

      //check pass
      const validPass = await bcrypt.compare(password, user.password)
      if (!validPass) return res.status(400).json("Wrong Password")

      //set jwt
      const token = await jwt.sign({ _id: user._id }, process.env.SECRET)

      const data = {
         token: token,
         user_id: user._id,
         username: user.username,
         user_img: user.profileImageSrc
      }
      res.header("auth-token", token).json(data)
   }

   catch (err) {
      console.log(err)
      return res.status(400).json("Check internet")
   }

})

router.get('/verify/auth', verify, async function (req, res) {
   res.status(200).json(req.user._id)
})

module.exports = router
