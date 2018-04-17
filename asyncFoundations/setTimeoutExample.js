function callback() {
    console.log("callback function");
}

var delay = 1000;
setTimeout(callback, delay);
//after delay prints callback function

var timerId = setTimeout(function() {
    console.log("This function runs every 30 seconds");
}, 30000);

setTimeout(function() {
    console.log("Canceling the first setTimeout", timerId);
    clearTimeout(timerId);
}, 2000);
