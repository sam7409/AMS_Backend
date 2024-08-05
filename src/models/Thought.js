// src/models/Thought.js
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thought_id: { type: String, required: true, unique: true },
  employee_id: { type: String, required: true },
  thought: { type: String, required: true },
  created_by: { type: String, required: true },
  updated_by: { type: String },
});

module.exports = mongoose.model('Thought', thoughtSchema);