// Lecture 5 - Data Types

// Primitive Data Types - Number, String, Boolean, Null, Undefined, Symbol, BigInt

// Number
let a = 4;
let b = 5.6;

console.log('a = ', a, 'b = ', b);
console.log('typeof a = ', typeof a, 'typeof b = ', typeof b);

// String
let c = "Hello";
let d = 'World';    // Single quotes are also valid

console.log('c = ', c, 'd = ', d);
console.log('typeof c = ', typeof c, 'typeof d = ', typeof d);

// Boolean
let e = true;
let f = false;

console.log('e = ', e, 'f = ', f);
console.log('typeof e = ', typeof e, 'typeof f = ', typeof f);

// Undefined
let g = undefined;

console.log('g = ', g);
console.log('typeof g = ', typeof g);

// Symbol
let h = Symbol("I am a symbol");

console.log('h = ', h);
console.log('typeof h = ', typeof h);

// BigInt
let i = BigInt("123456789012345678901234567890");

console.log('i = ', i);
console.log('typeof i = ', typeof i);

// Using n in the end of the number to make it a BigInt
let n = 12n;
console.log('n + 1n = ', n + 1n);
console.log('typeof n = ', typeof n);

// Null
let j = null;   // Null is an object

console.log('j = ', j);
console.log('typeof j = ', typeof j);

// Non-Primitive Data Types - Array, Object

// Array
let k = [1, 2, 3, 4, 5];

console.log('k = ', k);
console.log('typeof k = ', typeof k);

// Object
let l = {name: "John", age: 20};

console.log('l = ', l);
console.log('typeof l = ', typeof l);