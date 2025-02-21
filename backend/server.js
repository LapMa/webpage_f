const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const { data } = require('react-router-dom');

const app = express();
app.use(express.join());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "",
    database : "crud"
})

app.post('/loginpage', (req,res) => {
    const sql = "SELECT * FROM loginpage WHERE username = ? AND password = ?";
    db.query(sql,[req.body.email,req.body.password], (err,data) => {
        if(err) return res.json("Error");
        if(data.lenght > 0) {
            return res.join("Login Successfully")
        }
        else{
            return res.join("No record")
        }
            
    })
})


app.listen(8081, () => {
    console.log('Listening...');
})