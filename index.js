const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('Views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index", {title: "Home"});
});

app.get("/servicios", (req, res)=>{
    res.render("servicios", {title: "Servicios"});
});

app.use((req, res, next)=>{
    res.status(404).render("404", {title:"404"});
});

app.listen(port, ()=>{
    console.log('Servidor a su servicio en el puerto: ', port);
});