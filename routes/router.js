const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {title: "Home"});
});

router.get("/services", (req, res)=>{
    res.render("services", {title: "Services"});
});

module.exports = router;