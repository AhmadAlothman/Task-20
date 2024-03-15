// setTimeout: Used to execute a function once after a specified period of time.

console.log("Start executing... ");


setTimeout( ()=>{
    console.log("hello ");
} , 2000  ) // It waits for 2 seconds (2000 milliseconds) and then executes the function.


// setInterval: Used to regularly execute a function between specified time intervals.


let counter= 0;


let intervalId = setInterval( ()=>{
    counter++;
    console.log(`Job No.${counter} has been executed`);

    if( counter === 5){
        clearInterval(intervalId); // Stops executing the function after 5 times.
    }
} , 2000 )