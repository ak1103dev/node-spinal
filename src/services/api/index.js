const { addPath } = require('app-module-path');
addPath(`${__dirname}/../../../`);

const config = require(`config`)();
const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send('hello');
})

app.listen(config.api.port, () => {
    console.log('listen on port', config.api.port);
})