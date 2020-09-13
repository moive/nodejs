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

module.exports = router;