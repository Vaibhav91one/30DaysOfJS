const map = (arr, fn) => {
const mappedArray = [];
arr.forEach((element, index) => {
    mappedArray[index] = fn(element,index);
});
return mappedArray;
}

/*
In this question we needed to take argument, arr and a function fn and we need to return mapped array after the function fn has ran for all the element in the arr.
we initialize an empty mapped array 
we use for each loop on arr and for each element and its index, we add index element to mapped array which is returned from fn(element,index)
and finally return mappedArray.   
*/