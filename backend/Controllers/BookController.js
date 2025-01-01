const bookmodel = require("../Models/Book.model");

async function getBook(req, res) {
  try {
    let bookdata = await bookmodel.find({});
    res.status(200).send(bookdata);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}
module.exports = { getBook };
