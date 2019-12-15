const Router = require("express").Router();
const helpers = require("../helpers");
const fs = require("fs"),
    fsPromises = fs.promises,
    showdown = require("showdown"),
    converter = new showdown.Converter();



Router.get("/posts", (req, res) => {
    fsPromises.readdir("./assets/posts")
    .then((posts) => {
        let titles = [];
        Promise.all(helpers.getPosts(posts))
        .then(data => {
            data.forEach((post) => {
                let _post = JSON.parse(post);
                titles.push(_post.title);
            });
            res.json(titles);
        })
        .catch(console.log)
    })
});

Router.get("/posts/:title", (req, res) => {
    helpers.getPost(req.params.title)
    .then((post) => {
        let metaData = JSON.parse(post[0]);
        let html = converter.makeHtml(post[1].normalize());
        res.json({html, metaData});
    })
    .catch(console.log);
})

Router.post("/posts", (req, res) => {
    helpers.createPost(req.body)
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
        `./assets/events/${req.params.name}/markdown/index.md`,
        'utf8')
    .then((data) => {
        let html = converter.makeHtml(data);
        res.send(html);
    })
    .catch(console.log);
})

module.exports = Router;