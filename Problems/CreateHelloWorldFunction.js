// var createHelloWorld = function() {
//     return function(...args) {
//         return "Hello World";
//     }
// };


var createHelloWorld = () => { return (...args) => {return "Hello World"}} 
const f = createHelloWorld();
console.log(f());


/*
This is jut a simple function in function concept. Lets see what happens step by step:
1. const f calls function createHelloWorld 
2. which then return a function call 
3. Now, f() have a function call in it.
4. Now, if we call f() we will see it return Hello world. We can see the output if we console.log(f())
*/