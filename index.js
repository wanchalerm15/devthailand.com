const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());


app.listen(port, () => console.log('server start port ' + port));