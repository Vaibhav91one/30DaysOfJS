const timeLimit = (fn,t) => {
    return async (...args) => {
       const originalPromise = fn(...args);
       const rejectPromise = new Promise((resolve, reject) =>{setTimeout(()=>{reject("Time Limit Exceeded")},t)});

       return Promise.race(originalPromise, rejectPromise);
    }
}


/*
Problem Statemetn: Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

Simplifying, we have to return a rejected promise if the fn function which returns a resolved result does not gets completed in the given t ms.

we make to promises one with the given functin fn which is a promise function,
other promise is a rejected promise, which gets executed in t ms
Now, we use Promsie.race to see which promise finishes earlier, Promise.race takes input as an array of promises.
*/