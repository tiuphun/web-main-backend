const app = require("express")(),
    bodyParser = require("body-parser"),
    cors = require("cors");
const PORT = process.env.port || 8080;
const routers = require("./router");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("", routers);

app.listen(PORT, (err) => {
    if(err) return console.log(err);
    return console.log(`Server is running on port: ${PORT}`);
});