import express from "express";

import {MongoClient} from "mongodb"

require('dotenv').config();

let app = express();	

app.use(express.static('public'));

const server = app.listen(8080, () => {
	console.log("Server is listening " + server.address().port);
});

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
	if (err) throw err;

	database.collection("links").find({}).toArray((err, links) => {
		if (err) throw err;

		console.log(links);
	})
})

