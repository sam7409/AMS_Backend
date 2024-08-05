// src/controllers/thoughtController.js
const Thought = require('../models/Thought');

exports.getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.status(200).json(thought);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createThought = async (req, res) => {
  try {
    const newThought = new Thought(req.body);
    const savedThought = await newThought.save();
    res.status(201).json(savedThought);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.status(200).json(updatedThought);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteThought = async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.id);
    if (!deletedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.status(200).json({ message: 'Thought deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};