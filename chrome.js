#!/usr/bin/env node

const chromeLaunch = require('chrome-launch'); // eslint-disable-line import/no-extraneous-dependencies

const url = 'http://google.com';
const args = [ "--load-extension=C:/Users/g.k.sudharsan/Desktop/test/demo/example-webextension-master/add-on"];

chromeLaunch(url, { args });



console.log('A new instance of Chrome should now be open in the background.'); // eslint-disable-line no-console
