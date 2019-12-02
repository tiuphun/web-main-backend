const fs = require("fs"),
    fsPromises = fs.promises;

function getPosts(dirs) {
    let promises = [];
    dirs.forEach((dir) => {
        promises.push(
            fsPromises.readFile(
            `./assets/posts/${dir}/data.json`,
            'utf8'
        ));
    })
    return promises;
}

function getEvents(res) {
    fsPromises.readdir("./assets/events") 
    .then(files => res.json(files))
    .catch(console.log);
}

module.exports = {
    getPosts,
    getEvents
}