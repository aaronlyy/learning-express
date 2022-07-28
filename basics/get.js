// basic app

// import express (npm install express)
const express = require('express');

// create a new app
const app = express();

// create a basic route (GET)
app.get('/', (req, res) => {
    // return json
    res.json(
        {
            id: 0,
            name: 'test'
        }
    )
})

// create a route with params
app.get('/p/:param', (req, res) => {
    console.log(`got ${req.params.param}`);
    res.send(`<h1>got ${req.params.param}</h1`);
})

// read query params
app.get('/q', (req, res) => {

})

// start server on a specific port
app.listen(3000, (req, res) => {
    console.log('Server listening on port 3000');
})