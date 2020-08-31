const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send("Mi respuesta desde el servidor express v.2");
});

app.get("/servicios", (req, res)=>{
    res.send("Estás en la vista de servicio.");
});

app.use((req, res, next)=>{
    res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, ()=>{
    console.log('Servidor a su servicio en el puerto: ', port);
});