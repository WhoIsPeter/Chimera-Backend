// App dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:Hk3bFaV9lOI11GzE@cluster0-suad4.mongodb.net/chimera");

mongoose.connection.on('connected', () => {
    console.log('Connected to Chimera database')
});

mongoose.connection.on('error', () => {
    console.log('Error connecting to Chimera database')
});

// App definition
const app = express();
const port = 3000;

const users = require(('./routes/users'));

// CORS Middleware
app.use(cors());

// body-parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

// Index route
app.get('/', (req, res) => {
    res.send("Invalid endpoint");
});

// Start app
app.listen(port, () => {
    console.log("Server started on PORT: " + port);
});