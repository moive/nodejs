const http = require('http');

const server = http.createServer((req, res) => {
	console.log("respuesta del servidor....");
	
	res.end("Te envío un saludo desde el servidor con node js v2");
});

const port = 3000;

server.listen(port, ()=>{
	console.log("Listening...");
});