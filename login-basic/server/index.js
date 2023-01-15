const express = require("express");
const app = express();
const mySQL = require("mysql2");
const cors = require("cors")

const db = mySQL.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "db_loginv2",
})

app.use(cors());
app.use(express.json())

app.post("/register", (req, res) => {
   const { username } = req.body
   const { password } = req.body

   let SQL = "INSERT INTO users ( username, password ) VALUES ( ?,? )"

   db.query(SQL, [username, password], (err, result) => {
    console.log(err)
   })
})

app.get("/getData", (req, res) => {
    let SQL = "SELECT * from users"

    db.query(SQL, (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})



app.listen(5174, () => {
    console.log('executando')
})