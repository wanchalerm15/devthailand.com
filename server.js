const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 9000;
const store = require('./server/store');

app.use(require('cors')());
app.use(bodyParser.json());

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/dist', express.static(__dirname + '/dist'));

app.use('/Api', require('./server/router'));

// vue server render
const renderer = require('vue-server-renderer');
const bundle = renderer.createBundleRenderer(require('./dist/vue-ssr-bundle.json'));
const template = require('fs').readFileSync(__dirname + '/index.html', 'utf8');
app.get('*', function(req, res) {
    store.getVideos().then(videos => {
        bundle.renderToString({
                state: { videos },
                url: req.path
            },
            (err, html) => res.end(template.replace('<div id="app"></div>', html)));
    });
});

app.listen(port, () => console.log(`Server is started port ${port}`));