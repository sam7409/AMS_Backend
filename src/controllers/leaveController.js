// src/controllers/leaveController.js
const Leave = require('../models/Leave');

exports.getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLeaveById = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);
    if (!leave) {
      return res.status(404).json({ message: 'Leave not found' });
    }
    res.status(200).json(leave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLeave = async (req, res) => {
  try {
    const newLeave = new Leave(req.body);
    const savedLeave = await newLeave.save();
    res.status(201).json(savedLeave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLeave = async (req, res) => {
  try {
    const updatedLeave = await Leave.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLeave) {
      return res.status(404).json({ message: 'Leave not found' });
    }
    res.status(200).json(updatedLeave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLeave = async (req, res) => {
  try {
    const deletedLeave = await Leave.findByIdAndDelete(req.params.id);
    if (!deletedLeave) {
      return res.status(404).json({ message: 'Leave not found' });
    }
    res.status(200).json({ message: 'Leave deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};