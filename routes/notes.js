var express = require('express');
var router = express.Router();




const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://shunki:Shellingford4869@cluster0.k4qcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

router.get('/',async (req, res) => {

const database = client.db('notes');
const notes = database.collection('notes');


const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note);
})

module.exports = router
