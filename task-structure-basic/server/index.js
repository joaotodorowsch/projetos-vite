const express = require("express");
const app = express();
const mySQL = require("mysql2");
const cors = require("cors");

const db = mySQL.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"db_tasklist",
})


app.use(cors())
app.use(express.json())

app.listen(5174, () => {
    console.log("Rodando servidor");
});