"use strict";

var assert = require('assert');
var fs = require('fs');

var a = JSON.parse(fs.readFileSync('c.json'));
var b = JSON.parse(fs.readFileSync('d.json'));

try {
    assert.deepEqual(a,b);
} catch (e) {
    console.log(e);
}
