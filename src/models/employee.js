// src/models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employee_id: { type: String, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  designation: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date },
  created_by: { type: String, required: true },
  updated_by: { type: String },
});

module.exports = mongoose.model('Employee', employeeSchema);