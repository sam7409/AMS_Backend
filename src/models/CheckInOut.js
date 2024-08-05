// src/models/CheckInOut.js
const mongoose = require('mongoose');

const checkInOutSchema = new mongoose.Schema({
  checkinout_id: { type: String, required: true, unique: true },
  employee_id: { type: String, required: true },
  checkin_time: { type: Date, required: true },
  checkout_time: { type: Date },
  location_id: { type: String, required: true },
  created_by: { type: String, required: true },
  updated_by: { type: String },
});

module.exports = mongoose.model('CheckInOut', checkInOutSchema);