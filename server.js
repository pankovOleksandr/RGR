import express from "express";

import {MongoClient} from "mongodb"

require('dotenv').config();

let app = express();	
let db;
app.use(express.static('public'));

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
	if (err) throw err;
	db = database;
	const server = app.listen(8080, () => {
		console.log("Server is listening " + server.address().port);
	});
});

app.get("/data/links", (req, res) => {
	db.collection("links").find({}).toArray((err, links) => {
		if (err) throw err;

		res.json(links);
	});
});


