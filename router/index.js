const Router = require("express").Router();
const fsHelpers = require("../filesystem_helpers");
const fs = require("fs"),
    showdown = require("showdown"),
    converter = new showdown.Converter(),
    fsPromises = fs.promises;

Router.get("/posts", (req, res) => {
    fsPromises.readdir("./assets/posts")
    .then((posts) => {
        let titles = [];
        Promise.all(fsHelpers.getPosts(posts))
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

Router.get("/events", (req, res) => {
    fsPromises.readdir("./assets/events")
    .then(data => res.json(data))
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