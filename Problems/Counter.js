// const createCounter = (n) => {
//     return () => {return n++}}

//Faster than the previous one
const createCounter = (n) => {
    let count = -1;
    return () => {return n + (count = count +1)}}

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12

/*
This is just simple way to return increment value. Lets see what happens step by step:
1. const f calls function createCounter 
2. which then return a function call 
3. Now, f() have a function call in it.
4. Now, if we call f() we will see it return n and will n++. 
5. Here, when we n++ it will return n it will increment after the line has executed.
*/