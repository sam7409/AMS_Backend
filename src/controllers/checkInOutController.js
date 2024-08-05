// src/controllers/checkInOutController.js
const CheckInOut = require('../models/CheckInOut');

exports.getAllCheckInOuts = async (req, res) => {
  try {
    const checkInOuts = await CheckInOut.find();
    res.status(200).json(checkInOuts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCheckInOutById = async (req, res) => {
  try {
    const checkInOut = await CheckInOut.findById(req.params.id);
    if (!checkInOut) {
      return res.status(404).json({ message: 'CheckInOut not found' });
    }
    res.status(200).json(checkInOut);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCheckInOut = async (req, res) => {
  try {
    const newCheckInOut = new CheckInOut(req.body);
    const savedCheckInOut = await newCheckInOut.save();
    res.status(201).json(savedCheckInOut);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCheckInOut = async (req, res) => {
  try {
    const updatedCheckInOut = await CheckInOut.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCheckInOut) {
      return res.status(404).json({ message: 'CheckInOut not found' });
    }
    res.status(200).json(updatedCheckInOut);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCheckInOut = async (req, res) => {
  try {
    const deletedCheckInOut = await CheckInOut.findByIdAndDelete(req.params.id);
    if (!deletedCheckInOut) {
      return res.status(404).json({ message: 'CheckInOut not found' });
    }
    res.status(200).json({ message: 'CheckInOut deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};