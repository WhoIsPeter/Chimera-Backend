const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
    res.send('Registered!');
});

// Authenticate
router.get('/auth', (req, res, next) => {
    res.send('Registered!');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('Registered!');
});

module.exports = router;