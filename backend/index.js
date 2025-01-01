const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const router = require("./Router");
const dbconnect = require("./Dbconfig/dbconnection");
dbconnect()

app.use(express.json());
app.use(cors());
app.use(router)

const port = process.env.Port

app.listen(port, () => {
  console.log(`server is running on port ${port}` );
});
