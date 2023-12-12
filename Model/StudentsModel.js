const mongoose = require("mongoose");

const StudentsSchema = new mongoose.Schema({
  RollNo: { type: Number, unique: true, required: true },

  Name: { type: String, required: true },
  DOB: { type: Date, required: true },

  Score: { type: Number, required: true },
});
const Students = mongoose.model("students", StudentsSchema);

module.exports = Students;
