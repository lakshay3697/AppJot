const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/login',(req,res) => {
    res.send("Login");
});

router.get('/register',(req,res) => {
    res.send("Register");
});

module.exports = router;