const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin123",
    database: "products"
})


client.connect();

function codeQuery() {
    client.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`, (err, res)=>{
        if(!err){
            var temp_codes = [];
            var product_codes = [];
            for(let i = 0; i < res.rows.length; i++){
                temp_codes.push(res.rows[i]);
                var code_obj = temp_codes[i];
                var code = code_obj[Object.keys(code_obj)[0]];
                product_codes.push(code);

            }
            tableQuery(product_codes[0]);
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
