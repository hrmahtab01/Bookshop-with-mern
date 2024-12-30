const userModel = require("../Models/userModel");
async function registerController(req, res) {
  const { name, email, password } = req.body;
  try {
    const user = await userModel.create({ name, email, password });
    res.status(201).send({ message: "user created successfully", user });
  } catch (error) {
    console.log(error);
  }
}

function Logincontroller(req, res) {
  res.status(200).send("login successfully");
}

module.exports = { registerController, Logincontroller }
