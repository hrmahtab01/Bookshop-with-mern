const mongoose = require("mongoose");
function dbconnect() {
  mongoose
    .connect(process.env.Db_Url)
    .then(() => {
      console.log("db connected successfully");
    })
    .catch((error) => {
      console.log("something went wrong in database connection ");
    });
}
module.exports = dbconnect;
