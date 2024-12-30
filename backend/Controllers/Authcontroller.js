const emailvalidationCheck = require("../helpers/emailvalidation");
const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).send({ message: "all fields are required" });
  }
  const exitingUser = await userModel.findOne({ email });
  if (exitingUser) {
    res.status(400).send({ message: "user already exits" });
  }
  if (!emailvalidationCheck(email)) {
    return res.status(400).send({ message: "invalid email" });
  }
  bcrypt.hash(password, 10, async function (err, hash) {
    try {
      const user = await userModel.create({ name, email, password: hash });
      res.status(201).send({ message: "user created successfully", user });
    } catch (error) {
      res.status(400).send({ message: "something went wrong" });
    }
  });
}

async function Logincontroller(req, res) {
  const { email, password } = req.body;

  try {
    const userdata = await userModel.findOne({ email });
    if (userdata) {
      bcrypt.compare(password, userdata.password, function (err, result) {
        if (err) {
          return res.status(400).send("something went wrong in password");
        }
        if (result) {
          let token = jwt.sign({ userdata }, process.env.secret_key, {
            expiresIn: "1h",
          });
          res.status(200).send({ message: "login successfully", token });
        } else {
          res.status(400).send("user credentials");
        }
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { registerController, Logincontroller };
