# Vietcode Server
Storage server for Vietcode

## 💻 Development setup

Clone this repository to your local machine:

`
git clone https://github.com/duc0905/-NEW-vietcode-backend.git
`

Then, install the dependencies:

`
npm install
`

That's it. Now, you can run the server on your local machine using this command:

`
npm start
`

The server will run with nodemon installed as development dependency package, and it has hot reload functionality.

## 📣 Usage

Routes:

| HTTP Method| Endpoint      | Description                      |
| ---------  | ------------- | -------------------------------- |
| GET        | /posts        | abcd1234                         |
| GET        | /posts/:title | dcba4321                         |
| POST       | /posts        | dcba4321                         |
| GET        | /events       | abcd1234                         |
| GET        | /events/:name | dcba4321                         |

## :rocket: Develop

All routes are inside of /routes/ directory.
Helper functions are in /helpers/ directory.
Posts are stored in /assets/posts/ directory and follows the format:
- The name of the directory is the title of the post with all lowercase characters and replaced whitespace with underscore character (_).
- The content of the post is in index.md file inside of its folder.
- The metadata of the post is in data.json file inside of its folder.
