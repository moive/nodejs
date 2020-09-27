const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require("dotenv").config();

const port = process.env.PORT || 3000;

//conexion database
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.0kfw6.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('Conected database'))
    .catch(e => console.log(e));

//motor de plantillas
app.set('view engine', 'ejs');
app.set('Views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));
// Routes api
app.use('/', require('./routes/router'));
app.use('/pets', require('./routes/pets'));

app.use((req, res, next)=>{
    res.status(404).render("404", {title:"404"});
});

app.listen(port, ()=>{
    console.log('Servidor a su servicio en el puerto: ', port);
});