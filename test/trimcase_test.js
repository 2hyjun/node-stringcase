/**
 * Test case for trimcase.
 * Runs with mocha.
 */
"use strict";

const trimcase = require('../lib/trimcase.js'),
    assert = require('assert');

describe('trimcae', () => {
    it('Trimcase', (done) => {
        assert.equal(trimcase(' foo bar baz '), 'foo bar baz');
        assert.equal(trimcase(''), '');
        done();
    });
});

