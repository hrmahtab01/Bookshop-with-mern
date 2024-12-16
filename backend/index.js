const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const router = require("./Router");

app.use(express.json());
app.use(cors());
app.use(router)



app.listen(3030, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
