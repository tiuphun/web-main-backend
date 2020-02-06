const Router = require("express").Router();
const helpers = require("../helpers");
const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const showdown = require("showdown");
const converter = new showdown.Converter();

const { Post, Event } = require('../models');

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

const base_url = path.dirname(__dirname);
Router.get("/posts", (req, res) => {
    Post.find({})
        .then(posts => res.json({posts}))
        .catch(res.sendStatus(400));
})

Router.get("/posts/:id", (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json({post}))
        .catch(console.log)
})

Router.get("/events", (req, res) => {
    Event.find({}, (err, data) => {
        if(err) {
            return res.sendStatus(400);
        } else {
            return res.json({events: data});
        }
        
    });
});

Router.get("/events/:id", (req, res) => {
    
    Event.findById(req.params.id,
        (err,data)=>{
            if(err){
                console.log(err);
            }
            res.json(data)
            
        })

    // fsPromises.readFile(
    //     `./public/events/${req.params.name}/markdown/index.md`,
    //     'utf8')
    //     .then((data) => {
    //         let html = converter.makeHtml(data);
    //         res.send(html);
    //     })
    //     .catch(console.log);
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