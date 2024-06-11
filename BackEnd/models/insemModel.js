const mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");

const insemDto = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a name"],
  },
  semester: {
    type: String,
    required: [true, "Please add a semester"],
  },
  course: {
    type: String,
    required: [true, "Please add a course"],
  },
  pdf: {
    type: String,
    require: [true, "plese select your pdf"],
  },
});

module.exports = mongoose.model("insem", insemDto);