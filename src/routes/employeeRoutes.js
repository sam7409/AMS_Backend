
// src/routes/employeeRoutes.js
const express = require('express');
const { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');

const router = express.Router();

router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;


// // src/routes/employeeRoutes.js
// const express = require('express');
// const { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
// const authenticate = require('../middleware/authMiddleware');

// const router = express.Router();

// router.get('/', authenticate, getAllEmployees);
// router.get('/:id', authenticate, getEmployeeById);
// router.post('/', authenticate, createEmployee);
// router.put('/:id', authenticate, updateEmployee);
// router.delete('/:id', authenticate, deleteEmployee);

// module.exports = router;