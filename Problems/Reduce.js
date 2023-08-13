const reduce = (nums, fn, init) => {
    let Result = init;
    nums.forEach((element, index) => {
        Result = fn(Result, element);
    });
    return Result;
}


/*
Problem statement: 
Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.

We simply have to return the end result for each function that is passed. that is reduce
So, initialilze result with init and pass result to fn function because if we pass init then we will will surely get the accumulated value that in result but then we will not able to pass it to fn which require accumulated value.
 
*/