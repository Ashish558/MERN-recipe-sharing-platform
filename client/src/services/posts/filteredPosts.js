import axios from "axios";
import { domain } from "../constants";


export const getFilteredPosts = (filteredData, cb) => {
    const filtered = {}
    const { ingredients, title } = filteredData

    if (ingredients.length >= 1) filtered.ingredients = ingredients
    if (ingredients.length === 0) filtered.ingredients = false

    if (title !== '') filtered.title = title
    if (title === '') filtered.title = false


    axios.post(`${domain}/post/filtered`, { filtered }, {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(res =>  cb(null, res))
        .catch(err => cb(err, null))
}