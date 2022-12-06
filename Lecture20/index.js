// a OP b
// How to check for operator precendence between operator OP1 and operator OP2?

// a OP1 b OP2 c ==> ((a OP1 b) OP2 c) OR (a OP1 (b OP2 c))
// if 1st option, then OP1 > OP2
// else OP2 > OP1

// a = 3, b = 5, c = 7
// OP1 = +; OP2 = *
// &&, ||, ^, !=, ==, +, -, *, /, % ... some of the many operators
// - => binary minus vs unary minus (-6 + 8)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(6 ** 2 / 2)
