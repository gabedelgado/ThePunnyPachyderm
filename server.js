const express = require("express");
const bodyParser = require("body-parser");
// create database for items , fill with tests items for sale (by type (totes, tumblers, stickers, etc.))
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const infotosend = {"customers": [{
    "id": 1,
    "fName": "Gabriel", 
    "lName": "Delgado"
}, 
{
    "id": 1,
    "fName": "Esteban", 
    "lName": "Lucho"
}, 
{
    "id": 3, 
    "fName": "Maria",
    "lName": "Penagaricano"
}]}


app.route("/api/getinfo")

.get((req, res) => {
    res.json(infotosend);
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
})