// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const locationRoutes = require('./routes/locationRoutes');
const checkInOutRoutes = require('./routes/checkInOutRoutes');
const leaveRoutes = require('./routes/leaveRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');
const holidayRoutes = require('./routes/holidayRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/checkinout', checkInOutRoutes);
app.use('/api/leaves', leaveRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/holidays', holidayRoutes);

module.exports = app;