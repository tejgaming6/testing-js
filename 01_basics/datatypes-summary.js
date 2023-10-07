// primitive or non primitive 
// call by value or call by reference 
// Primitive 7 categories 
// type : String Number, Boolean, null , undefined, Symbol, Bigint 
// reference / non premitive 
// direactly allowed 
// Array, Objects Functions 

//js language is static or dynamic?
//const bigNumber = 4528747835647865784n
// Bigint

// non premitive / reference 

// const heros = ["spiderman", "Ironman", "Thor", "Hulk"];
// let details = {
//     name: "tej",
//     age: "will not reveal"
// }

// const myfunction = function () {
//     console.log("bye");
// }

// console.log(typeof );

// // https://262.ecma-international.org/5.1/#sec-11.4.3

// data type summary 

// const stringChecking = "it's a string"; //string
// const numberChecking = 25; // number
// const boleanChecking = true; // boolean
// const nullchecking = null; // object 
// const unefinedChecking = undefined; // undefind 
// let undefichecking; // undefined
// let symbolChecking = Symbol('i24') // symbol
// let symChecking = Symbol('124') // symbol
// let biginitChecking = 92947826329864923649n; // biginit
// console.log(typeof stringChecking); 
// console.log(typeof numberChecking);
// console.log(typeof boleanChecking);
// console.log(typeof nullchecking);
// console.log(typeof unefinedChecking);
// console.log(typeof undefichecking);
// console.log(typeof symbolChecking);
// console.log(typeof symChecking);
// console.log(typeof biginitChecking);
// console.log(symbolChecking === symChecking); // false 

// non premitive / reference

// const heros = ["spiderman", "Ironman", "Thor", "Hulk"];
// let details = {
//     name: "tej",
//     age: "will not reveal"
// }

// const myfunction = function(){
//     console.log("bye");
// }
// console.log(typeof myfunction); // function but said Function Object 
// console.log(typeof details);// Object
// console.log(typeof heros); // Object

//  ____________________________________________________

// stack & heap 
/* 
how memory works in js 
automatic garbage collection 
primative & non primative / refernece 

2 types of memories 

stack for primative 
string, number, boolean, biginit, symbol, null, undefined

stack data sends copy 
example below
*/
let exampleStackOne = "this is first example";
let exampleStackTwo = exampleStackOne
 // console.log(exampleStackTwo);
exampleStackTwo = "this is second example";
console.log(exampleStackOne);
console.log(exampleStackTwo);

// first we got copy of exampleStackOne into exampleStackTwo then we had changed data but it didn't got changed for exampleStackOne 

//Heap = non primative / refernce 

let userOne = {
    name: "rex",
    age: "unknown"
}
let userTwo = userOne;

userTwo.age = 22;

console.log(userOne);
console.log(userTwo);
// at non primitive / refernce if you take refernce from one object & edit it, it will changed for both example you take data from xyz to xyzz, if you change things in xyzz, xyz data will be changed to 