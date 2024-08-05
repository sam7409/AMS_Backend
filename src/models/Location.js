// src/models/Location.js
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  location_id: { type: String, required: true, unique: true },
  site_name: { type: String, required: true },
  location: { type: String, required: true },
  allowed_radius: { type: Number, required: true },
  location_type: { type: String, required: true },
  status: { type: String, required: true },
  created_by: { type: String, required: true },
  updated_by: { type: String },
});

module.exports = mongoose.model('Location', locationSchema);