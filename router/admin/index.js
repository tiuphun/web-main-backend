const Router = require('express').Router();
const request = require('request');
const helpers = require('../../helpers');

// Router.use(authenticate);

Router.post("/login", (req, res) => {
    console.log(JSON.stringify(req.body));
    let options = {
        url: 'http://localhost:4000/login',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    }
    request.post(options, (err, response) => {
        if(err) {
            return res.sendStatus(403);
        }
        if(response.statusCode >= 400) {
            return res.json({
                err: "Forbidden",
                message: "Incorrect username or password"
            });
        }
        res.json(JSON.parse(response.body))
    })

})

Router.post("/posts", (req, res) => {
    console.log(req.cookies);
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

function authenticate(req, res, next) {
    let options = {
        url: 'http://localhost:4000/authenticate',
        headers: {
            'Authorization': req.headers.authorization
        }
    }

    request.post(options, (err, response) => {
        if(err) {
            return res.sendStatus(400);
        }

        let body = JSON.parse(response.body);

        if(!body.user) {
            return res.sendStatus(403);
        }
        
        req.user = body.user;
        
        next();
    })
}

module.exports = Router;
