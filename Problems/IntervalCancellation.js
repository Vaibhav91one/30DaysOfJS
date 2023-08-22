const cancellable = (fn,args,t) =>{
//running the function first time
fn(...args);

//calling the function every t interval
let timer = setInterval(()=>{fn(...args)},t)

// calling the cancel function after cancelT ms
let cancelFn = () => clearInterval(timer);
return cancelFn;
}

//The cancelFn will not execute when the cancellable is defined, only the fn(...args) will run 
// when cancellable function is called it will check return statement and execute cancelFn();