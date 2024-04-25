// services/employeeService.js

const db = require('../db');

const getAllEmployees = async () => {    
        const [rows] = await db.query('SELECT * FROM employee');
        return rows;
};

const getAllEmployeeByID = async (id) => {    
    const [rows] = await db.query('SELECT * FROM employee WHERE id = ? ',[id]);
    return rows;
};

const DeleteByID = async (id) => {    
    const [rows] = await db.query('DELETE FROM employee WHERE id = ? ',[id]);
    return rows;
};


const createEmployee = async (req) => {    
    const values = [
        req.body.name,
        req.body.employee_code,
        req.body.salary
    ];

    
    const [rows] = await db.query('INSERT INTO employee (name,employee_code,salary) VALUES (?) ',[values]);
   
    return rows;
};

 
const updateEmployeeByID = async (id,req) => {    
    const values = [
        req.body.name,
        req.body.employee_code,
        req.body.salary
    ];
    const [rows] = await db.query('UPDATE employee SET name = ?, employee_code = ?, salary = ? WHERE id = ? ',[...values,id]);
   
    return rows;
};



// Define other service functions as needed...

module.exports = {
    getAllEmployees,
    getAllEmployeeByID,
    createEmployee,
    DeleteByID,
    updateEmployeeByID
    
};
