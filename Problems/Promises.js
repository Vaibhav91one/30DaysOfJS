const addTwoPromises = async function(promise1, promise2){
    return Promise.all([promise1, promise2])
    .then(value => value.reduce((acc,val) => acc+val,0))
}

let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
let promise2 = new Promise(resolve => setTimeout(() => resolve(2), 20));

console.log(addTwoPromises(promise1, promise2))

/* Problem Statement: 
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 
We have to make a new promise and it should resolve the sum of the resolved value of promise 1 and 2.

Approach.

1. We use promise.all to get all the promises and it takes an array of promises as an input and create a new promise
2. we start resolving the promise, since the input of promises was array it returns an array of resolved promises.
3. We use reduce method on the value (which is an array)
4. the function inside reduce takes total value and current value as argument .
5. Now the function will add our current val from value to acc and acc+val, 0, 0 here means the initial value.
*/