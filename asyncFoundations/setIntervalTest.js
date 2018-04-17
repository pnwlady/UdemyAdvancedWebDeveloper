var num = 3;
var countInterval = setInterval(function() {
    num--;
    console.log("Timer:", num);
    if (num === 1) {
        clearInterval(countInterval);
        console.log("Ring Ring Ring!!!")
    }
}, 1000);
