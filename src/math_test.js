const assert = require('assert');
const {multiply, sub, add} = require("./math.js");

describe('Teste multiplicação', () => {
	it('10 vezes 10 é igual a 100', () => {
		assert.equal(100, multiply(10,10), "O resultado eh 100");
	});
	it('8 vezes 8 é diferente de 100', () => {
		assert.notEqual(100, multiply(8,8), "O resultado não eh 100");
	});
});

describe('Teste subtração', () => {
	it('10 menos 10 é igual a 0', () => {
		assert.equal(0, sub(10,10), "O resultado eh 0");
	});
	// criar um teste que não funciona para teste
	it('20 menos 10 é igual a 10', () => {
		assert.equal(10, sub(20,10), "O resultado eh 10");
	});
});

describe('Teste soma', () => {
	it('10 mais 10 é igual a 20', () => {
		assert.equal(20, add(10,10), "O resultado eh 20");
	});
});