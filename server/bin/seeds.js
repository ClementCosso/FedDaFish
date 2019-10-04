// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const bcryptSalt = 10;

mongoose
  .connect("mongodb://localhost/FedDaFish", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

let users = require("./seed_users");

User.deleteMany()
  .then(() => {
    return User.create(users);
  })
  .then(users => {
    console.log(users);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log("error", err);
    ("wiiii");
    mongoose.connection.close();
  });
