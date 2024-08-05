// src/routes/checkInOutRoutes.js
const express = require('express');
const { getAllCheckInOuts, getCheckInOutById, createCheckInOut, updateCheckInOut, deleteCheckInOut } = require('../controllers/checkInOutController');

const router = express.Router();

router.get('/', getAllCheckInOuts);
router.get('/:id', getCheckInOutById);
router.post('/', createCheckInOut);
router.put('/:id', updateCheckInOut);
router.delete('/:id', deleteCheckInOut);

module.exports = router;