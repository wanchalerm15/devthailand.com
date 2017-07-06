const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 9000;

app.use(require('cors')());
app.use(bodyParser.json());

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/dist', express.static(__dirname + '/dist'));

app.use('/Api', require('./server/router'));

app.listen(port, () => console.log(`Server is started port ${port}`));