const express = require('express');
const leaderRouter = express.Router();
const bodyParser = require('body-parser');
 
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res) => {
		res.send(`${req.method} request on Leader router`)
	})

leaderRouter.route('/:leaderId')
.get((req,res) => {
	res.send(`Get request on Leader Id = ${req.params.leaderId}`)
})

.post((req,res) => {
	res.send(`Post request on Leader Id = ${req.params.leaderId}`)
})

.put((req,res) => {
	res.send(`Put request on Leader Id = ${req.params.leaderId}`)
})

.delete((req,res) => {
	res.send(`Delete request on Leader Id = ${req.params.leaderId}`)
})

.all((req, res) => {
		res.send('Invalid Request')
	})

module.exports = leaderRouter;