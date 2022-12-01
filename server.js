// package import
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// postgresql db
const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin123",
    database: "products"
})


client.connect();
var product_codes = [];
function codeQuery() {
    client.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`, (err, res)=>{
        if(!err){
            var temp_codes = [];
            for(let i = 0; i < res.rows.length; i++){
                temp_codes.push(res.rows[i]);
                var code_obj = temp_codes[i];
                var code = code_obj[Object.keys(code_obj)[0]];
                product_codes.push(code);

            }
            return product_codes;
        } else {
            console.log(err.message);
        }

    })
}


function tableQuery(code) {
    client.query(`SELECT * FROM ` + code + ` order by price ASC`, (err, res)=>{
        if(!err){
            var result = res.rows;
        } else {
            console.log(err.message);
        }
        return result;

    })
}


client.end;

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
    let {name, email, password, tac} = req.body;

    // form validations
    if(!name.length){
        return res.json({'alert': 'Name is required'});
    } else if(!email.length){
        return res.json({'alert': 'Email is required'});
    } else if(password.length < 6){
        return res.json({'alert': 'Password must be more than 6 characters'});
    } else if(!tac){
        return res.json({'alert': 'You must agree to the terms and conditions to sign up'});
    } 

    // store user in db
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
                            name: req.body.name,
                            email: req.body.email,
                        })
                    })
                })
            })
        }
    });
})

// login route
app.get('/signin', (req, res) => {
    res.sendFile(path.join(staticPath, "signin.html"))
})

app.post('/signin', (req, res) => {
    let { email, password } = req.body;

    if(!email.length || !password.length){
        return res.json({'alert': 'Please fill all the fields'})
    }

    db.collection('comparemymaterials').doc(email).get()
    .then(user => {
        if(!user.exists){
            return res.json({'alert': 'Provided email does not exist'})
        } else{
            bcrypt.compare(password, user.data().password, (err, result) => {
                if(result){
                    let data = user.data();
                    return res.json({
                        name: data.name,
                        email: data.email,
                    })
                } else{
                    return res.json({'alert': 'Incorrect password entered'});
                }
            })
        }
    })
})

app.post("/product.html",(req,res)=>{ 
    product_codes = codeQuery();
    tableQuery(product_codes[0]);
    
})


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
