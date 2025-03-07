import bodyParser from "body-parser";
import pg from "pg";
import express from "express";

const app = express();
const port = 3001;

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Access-Control-Allow-Headers"
    );
    next();
  });
app.use(bodyParser.json());

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  port: 5432,
});

db.connect();

async function getTasks() {
  const res = await db.query("SELECT * FROM tasks ORDER BY id ASC");
  console.log(res.rows);
  return res.rows;
}

async function addTask(newTask) {
  try {
    const result = await db.query("INSERT INTO tasks (task) VALUES ($1) RETURNING *;", [
      newTask.content
    ]);
    return result.rows[0];
  } catch (err) {
    console.log(err);
  }
}

async function deleteTask(id) {
  try {
    await db.query("DELETE FROM tasks WHERE id = $1", [id]);
  } catch (err) {
    console.log(err);
  }
}
app.get("/tasks", (req, res) => {
  getTasks()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/newTask", (req, res) => {
  addTask(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete("/task/:id", (req, res) => {
  deleteTask(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});