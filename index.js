const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    path = require("path"),
    helpers = require("./helpers");

// const IP = helpers.getIP();
// const IP = "192.168.1.101";
const PORT = 8080;
const routers = require("./router");
const admin_router = require("./router/admin");
const public_dir = path.join(__dirname, 'public');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(public_dir));
app.use("/admin", admin_router);
app.use("", routers);

app.listen(PORT, (err) => {
    if(err) return console.log(err);
    return console.log(`Server is running on port ${PORT}`);
});
