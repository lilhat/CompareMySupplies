// package import
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//firebase admin setup
let serviceAccount = require("./comparemymaterials-a2047-firebase-adminsdk-v09n3-d86979368e.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();



// declare static path
let staticPath = path.join(__dirname, "public");

// init express.js
const app = express();

//middlewares
app.use(express.static(staticPath));
app.use(express.json());

// routes
// home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

// signup route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})

app.post('/signup', (req, res) => {
    let {email, password, tac} = req.body;

    // form validations
    if(!email.length){
        return res.json({'alert': 'Email is required'});
    } else if(password.length < 6){
        return res.json({'alert': 'Password must be more than 6 characters'});
    } else if(!tac){
        return res.json({'alert': 'You must agree to the terms and conditions to sign up'});
    } 

    
    db.collection('comparemymaterials').doc(email).get()
    .then(user => {
        if(user.exists){
            return res.json({'alert': 'Email already exists'});
        } else{
            //encrypt the password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    req.body.password = hash;
                    db.collection('comparemymaterials').doc(email).set(req.body)
                    .then(data => {
                        res.json({
                            email: req.body.email,
                        })
                    })
                })
            })
        }
    });
})

// store user in db


// 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('listening on port 3000...');
})
