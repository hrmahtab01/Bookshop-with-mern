const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();

app.use(express.json());
app.use(cors());



app.listen(3030, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
