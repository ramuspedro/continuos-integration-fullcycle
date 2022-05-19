const assert = require('assert');
const multiply = require("./math.js");

describe('Teste multiplicação', () => {
	it('10 vezes 10 é igual a 100', () => {
		assert.equal(100, multiply(10,10), "O resultado eh 100");
	});
	it('8 vezes 8 é diferente de 100', () => {
		assert.notEqual(100, multiply(8,8), "O resultado não eh 100");
	});
});