async function sleep(millis) {
    await new Promise((resolve, reject)=>{
    (setTimeout(resolve, millis))
    })
}

/* Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
what this means is that we need to return a resolve after the given millis

so we use await/return to wait for the Promise to resolve and we use settimeout function to wait for resolve execution.
*/