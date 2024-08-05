// src/controllers/holidayController.js
const Holiday = require('../models/Holiday');

exports.getAllHolidays = async (req, res) => {
  try {
    const holidays = await Holiday.find();
    res.status(200).json(holidays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHolidayById = async (req, res) => {
  try {
    const holiday = await Holiday.findById(req.params.id);
    if (!holiday) {
      return res.status(404).json({ message: 'Holiday not found' });
    }
    res.status(200).json(holiday);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createHoliday = async (req, res) => {
  try {
    const newHoliday = new Holiday(req.body);
    const savedHoliday = await newHoliday.save();
    res.status(201).json(savedHoliday);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateHoliday = async (req, res) => {
    try {
    const updatedHoliday = await Holiday.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHoliday) {
    return res.status(404).json({ message:'Holiday not found' });
    }
    res.status(200).json(updatedHoliday);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    };

    exports.deleteHoliday = async (req, res) => {
        try {
        const deletedHoliday = await Holiday.findByIdAndDelete(req.params.id);
        if (!deletedHoliday) {
        return res.status(404).json({ message: 'Holiday not found' });
        }
        res.status(200).json({ message: 'Holiday deleted successfully' });
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
        };

