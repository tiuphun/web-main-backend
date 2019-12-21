const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    path = require("path"),
    helpers = require("./helpers");

const IP = helpers.getIP();
const PORT = process.env.port || 8080;
const routers = require("./router");
const public_dir = path.join(__dirname, 'public');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(public_dir));
app.use("", routers);

app.listen(PORT, IP, (err) => {
    if(err) return console.log(err);
    return console.log(`Server is running at ${IP} on port ${PORT}`);
});