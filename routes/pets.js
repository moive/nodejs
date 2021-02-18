const express = require("express");
const router = express.Router();

const Pet = require("../models/pet");
const chalk = require("chalk");
let config = require("../config/config");

let setViewEngine = config.setViewEngine("hbs");
router.get("/", async (req, res) => {
    try {
        const pets = await Pet.find();

        res.render(`${setViewEngine}/pets`, {
            pets,
            title: "Pets",
        });
    } catch (error) {
        console.log(error);
    }
});

router.get("/create", (req, res) => {
    res.render(`${setViewEngine}/create`, {
        title: "Create a Pet",
    });
});

router.post("/", async (req, res) => {
    const body = req.body;
    try {
        // const petDB = new Pet(body);
        // await petDB.save();

        await Pet.create(body);

        res.redirect("/pets");
    } catch (error) {
        console.log(error);
    }
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const PetDB = await Pet.findOne({_id: id});
        console.log(PetDB);

        res.render(`${setViewEngine}/detail`, {
            pet: PetDB,
            error: false,
            title: "Detail pet",
        });
    } catch (error) {
        console.log(error);
        res.render(`${setViewEngine}/detail`, {
            error: true,
            message: "The selected id cannot be found",
            title: "Detail pet",
        });
    }
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const petDB = await Pet.findByIdAndDelete({_id: id});

        if (petDB) {
            res.json({
                status: true,
                message: "Eliminated!",
            });
        }
    } catch (error) {
        res.json({
            status: false,
            message: "Failure to remove!",
        });
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const petDB = await Pet.findByIdAndUpdate(id, body, {
            useFindAndModify: false,
        });

        res.json({
            status: true,
            message: "Edited",
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: "Failed",
        });
    }
});

module.exports = router;
