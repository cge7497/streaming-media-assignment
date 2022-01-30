const fs = require('fs');


const getIndex = (request, response) => {
  const index = fs.readFileSync(`${__dirname}/../client/client.html`);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getPage2 = (request, response) => {
  const index = fs.readFileSync(`${__dirname}/../client/client2.html`);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getPage3 = (request, response) => {
  const index = fs.readFileSync(`${__dirname}/../client/client3.html`);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

module.exports={
  getIndex,
  getPage2,
  getPage3,
};
