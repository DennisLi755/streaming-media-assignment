const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const pageObj = {
  index,
  page2,
  page3,
};

const getPage = (request, response, type) => {
  response.writeHead(200, { 'Content-type': 'text/html' });
  response.write(pageObj[type]);
  response.end();
};

module.exports.getPage = getPage;
