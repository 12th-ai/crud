// server.js

const express = require('express');
const bodyParser = require('body-parser');
const employeeRouter = require('./Routers/employeeRouter');
require('express-async-errors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Mount employeeRouter for handling employee routes
app.use('/api/employees', employeeRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send('Something went wrong!');
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
