const Router = require('express').Router();
const request = require('request');
const helpers = require('../../helpers');

Router.post("/login", (req, res) => {
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

Router.post("/posts", authenticate, (req, res) => {
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
        url: 'http://localhost:4000/verify',
        headers: {
            'Authorization': req.headers.authorization
        }
    }

    request.post(options, (err, response) => {
        if(err) {
            return res.sendStatus(400);
        }
        
        let body;
        try {
             body = JSON.parse(response.body);
        } catch(err) {
            console.log9(err);
            return res.sendStatus(400);
        }

        if(!body.user) {
            return res.sendStatus(403);
        }
        
        req.user = body.user;
        
        next();
    })
}

module.exports = Router;
