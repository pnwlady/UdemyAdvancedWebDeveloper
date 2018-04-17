var num = 0;
setInterval(function() {
    num++;
    console.log("num:", num);
}, 1000);

//logs num: 1 and continues until we stop.

var num = 0;
var intervalId = setInterval(function() {
    num++;
    console.log("num:", num);
    if (num === 3) {
        clearInterval(intervalId);
    }
}, 1000);

//logs num: 1 and continues until 3, stops after 3.
