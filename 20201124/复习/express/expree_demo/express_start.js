// express构建的四个步骤
const express = require('express');

let server = express();

server.listen(3000);

server.use((request, response) => {
    response.end('express start1234');
});