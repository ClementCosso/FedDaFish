const bcrypt = require("bcrypt");

const bcryptSalt = 10;

module.exports = [
  {
    firstName: "Clément",
    lastName: "Cosso",
    image: "images/pangong-tso.png",
    quote: "il faut pas pousser Mehdi dans les orties",
    email: "clement@relevanc.com",
    admin: true,
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    firstName: "Mathias",
    lastName: "Leclercq",
    image: "images/pangong-tso.png",
    quote: "il faut pas pousser Lucien dans les orties",
    email: "mathias@relevanc.com",
    admin: false,
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    firstName: "Lucien",
    lastName: "Varacca",
    image: "images/pangong-tso.png",
    quote: "il faut pas pousser Mehdi dans les orties",
    email: "lucien@relevanc.com",
    admin: false,
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    firstName: "Yong Yan",
    lastName: "Deng",
    image: "images/pangong-tso.png",
    quote: "il faut pas pousser Mehdi dans les orties",
    email: "yongyan@relevanc.com",
    admin: false,
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    firstName: "Nizar",
    lastName: "Fawal",
    image: "images/pangong-tso.png",
    quote: "il faut pas pousser Mehdi dans les orties",
    email: "nizar@relevanc.com",
    admin: true,
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt))
  }
];
