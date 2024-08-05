// src/models/Leave.js
const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  leave_id: { type: String, required: true, unique: true },
  employee_id: { type: String, required: true },
  date: { type: Date, required: true },
  leave_type: { type: String, required: true },
  reason: { type: String },
  created_by: { type: String, required: true },
  updated_by: { type: String },
});

module.exports = mongoose.model('Leave', leaveSchema);