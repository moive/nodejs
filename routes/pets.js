const express = require('express');
const router = express.Router();

const Pet = require('../models/pet');

router.get('/',async (req, res)=>{
    try {
        const pets = await Pet.find();
        
        res.render("pets", {
            pets,
            title:'Pets'
        });
    } catch (error) {
        console.log(error);
    }

});

router.get('/create', (req, res)=>{
    res.render("create", {
        title:'Create a Pet'
    });
});

router.post('/', async (req, res) => {
    const body = req.body;
    try {
        // const petDB = new Pet(body);
        // await petDB.save();

        await Pet.create(body);

        res.redirect('/pets');
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;