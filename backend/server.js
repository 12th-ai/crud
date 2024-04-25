const express = require('express');
const app = express()

const db = require('./db')

db.query("SELECT 1")
.then(data=>console.log('connected'))
.catch(err =>console.log(err));