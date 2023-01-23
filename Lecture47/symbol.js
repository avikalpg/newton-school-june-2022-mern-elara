const mySymbol1 = Symbol('1');

console.log(mySymbol1);
console.log(Symbol.for('1'))

const mySymbol2 = Symbol('1');

console.log(Symbol.keyFor(Symbol.for('ajanta')));