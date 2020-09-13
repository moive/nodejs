const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//conexion database
const mongoose = require('mongoose');
const user = 'pets_dev';
const password = 'G6uItD3o2JPmx1fR';
const database = 'veterenary';
const uri = `mongodb+srv://${user}:${password}@cluster0.0kfw6.mongodb.net/${database}?retryWrites=true&w=majority`;

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