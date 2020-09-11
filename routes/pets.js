const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.render("pets", {
        pets: [
            {id:'ab001', name:'Leal', description:'Leal description'},
            {id:'ab002', name:'Boby', description:'Boby description'},
        ],
        title:'Pets'
    });
});

module.exports = router;