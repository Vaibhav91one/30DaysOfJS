const expect = (val) => {
    const throwError = (ErrorString) => {throw new Error(ErrorString)};
    return{
    toBe: (val2) => {return val2 === val ? true : throwError("Not Equal")},
    notToBe: (val2) => {return val2 !== val ? true: throwError("Equal")}
 }
}


console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"

/*
This function have object with two keys which are toBe and notTobe whose value are a function. Lets see what happens step by step:
1. expect call the key toBe whose value is a function which return if val === val2 else throwsError "Not Equal"
2. expect call the key notToBe whose value is a function which return if val !== val2 else throwsError "Equal"
3. ThrowError function throws an error which takes arguement as string to show when error Occurs. 
*/