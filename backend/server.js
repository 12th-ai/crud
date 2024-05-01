// server.js

const express = require('express');
const bodyParser = require('body-parser');
require('express-async-errors');
const path = require('path');
const db = require('./db');
const cors = require('cors');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 3000;

const jwt = require('jsonwebtoken');


// routers 

const Authroutes  = require('./Routers/AuthRouter')




// middleware 

app.use(bodyParser.json());
app.use(cors()); 

app.use(express.json());
app.use('/',Authroutes);


app.post('/login',(req,res)=>{
  const sql = "SELECT * FROM users WHERE name = ? AND password = ? ";
  db.query(sql,[req.body.name,req.body.password],(err,data)=>{
    if(err){
      return res.json(err);
    }
    if(data.length > 0){
     const id = data[0].id;
  const token = jwt.sign({id},"jwtsecretkey",{expiresIn:3})
  return res.json({login:true,token,data});
  return res.json('yes');
    }
    else{
      return res.json('failed');
    }
  })
})



app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send('Something went wrong!');
});






app.listen(PORT,()=>{
    console.log(`connected to port of ${PORT}`);
})