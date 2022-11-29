// package import
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const { restart } = require('nodemon');
const path = reuqire('path');


// init express.js
const app = express();

//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(3000, () => {
    console.log('listening on port 3000...')
})
