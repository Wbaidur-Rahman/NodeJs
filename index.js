const express = require("express")
const mongoose = require('mongoose')

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');

const url = "mongodb://localhost:27017/nodeApp";

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, () => {

    console.log('Connected correctly to server');

});

const app = express()

app.use(express.json());

app.use('/dishes', dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders', leaderRouter);

app.listen(3000, () =>{
	console.log("Listening on port 3000...");
});

