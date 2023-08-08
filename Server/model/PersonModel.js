const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
  name: String,
  age: String,
  city: String,
});

module.exports = mongoose.model("person", PersonSchema);
