// Create web server
// Create a web server that listens on port 3000 and responds with the comments array as JSON.

const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(comments));
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});