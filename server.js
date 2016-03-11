import express from "express";

let app = express();	

app.use(express.static('public'));

const server = app.listen(8080, () => {
	console.log("Server is listening " + server.address().port);
})

