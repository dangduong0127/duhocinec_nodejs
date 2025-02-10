const db = require("../models");
const User = db.User;

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    return users;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllUsers };
