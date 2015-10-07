"use strict";

var assert = require('assert');
var fs = require('fs');

describe('assert deep equal works', function() {

    it('deep equal should work', function() {
        var a = JSON.parse(fs.readFileSync('c.json'));
        var b = JSON.parse(fs.readFileSync('d.json'));
        assert.deepEqual(a,b);
    });
});
