// src/routes/leaveRoutes.js
const express = require('express');
const { getAllLeaves, getLeaveById, createLeave, updateLeave, deleteLeave } = require('../controllers/leaveController');

const router = express.Router();

router.get('/', getAllLeaves);
router.get('/:id', getLeaveById);
router.post('/', createLeave);
router.put('/:id', updateLeave);
router.delete('/:id', deleteLeave);

module.exports = router;