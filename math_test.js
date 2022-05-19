const assert = require('assert');
const multiply = require("./math.js");

describe('Teste multiplicação', () => {
	it('10 * 10 = 100', () => {
		assert.equal(100, multiply(10,10), "O resultado eh 100");
	});
});