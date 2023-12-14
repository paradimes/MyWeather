import Express from "express";
const app = Express();
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";

//Database connectivity
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "MYSQL_PASSWORD",
  database: "mobileMake",
});

app.use(cors());
app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Getting the values from database and sending it back as a response
app.get("/api/get/mobileMake/:prefix", (req, res) => {
  const prefix = req.params.prefix; // Get the prefix from the request URL
  const getItems = `SELECT distinct(city_country) FROM cities WHERE city_country LIKE '${prefix}%' LIMIT 10;`;
  db.query(getItems, (err, result, fields) => {
    // console.log("err = ", err);
    // console.log("sending", result);
    // res.send(["hello"]);
    res.send(result);
  });
});

//Just to cofirm that server is up and listening in port 3001
app.listen(3002, () => {
  console.log("Running in 3002!");
});
