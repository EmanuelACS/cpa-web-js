const express = require('express');

// router
const router = express.Router(); 

router.get("/", (req, res) => {
    res.send("<h1>Cities area</h1>");
})

router.get("/kingston", (req, res) => {
    res.send("<h1>Kingston area</h1>");
})

router.get("/ottawa", (req, res) => {
    res.send("<h1>Ottawa area</h1>");
})

module.exports = router;