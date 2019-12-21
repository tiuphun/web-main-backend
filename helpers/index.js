const fs = require("fs"),
    fsPromises = fs.promises,
    os = require("os");

function getIP() {
    let ifaces = os.networkInterfaces();

    let IPs = [];

    Object.keys(ifaces).forEach((ifname) => {
        if (ifname !== 'Wi-Fi') {
            return;
        }

        ifaces[ifname].forEach((iface) => {
            if('IPv4' !== iface.family || iface.internal !== false) {
                return;
            } else {
                IPs.push(iface.address);
                console.log(iface);
            }
        })
    });
    console.log(IPs);
    return IPs[0];
}

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
            `./public/posts/${dir}/data.json`,
            'utf8'
        ));
    })
    return promises;
}

function createPost({author, title, markdown}) {
    let dirName = title.toLowerCase().split(' ').join('_');
    return new Promise((resolve, reject) => {
        fsPromises.mkdir(`./public/posts/${dirName}`)
        .then(() => {
            let promises = [
                // Create data.json file
                fsPromises.writeFile(
                    `./public/posts/${dirName}/data.json`,
                    JSON.stringify({
                        date: new Date(),
                        author,
                        title
                    })),
                // Create markdown file 
                fsPromises.writeFile(
                    `./public/posts/${dirName}/index.md`,
                    markdown)
            ];
            Promise.all(promises)
            .then((data) => resolve({
                message: "Successfully create new post", 
                title,
                author
            }));
        })
        .catch((error) => reject(error))
    })   
}

function getPost(title) {
    let dirName = title.toLowerCase().split(' ').join('_');
    let promises = [
        // fetch metadata
        fsPromises.readFile(
            `./public/posts/${dirName}/data.json`,
            'utf8'),
        // fetch content
        fsPromises.readFile(
            `./public/posts/${dirName}/index.md`,
            'utf8')
    ];
    return Promise.all(promises)
}

function getEvents() {
    return fsPromises.readdir("./public/events") 
}

module.exports = {
    getIP,
    getPosts,
    getPost,
    createPost,
    getEvents,
    log
}