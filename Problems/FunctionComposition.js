const compose = (functions) =>{
  if(functions.length === 0){
    return function(x) {return x}
  }
  return function(x){
    let result = functions[functions.length - 1](x);
    for(let i = functions.length - 2; i >=0; i--){
        result = functions[i](result);
    }
    return result;
  }
}

/*
The problem statement:
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

Simplifying, what the problem is that we have to perform an array of functions on a given element x and provide the end result.

What we do is that:
1. we first check if the functions is empty or not, if empty then we return x;
2. else we go on with the problem, since we have to traverse from right to left, we use a reversed for loop
3. we store the result of the last function ran on x, and then we start from the index of second last problem
4. and we store the result of each function on result in result.

hahaha... that is really confusing... what I meant is this way we pass the results from one function to another function and keep storing it.
*/