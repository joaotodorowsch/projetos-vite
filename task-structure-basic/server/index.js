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

app.post("/", (req, res) => {
    const { task } = req.body
    const { time } = req.body
 
    let SQL = "INSERT INTO tasks ( task, time ) VALUES ( ?,? )"
 
    db.query(SQL, [task, time], (err, result) => {
     if(err)console.log(err)
     else res.send()
    })
 })

 app.post("/search", (req, res) => {
    const { task } = req.body;
    const { time } = req.body;
  
    let mysql =
      "SELECT * from tasks WHERE task = ? AND time = ? ";
    db.query(mysql, [task, time], (err, result) => {
      if (err) res.send(err);
      else res.send(result);
    });
  });

 app.get("/getData", (req, res) => {
    let SQL = "SELECT * from tasks"

    db.query(SQL, (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let mysql = "DELETE FROM tasks WHERE id = ?";
    db.query(mysql, id, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
  });

app.put("/edit", (req, res) => {

  const { id, task, time } = req.body

  let SQL = "UPDATE tasks SET task = ?, time = ? WHERE id = ?"

  db.query(SQL, [task, time, id], (err, result) => {
    if(err) console.log(err)
    else res.send(result)
  })

})

app.listen(5174, () => {
    console.log("Rodando servidor");
});