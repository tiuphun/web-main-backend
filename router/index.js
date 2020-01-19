const Router = require("express").Router();
const helpers = require("../helpers");
const fs = require("fs"),
    fsPromises = fs.promises,
    path = require("path"),
    showdown = require("showdown"),
    converter = new showdown.Converter();

const mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

const {base_url} = require("../config.json");

Router.post("/login", (req, res) => {

})

Router.get("/posts/:title", (req, res) => {
    helpers.getPost(req.params.title)
    .then((post) => {
        let metadata = JSON.parse(post[0]);
        let html = converter.makeHtml(post[1].normalize());
        res.json({html, metadata});
    })
    .catch(console.log);
})

Router.post("/posts", (req, res) => {
    console.log({...req.body, author: req.user.name});
    helpers.createPost({...req.body, author: req.user.name})
    .then((data) => {
        res.json(data);
        helpers.log({
            message: "Successfully create post",
            data
        }, false);
    })
    .catch((error) => res.json(error));
});

Router.get("/events", (req, res) => {
    helpers.getEvents()
    .then((data) => res.json(data))
    .catch(console.log);
});

Router.get("/events/:name", (req, res) => {
    fsPromises.readFile(
        `./public/events/${req.params.name}/markdown/index.md`,
        'utf8')
    .then((data) => {
        let html = converter.makeHtml(data);
        res.send(html);
    })
    .catch(console.log);
});

Router.get("/public/*", (req, res) => {
    var file = path.join(base_url, req.path);
    var type = mime[path.extname(file).slice(1)] || 'text/plain';
    var s = fs.createReadStream(file);
    s.on('open', function () {
        res.set('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function () {
        res.set('Content-Type', 'text/plain');
        res.status(404).end('Not found');
    });
});

module.exports = Router;
