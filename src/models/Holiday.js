// src/models/Holiday.js
const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({
  holiday_id: { type: String, required: true, unique: true },
  festival_name: { type: String, required: true },
  date: { type: Date, required: true },
  created_by: { type: String, required: true },
  updated_by: { type: String },
});

module.exports = mongoose.model('Holiday', holidaySchema);