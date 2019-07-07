'use strict';

var fs = require('fs');
var doT = require('dot');
doT.templateSettings.strip = false;

var jst = doT.compile(fs.readFileSync('./src/index.jst', 'utf8'));
fs.writeFileSync('./index.js', jst({es6: false }));
fs.writeFileSync('./react.js', jst({es6: false, react: true }));
try { fs.mkdirSync('./es6'); }  catch(e) {}
fs.writeFileSync('./es6/index.js', jst({es6: true }));
fs.writeFileSync('./es6/react.js', jst({es6: true, react: true }));
try { fs.mkdirSync('./es6cycles'); }  catch(e) {}
fs.writeFileSync('./es6cycles/index.js', jst({es6: true, cycles: true}));
fs.writeFileSync('./es6cycles/react.js', jst({es6: true, react: true, cycles: true }));
