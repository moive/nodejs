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

router.get('/:id', async (req, res)=>{
    const id = req.params.id;

    try {
        const PetDB = await Pet.findOne({_id: id});
        console.log(PetDB);

        res.render('detail', {
            pet:PetDB,
            error: false,
            title:'Detail pet'
        });

    } catch (error) {
        console.log(error);
        res.render('detail', {
            error: true,
            message:'The selected id cannot be found',
            title:'Detail pet'
        });
    }
})

module.exports = router;