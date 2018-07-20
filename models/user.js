const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  context: { type: String, required: false },
  type: { type: String, required: false },
  address: { type: String, required: true },
  country: { type: String, required: false },
  publicKey: { type: String, required: true },
  publicEncKey: { type: String, required: true },
  email: { type: String, required: true },
  avatar: {
    uri: { type: String, required: false }
  },
  phone: { type: String, required: true },
  pushToken: { type: String, required: false },
  networkAddress: { type: String, required: false },
  rinkebyID: { type: String, required: false }
});

const User = mongoose.model("User", userSchema);

module.exports = User;