const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 9000;

app.use(require('cors')());
app.use(bodyParser.json());
app.use('/Api', require('./server/router'));

app.listen(port, () => console.log(`Server is started port ${port}`));