const fs = require("fs"),
    fsPromises = fs.promises,
    os = require("os");

const { Post } = require('../models');

function getIP() {
    let ifaces = os.networkInterfaces();

    let IPs = [];

    Object.keys(ifaces).forEach((ifname) => {
        // if (ifname !== 'Wi-Fi') {
        //     return;
        // }
        console.log(ifname);
        ifaces[ifname].forEach((iface) => {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                return;
            } else {
                console.log(iface);

                IPs.push(iface.address);
            }
        })
    });
    console.log(IPs);
    return IPs[0];
}

function log({ message, data }, error) {
    let errorMessage = "There was an error!";
    let successMessage = "Succeeded!";
    console.log((error) ? errorMessage : successMessage);
    console.log(JSON.stringify(data));
}

function getPosts() {
    return fsPromises.readdir('./public/posts')
}

function createPost(data) {
    
}

// lat nua sua ca cai nay nua
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
