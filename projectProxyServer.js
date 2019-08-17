const proxy = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');
var open = require('open');

const bundler = new Bundler('public/index.html', {
	cache: false
});

const app = express();

var apiProxy = proxy(['/testTask', '/bugSeverity', '/bugStatus', '/autoTestReport'], {
	target: 'http://127.0.0.1:5000',
	changeOrigin: true
});

app.use('/', apiProxy);

app.use(bundler.middleware());

app.listen(Number(3033));

(async () => {
	await open('http://localhost:3033', 'chrome');
})();
