
const { default: axios } = require('axios')
var express = require('express')

var verify = require('../verifyToken')

var router = express.Router()

router.post('/complexSearch', async (req, res) => {
    const { ingredients, title, offset } = req.body

    axios.get("https://api.spoonacular.com/recipes/complexSearch", {
        params: {
            ...(title) && { query: title },
            ...(ingredients.length >= 1) && { includeIngredients: ingredients.join(',') },
            offset,
            apiKey: process.env.SPOONACULAR_API_KEY
        }
    })
        .then(data => {
            res.status(200).json(data.data)
        })
        .catch(err => res.json(err))
})

router.post('/complexSearch/title', async (req, res) => {
    const { title } = req.body

    axios.get("https://api.spoonacular.com/recipes/complexSearch", {
        params: {
            query: title,
            apiKey: process.env.SPOONACULAR_API_KEY
        }
    })
        .then(data => {
            res.status(200).json(data.data)
        })
        .catch(err => res.json(err))
})

router.get('/complexSearch/:id', async (req, res) => {

    const id = req.params.id
    axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
        params: {
            instructions: true,
            apiKey: process.env.SPOONACULAR_API_KEY
        }
    })
        .then(data => {
            res.status(200).json(data.data)
        })
        .catch(err => res.json(err))
})

router.get('/complexSearch/:id/similar', async (req, res) => {

    const id = req.params.id
    axios.get(`https://api.spoonacular.com/recipes/${id}/similar`, {
        params: {
            instructions: true,
            apiKey: process.env.SPOONACULAR_API_KEY
        }
    })
        .then(data => {
            res.status(200).json(data.data)
        })
        .catch(err => res.json(err))
})

router.post('/complexSearch/images', async (req, res) => {

    const { ids } = req.body

    axios.get(
        `https://api.spoonacular.com/recipes/informationBulk`, {
        params: {
            ids: ids.join(','),
            apiKey: process.env.SPOONACULAR_API_KEY
        }
    })
        .then(data => {
            res.status(200).json(data.data)
        })
        .catch(err => res.json(err))
})

module.exports = router

