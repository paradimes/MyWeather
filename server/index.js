import Express from "express";
const app = Express();
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

// Database connectivity
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_COLLECTION,
});

app.use(cors());
app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Getting the values from database and sending it back as a response
app.get("/api/get/mobileMake/:prefix", (req, res) => {
  const prefix = req.params.prefix; // Get the prefix from the request URL
  const getItems = `SELECT distinct(city_country) FROM cities WHERE city_country LIKE '${prefix}%' LIMIT 10;`;
  db.query(getItems, (err, result, fields) => {
    res.send(result);
  });
});

// Confirm server is up and listening in port 3001
app.listen(3002, () => {
  console.log("Running in 3002!");
});
