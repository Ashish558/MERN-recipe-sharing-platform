var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors')

require("dotenv").config()

var app = express();

const corsOptions = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization', "auth-token"],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost:3000',
  preflightContinue: false,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static(__dirname + "/public"))

const uri1 = "mongodb://ash:1234@cluster0-shard-00-00.dyw2u.mongodb.net:27017,cluster0-shard-00-01.dyw2u.mongodb.net:27017,cluster0-shard-00-02.dyw2u.mongodb.net:27017/Recipe?ssl=true&replicaSet=atlas-xnnv2d-shard-0&authSource=admin&retryWrites=true&w=majority"

const uri = 'mongodb+srv://ash:1234@cluster0.dyw2u.mongodb.net/Recipe?retryWrites=true&w=majority'
mongoose.connect(uri1, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err))

mongoose.connection.on("connected", () => {
  console.log("connected successfully !!!")
})
mongoose.connection.on("error", () => {
  console.log("error")
})

const routes = require('./routes/routes')
app.use(routes)

const PORT = process.env.PORT || 4000
app.listen(PORT)
console.log('server on')
