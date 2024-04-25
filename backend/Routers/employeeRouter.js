// routers/employeeRouter.js

const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.getAllEmployees);
// Add routes for other CRUD operations as needed
// For example://
router.post('/', employeeController.CreateEmployee);
router.get('/:id', employeeController.getAllEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
