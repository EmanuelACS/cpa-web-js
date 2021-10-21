const express = require('express');

// router
const router = express.Router(); 

router.get("/pets", (req, res) => {
    res.send("<h1>Pets area</h1>");
})

router.get("/pets/dogs", (req, res) => {
    res.send("<h1>Dogs area</h1>");
})

router.get("/pets/cats", (req, res) => {
    res.send("<h1>Cats area</h1>");
})

module.exports = router;