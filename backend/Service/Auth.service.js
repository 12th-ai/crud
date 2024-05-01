
const db = require('../db');

const createUser = async (req) => {   

 const values=[
        req.body.name,
        req.body.email,
        req.body.password,
        req.file.filename
    ]
    const [rows] = await db.query('INSERT INTO users (name,email,password,profilePic) VALUES (?) ',[values]);
   
    return rows;
};





module.exports = {
  createUser,

    
};