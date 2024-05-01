

const authservices = require('../Service/Auth.service');

const SignUP = async (req, res, next) => {
    try {
        // Check if the requested name already exists
    
        // If the requested name doesn't exist, proceed with creating the employee
        const User = await authservices.signup(req);
        res.json({message:'User created successfully'});
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
        console.log(error)
    }
};




module.exports = {
   SignUP
   

};