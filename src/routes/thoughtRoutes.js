// src/routes/thoughtRoutes.js
const express = require('express');
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought } = require('../controllers/thoughtController');

const router = express.Router();

router.get('/', getAllThoughts);
router.get('/:id', getThoughtById);
router.post('/', createThought);
router.put('/:id', updateThought);
router.delete('/:id', deleteThought);

module.exports = router;