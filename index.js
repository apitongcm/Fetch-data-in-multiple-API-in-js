if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch')


const api_key = process.env.API_KEY;
app.use(express.static('public'))

//getting api data RapidAPI for the pokemon name
app.get('/pokemon', async(request,response) => {
    const fetchApi =await fetch( // fetching the API using async
        "https://pokemon-go1.p.rapidapi.com/pokemon_names.json", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": "pokemon-go1.p.rapidapi.com"
            }
    })

    const pokemonNameRes = await fetchApi.json();
    response.json(pokemonNameRes);
});



//fetching from the API 
app.get('/pokeImage', async (request,response ) => {
    const fetchApi = await fetch(
        "https://bing-image-search1.p.rapidapi.com/images/search?q=pokemon&count=20", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    })

    const pokeImg = await fetchApi.json();
    response.json(pokeImg);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})