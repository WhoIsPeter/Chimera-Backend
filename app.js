// App dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const connectionString = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00-xirsx.mongodb.net:27017,cluster0-shard-00-01-xirsx.mongodb.net:27017,cluster0-shard-00-02-xirsx.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;
mongoose.connect(connectionString);

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

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index route
app.get('/', (req, res) => {
    res.send("Invalid endpoint");
});

// Start app
app.listen(port, () => {
    console.log("Server started on PORT: " + port);
});