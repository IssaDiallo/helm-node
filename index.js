'use strict';

// const express = require('../projects/kwx/kh-hello-world-svc/node_modules/express');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world, from Issa Diallo!!!\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);