const { test } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply } = require('../src/calculator');

test('add returns the sum of two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});

test('subtract returns the difference of two numbers', () => {
  assert.strictEqual(subtract(10, 4), 6);
  assert.strictEqual(subtract(0, 5), -5);
});

test('multiply returns the product of two numbers', () => {
  assert.strictEqual(multiply(3, 4), 12);
  assert.strictEqual(multiply(0, 99), 0);
});
