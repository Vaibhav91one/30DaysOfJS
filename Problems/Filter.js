const filter = (arr, fn) =>{
const filteredArr = [];
    arr.forEach((element, index) => {
        if(fn(element,index)){
            filteredArr.push(element);
        }
    });
    return filteredArr;
}

/*
Problme statement: 
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

So, we simply need to add element to filtered array when the function return true

So, for each element in array we check if function returns true, if it return true we add it to the filtered array.

*/