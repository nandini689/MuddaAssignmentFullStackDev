const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  // gender: {
  //   type: String,
  // },
  designation: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  employeecode: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  deletedAt: {
    type: String,
  },
});

const EmployeeDb = mongoose.model("employee_details", schema);

module.exports = EmployeeDb;
