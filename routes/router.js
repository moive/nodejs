const express = require("express");
const router = express.Router();
const chalk = require("chalk");
let config = require("../config/config");

let setViewEngine = config.setViewEngine("hbs");

router.get("/", (req, res) => {
    // console.log(chalk.red(config.setViewEngine()));
    res.render(`${setViewEngine}/index`, {title: "Home"});
});

router.get("/services", (req, res) => {
    res.render(`${setViewEngine}/services`, {title: "Services"});
});

module.exports = router;
