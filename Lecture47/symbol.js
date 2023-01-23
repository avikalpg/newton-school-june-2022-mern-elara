const mySymbol1 = Symbol('1');

console.log(mySymbol1);
console.log(Symbol.for('1'))

const mySymbol2 = Symbol('1');

console.log(Symbol.keyFor(Symbol.for('ajanta')));

const me = {
	fname: "Avikalp",
	lname: "Gupta",
}

me[Symbol("age")] = 27;
me[Symbol.for("sex")] = "Male";

console.log("me: name property", Object.getOwnPropertyNames(me));
console.log("me: symbol property", Object.getOwnPropertySymbols(me));

console.log("JSON: name property", Object.getOwnPropertyNames(JSON));
console.log("JSON: symbol property", Object.getOwnPropertySymbols(JSON));

for (const symProp of Object.getOwnPropertySymbols(JSON)) {
	console.log(symProp.description, symProp, JSON[symProp]);
}

for (const symProp of Object.getOwnPropertySymbols(me)) {
	console.log(symProp.description, symProp, me[symProp]);
}

console.log(JSON.stringify(me));