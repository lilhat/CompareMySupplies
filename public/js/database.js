const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5423,
    password: "admin123",
    database: "products"
})

client.connect();

client.query(`SELECT * FROM information_schema.tables WHERE table_schema = 'public'`, (err, res)=>{
    if(!error){
        console.log(res.rows);
    } else {
        console.log(error.message);
    }
    client.end;
})