const { test, expect } = require('@jest/globals')
const fs = require('fs')
// const main = require('../main')
const main = require('../main')
const html = require('../index.html')

test('positions relate to index', () => {
  expect(POSITIONS[0]).toBe('one');
});
