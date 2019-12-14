const fs = require("fs"),
    fsPromises = fs.promises;

function log({message, data}, error) {
    let errorMessage = "There was an error!";
    let successMessage = "Succeeded!";
    console.log((error) ? errorMessage : successMessage);
    console.log(JSON.stringify(data));
}

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

function createPost({title, markdown}) {
    let dirName = title.toLowerCase().split(' ').join('_');
    return new Promise((resolve, reject) => {
        fsPromises.mkdir(`./assets/posts/${dirName}`)
        .then(() => {
            let promises = [
                // Create data.json file
                fsPromises.writeFile(
                    `./assets/posts/${dirName}/data.json`,
                    JSON.stringify({
                        date: new Date(), 
                        title
                    })),
                // Create markdown file 
                fsPromises.writeFile(
                    `./assets/posts/${dirName}/index.md`,
                    markdown)
            ];
            Promise.all(promises)
            .then((data) => resolve({
                message: "Successfully create new post", 
                title
            }));
        })
        .catch((error) => reject(error))
    })   
}

function getPost(title) {
    let dirName = title.toLowerCase().split(' ').join('_');
    return fsPromises.readFile(
        `./assets/posts/${dirName}/index.md`,
        'utf8');
}

function getEvents() {
    return fsPromises.readdir("./assets/events") 
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    getEvents,
    log
}