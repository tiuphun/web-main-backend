const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    path = require("path"),
    fs = require("fs");
const PORT = process.env.port || 8080;
const routers = require("./router");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const public_dir = path.join(__dirname, 'public');

app.use(express.static(public_dir));
app.use("", routers);

app.listen(PORT, (err) => {
    if(err) return console.log(err);
    return console.log(`Server is running on port: ${PORT}`);
});
