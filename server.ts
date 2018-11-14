require('zone.js/dist/zone-node');
require('reflect-metadata');

const {renderModuleFactory} = require('@angular/platform-server');
const {enableProdMode} = require('@angular/core');
const {AppServerModuleNgFactory} = require('./dist/ssr-server/main');

const express = require('express');
const {readFileSync} = require('fs');

enableProdMode();

const app = express();

const indexHtml = readFileSync(
    __dirname + '/dist/ssr/index.html',
    'utf-8'
).toString();

app.get('*.*', express.static(__dirname + '/dist/ssr'));

app.route('*').get((req, res) => {

    renderModuleFactory(AppServerModuleNgFactory, {
        document: indexHtml,
        url: req.url
    })
    .then(html => {
        res.status(200).send(html);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});

app.listen(9000, () => console.log('It works'));
