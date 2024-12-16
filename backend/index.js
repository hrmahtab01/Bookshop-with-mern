const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Router");
const dotenv = require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(router)



app.listen(3030, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
