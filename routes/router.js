const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {title: "Home"});
});

router.get("/servicios", (req, res)=>{
    res.render("servicios", {title: "Servicios"});
});

module.exports = router;