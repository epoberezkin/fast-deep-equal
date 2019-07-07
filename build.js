'use strict';

var fs = require('fs');
var doT = require('dot');
doT.templateSettings.strip = false;

var jst = doT.compile(fs.readFileSync('./src/index.jst', 'utf8'));
fs.writeFileSync('./index.js', jst({es6: false}));
try { fs.mkdirSync('./es6'); }  catch(e) {}
fs.writeFileSync('./es6/index.js', jst({es6: true}));
