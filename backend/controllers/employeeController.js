// Controllers/employeeController.js

const employeeService = require('../services/ employee.Service');

const getAllEmployees = async (req, res, next) => {
    try {
        const employees = await employeeService.getAllEmployees();
        res.json(employees);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

const getAllEmployee = async (req, res, next) => {
    try {
        const employee = await employeeService.getAllEmployeeByID(req.params.id);
        res.json(employee);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

const deleteEmployee = async (req, res, next) => {
    try {
        const employee = await employeeService.DeleteByID(req.params.id);
        res.json({message:'delete data '});
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

const CreateEmployee = async (req, res, next) => {
    try {
        // Check if the requested name already exists
        const employees = await employeeService.getAllEmployees();
        const existingEmployee = employees.find(employee => employee.name === req.body.name);
        if (existingEmployee) {
            // If an employee with the same name already exists, send a response indicating that the employee exists
            return res.status(409).json({ message: 'Employee already exists' });
        }
        
        // If the requested name doesn't exist, proceed with creating the employee
        const employee = await employeeService.createEmployee(req);
        res.json({message:'employee created successfully'});
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

const updateEmployee = async (req, res, next) => {
    try {
        const id = req.params.id;
        const employee = await employeeService.updateEmployeeByID(id, req);
        res.json({message:'employee updated successfully'});
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

module.exports = {
    getAllEmployees,
    getAllEmployee,
    CreateEmployee,
    deleteEmployee,
    updateEmployee

};
