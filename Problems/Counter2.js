const createCounter = (init) => {
    return{
        increment: () =>{return ++init},
        reset: () =>{return this.init = init},
        decrement: () =>{return --init},
    }
}


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

// This approach is same as tobe or not to be
// 1. we increment using ++init as it will return the value after increment not before increment such as init++
// 2. same with decrement 
// 3 and we store the original value as let which cannot be re declared and is of block scoped not functional scope such as var  