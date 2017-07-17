const express = require('express');
const bodyParser = require('body-parser');
const vueRenderer = require('vue-server-renderer');
const Store = require('./server/store');
const template = require('fs').readFileSync(__dirname + '/index.html', 'utf8');
const vueBundle = vueRenderer.createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'));

const app = express();
const port = process.env.PORT || 9000;

app.use(require('cors')());
app.use(bodyParser.json());
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/src/assets', express.static(__dirname + '/src/assets'));
app.use('/src/images', express.static(__dirname + '/src/images'));

app.use('/api', require('./server/router'));
app.get('**', (req, res) => {
    Store.Activities().then(() => Store.Configs())
        .then(() => {
            const context = {
                url: req.path,
                state: Store.State
            };
            vueBundle.renderToString(context, (err, html) => {
                if (err) return console.log(err);
                res.end(template.replace('<div id="app"></div>', html));
            });
        })
        .catch(err => res.status(500).send(err));
});

app.listen(port, () => console.log('server start port ' + port));