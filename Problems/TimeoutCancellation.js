const cancellable = (fn,args,t) =>{
    
    let timer1 = settimeout(() =>{fn(...args)}, t)
    
    const cancelFn = () => clearTimeout(timer1);
    return cancelFn;
}

//same concept as interval cancellation